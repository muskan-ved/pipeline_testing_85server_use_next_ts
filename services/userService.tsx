import http from "./http-common";

interface values{
    id:number,
    token:String,
    data:any
}

class userService  {

  getUserProfile(id:number) {
    return http.get(`api/user/${id}`)
  }


  updateprofile({id, data, token}:values) {
    return http.put(`api/user/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      },

    })
  }

 
}

export default new userService();

