import axios from 'axios';

export const request = async (endpoint, method, data = null, params = null) => {
  const result = await axios(`https://e-commerce-server-codify.herokuapp.com/${endpoint}`, {
    method,
    data,
    params
  })
  return result.data
};
