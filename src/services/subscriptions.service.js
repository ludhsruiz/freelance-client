import axios from 'axios'

class SubscriptionsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/subscription` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllSubscriptions = () => {
        return this.api.get(`/`)
    }

    getOneSubscriber = id => {
        return this.api.get(`/${id}/publisher`)
    }

    createSubscription = subscription => {
        return this.api.post(`/create`, subscription)
    }

    deleteSubscription = id => {
        return this.api.delete(`/${id}/delete`)
    }

}

const subscriptionsService = new SubscriptionsService()

export default subscriptionsService