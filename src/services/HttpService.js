import http from '@/http.js'

class HttpService {
  $getAll () {
    return http.get('/users')
  }

  $create (data) {
    return http.post('/user/register', data)
  }
  // get (id) {
  //   return http.get(`/user/${id}`)
  // }
  //
  // delete (id) {
  //   return http.delete(`/users/${id}`)
  // }
  //
  // $auth (data) {
  //   return http.post('/user/login', data)
  // }
  //
  // logout () {
  //   return http.get('/user/logout')
  // }
  //
  // update (id, data) {
  //   return http.put(`/######/${id}`, data)
  // }
  //
  // findByTitle (name) {
  //   return http.get(`/users?name=${name}`)
  // }
  //
  // /** Special */
  // $me () {
  //   return http.get('/me')
  // }
}

export default new HttpService()
