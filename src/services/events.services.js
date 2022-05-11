import axios from 'axios'

class EventsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_api_API_URL}/events` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllEvents = () => {
        return this.api.get('/')
    }

    getOneEvent = id => {
        return this.api.get(`/${id}`)
    }

    createEvent = event => {
        return this.api.post('/create', event)
    }

    editEvent = (id, event) => {
        return this.api.put(`${id}/edit`, event)
    }

    deleteEvent = id => {
        return this.api.delete(`${id}/delete`)
    }
    
    eventAttendance = id => {
        return this.api.put(`${id}/attendance`)
    }

    eventLeave = id => {
        return this.api.put(`${id}/leave`)
    }

    verify = token => {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const eventsService = new EventsService()

export default eventsService