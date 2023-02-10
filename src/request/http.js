import axios from "axios";
import QS from "qs";
import store from "@/store/index";
import router from "@/router/index";
import { Toast } from "vant";

const tip = (msg) => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true,
  });
};

const toLogin = () => {
  router.replace({
    path: "/login",
    query: {
      redirect: router.currentRoute.fullPath,
    },
  });
};

const errorHandle = (status, other) => {
  switch (status) {
    case 401:
      toLogin();
      break;
    case 403:
      tip("登录过期，请重新登录");
      localStorage.removeItem("token");
      store.commit("loginSuccess", null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    case 404:
      tip("请求的资源不存在");
      break;
  }
};

const instance = axios.create({ timeout: 1000 * 12 });

instance.defaults.headers.post["Content-Type"] = "application/x-www-urlencoded";

instance.interceptors.request.use(
  (config) => {
    const token = store.state.token;
    token && (config.headers.Authorization = token);
  },
  (error) => Promise.error(error)
);

instance.interceptors.response.use(
  (res) => (res.status == 200 ? Promise.resolve(res) : Promise.reject(res)),
  (error) => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理超时或断网
      if (!window.navigator.onLine) {
        store.commit("changeNetwork", false);
      } else {
        return Promise.reject(error);
      }
    }
  }
);

export default instance;
