import http from '@/http.js'

class HttpService {
  getAllUsers () {
    return http.get('/users')
  }

  // get (id) {
  //   return http.get(`/user/${id}`)
  // }
  //
  // delete (id) {
  //   return http.delete(`/users/${id}`)
  // }
  //
  // $create (data) {
  //   return http.post('/user/register', data)
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
