import axios from 'axios'

class CommentsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/comments` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    postComment = comment => {
        return this.app.post('/postComment', comment)
    }

    deleteComment = id => {
        return this.app.delete(`${id}/delete`, id)
    }
    
    verify = token => {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const commentsService = new CommentsService()

export default commentsService