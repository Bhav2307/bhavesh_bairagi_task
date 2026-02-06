import API from './core/api';

export const userService = {
  userList: async (params: object) => {
    return API.get('https://jsonplaceholder.typicode.com/users' + encodeURI(''), params);
  },
  
};
