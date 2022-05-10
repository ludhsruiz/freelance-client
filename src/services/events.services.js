import axios from 'axios'

class EventsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/events` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllEvents = () => {
        return this.app.get('/')
    }

    getOneEvent = id => {
        return this.app.get(`/${id}`)
    }

    createEvent = event => {
        return this.app.post('/create', event)
    }

    editEvent = (id, event) => {
        return this.app.put(`${id}/edit`, event)
    }

    deleteEvent = id => {
        return this.app.delete(`${id}/delete`)
    }
    
    eventAttendance = id => {
        return this.app.put(`${id}/attendance`)
    }

    eventLeave = id => {
        return this.app.put(`${id}/leave`)
    }

    verify = token => {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const eventsService = new EventsService()

export default eventsService