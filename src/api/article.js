import { sq } from "./base";
import axios from "axios";
import qs from "qs";

const article = {
  getArticleList() {
    return axios.get(`${sq}/topics`);
  },

  getArticleDetail(id, params) {
    return axios.get(`${sq}/topic/${id}`, {
      params,
    });
  },

  login(params) {
    return axios.post(`${sq}/accesstoken`, sq.stringify(params));
  },
};

export default article;