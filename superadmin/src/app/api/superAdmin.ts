import axios from "axios";

const BASE_URL = "http://localhost:4000/rest";

export const getSuperAdmin = async () => {
  const response = await axios.get(`${BASE_URL}/superadmin`);
  return response.data;
};

export const postTenent = (data:any) => {
  return axios.post(`${BASE_URL}/tenent`, data);
};

export const getTenent = async () => {
  const response = await axios.get(`${BASE_URL}/tenent`);
  return response.data;
};
