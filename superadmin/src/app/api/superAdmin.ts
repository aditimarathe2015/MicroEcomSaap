import axios from "axios";

//const BASE_URL = process.env.React_backend_base_url || "http://localhost:3300/auth/";
const BASE_URL =  "http://localhost:3300/auth"


export const login= async (data:any) => {
 // const response = await axios.post(`${BASE_URL}/login`, {
 try{
 const response =await axios.post('http://localhost:3300/auth/login', {
    username: data.username,
    password: data.password
  });
  if (response.data?.token) {
    localStorage.setItem('superAdminToken', response.data.token);
  }
  return response.data;
  }catch(error){
    console.error('Login error:', error);
    throw error;
  }
  
};

export const getUser = async () => {
  const token = localStorage.getItem('superAdminToken');
  const response = await axios.get(`${BASE_URL}/adminusers`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  });
  return response.data;
};

export const createuser = async (data:any) => {
  const token = localStorage.getItem('superAdminToken');
  const response = await axios.post(`${BASE_URL}/createuser`, data, {
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  });
  return response.data;
}
