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
        return this.api.get('/')
    }

    getAllOfferByUser = id => {
        return this.api.get(`/own/${id}`)
    }

    getOneOffer = id => {
        return this.api.get(`/${id}`)
    }

    createOffer = offer => {
        return this.api.post('/create', offer)
    }

    editOffer = (id, offer) => {
        console.log(offer)
        return this.api.put(`/${id}/edit`, offer)
    }

    deleteOffer = id => {
        return this.api.delete(`/${id}/delete`)
    }

    offerSubscribe = id => {
        return this.api.put(`/${id}/subscribe`)
    }

    offerUnsubscribe = id => {
        return this.api.put(`/${id}/unsubscribe`)
    }

    verify = token => {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }

    offersByUser = id => {
        return this.api.get(`/own/${id}`)
    }
}

const offersService = new OffersService()

export default offersService