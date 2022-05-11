import axios from 'axios'

class PostsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_api_API_URL}/offers` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getPosts = () => {
        //return this.api.get(`${id}`)
    }

    createPost = post => {
        return this.api.post('/send', post)
    }

    deletePost = id => {
        return this.api.delete(`${id}/delete`)
    }

    verify = token => {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const postsService = new PostsService()

export default postsService