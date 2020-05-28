import axios from "axios";

const heroku = 'https://backend-boardwalk.herokuapp.com';

export default {

  // ======== USER AUTHENTICATION ======== 
  signup: function (body) {
    return axios({
      method: 'post',
      // headers: { 'content-type': 'application/json' },
      url: heroku + "/api/users",
      data: body // grabing the object body from api
    });
  },
  login: function (body) {
    return axios({
      method: 'post',
      // headers:{ 'content-type': 'application/json' },
      url: heroku + "/auth/login",
      data: body
    });
  }
};