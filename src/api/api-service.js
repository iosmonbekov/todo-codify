import axios from 'axios';

export const request = async (endpoint, method, data = null, params = null) => {
  const result = await axios(`https://e-commerce-server-codify.herokuapp.com/${endpoint}`,{
    method: method,
    data: data,
    params: params
  })
  .then((res) => res.data)
 return result
};
