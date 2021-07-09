import http from '../http';

type Data = {data: Shoe[]};

export const shoesService = async () => {
  const {data}: Data = await http.get('/shoes');
  return data;
};

export default shoesService;
