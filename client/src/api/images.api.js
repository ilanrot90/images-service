import request from './client';

const getImages = (_, page = 1, limit = 12) =>
  request({
    url: 'api/images/',
    params: {
      page,
      limit,
    },
  });

export { getImages };
