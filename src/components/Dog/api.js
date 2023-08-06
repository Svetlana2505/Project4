import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_d6KBflJb6GtrZ8WTFVytBsJKtncIFTBdqM6K3P3Xfz31uj0hgPgQw1LYrLUfnWBG';

export const fetchDogs = async () => {
  const { data } = await axios.get('/breeds');
  return data;
};

export const fetchDogId = async id => {
  const { data } = await axios.get('/images/search', {
    params: {
      breed_id: id,
    },
  });

  return data[0];
};
