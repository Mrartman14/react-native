import news from './news';

const api = action => {
  switch (action.type) {
    case 'GET_NEWS':
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(news), Math.random() * 1000);
      });
    default:
      throw new Error('wrong action type');
  }
};

export default api;
