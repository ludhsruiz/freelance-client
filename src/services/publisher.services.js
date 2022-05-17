import axios from 'axios'

class PublisherService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/publishers` })
    }

    getPublishers = () => {
        return this.api.get('/')
    }

    getOnePublishers = id => {
        return this.api.get(`/${id}`)
    }
    //////////////////////////////////
    getPublisherByOwner = owner_id => {

        return this.api.get(`/owner/${owner_id}`)

    }

    createPublisher = publisher => {
        return this.api.post('/create', publisher)
    }

    editPublisher = (publisher_id, publisher) => {
        return this.api.put(`/${publisher_id}/edit`, publisher)

    }

    deletePublisher = publisher_id => {
        return this.api.delete(`/${publisher_id}/delete`)

    }

    followPublisher = publisher_id => {
        return this.api.put(`/${publisher_id}/follow`)
    }

    unfollowPublisher = publisher_id => {
        return this.api.put(`/${publisher_id}/unfollow`)
    }

}

const publisherService = new PublisherService()

export default publisherService