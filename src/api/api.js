import { request } from './api-service';


export const getProducts = async () => {
  return await request('products/', 'GET')
};

export const deleteProduct = async (id) => {
  return await request(`products/${id}`, 'DELETE')
};

export const addProduct = async (data) => {
  return await request(`products/`, 'POST', data)
};
