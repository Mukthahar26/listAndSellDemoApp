import logger from '../utils/logger';

const requestBody = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
export const asyncFetch = async (url: string, request = requestBody) => {
  const data = {...requestBody, ...request};
  return fetch(url, data)
    .then(response => response.json())
    .then((res: any) => {
      return res;
    })
    .catch(err => {
      logger.log('api erro :', err);
      return false;
    });
};
