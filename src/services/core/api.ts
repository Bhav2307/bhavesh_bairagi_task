import Helper from '../../utils/helper';

const defaultHeaders = async () => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  return myHeaders;
};


const API = {
  get: async (endpoint: string, queryParam?: any) => {
    var check = await Helper.isNetAvailable();
    if (check) {
      let url = queryParam ? endpoint + '?' : endpoint;
      if (queryParam) {
        url += new URLSearchParams(queryParam).toString();
      }
      return await fetch(url, {
        method: 'GET',
        headers: await defaultHeaders(),
      })
        .then(response => response.json())
        .then(async res => {
          return res;
        })
        .catch(err => {
          return {status: false, message: err};
        });
    } else {
      return {status: false, message: "Can't connect to internet"};
    }
  }
};

export default API;


