import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/users` })
    }

    getUsers = () => {
        return this.api.get('/')
    }

    getUser = user_id => {
        return this.api.get(`/${user_id}`)
    }

    editUser = (user_id, user) => {
        return this.api.put(`/${user_id}/edit`, user)
    }

    editUserRole = (user_id, user) => {
        return this.api.put(`/${user_id}/role`, user)
    }

    deleteUser = user_id => {
        return this.api.delete(`/${user_id}/edit`)
    }

    followUser = user_id => {
        //console.log('user_id', user_id)
        return this.api.put(`/${user_id}/follow`)

    }


    unfollowUser = user_id => {
        return this.api.put(`/${user_id}/unfollow`)
    }
}

const userService = new UserService()

export default userService