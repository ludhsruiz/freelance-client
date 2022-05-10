import axios from 'axios'

class OffersService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/offers` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllOffers = () => {
        return this.app.get('/')
    }

    createOffer = offer => {
        return this.app.post('/create', offer)
    }

    editOffer = (id, offer) => {
        return this.app.put(`${id}/edit`, offer)
    }

    deleteOffer = id => {
        return this.app.delete(`${id}/delete`)
    }
    
    OfferSubscribe = id => {
        return this.app.put(`${id}/subscribe`)
    }

    verify = token => {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const offersService = new OffersService()

export default offersService