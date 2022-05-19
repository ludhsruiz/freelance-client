import axios from 'axios'

class CoursesService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/courses` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllAttendants = id => {
        console.log('LLego a servicios cursos')
        return this.api.get(`/own/${id}`)
    }

    getAllCourses = () => {
        return this.api.get('/')
    }

    getOwnAttendants = () => {
        return this.api.get('/own')
    }

    getAllAttendants = id => {
        return this.api.get(`/own/${id}`)
    }

    getOneCourse = id => {
        return this.api.get(`/${id}`)
    }

    createCourse = course => {
        return this.api.post('/create', course)
    }

    editCourse = (id, course) => {
        return this.api.put(`/${id}/edit`, course)
    }

    deleteCourse = id => {
        return this.api.delete(`/${id}/delete`)
    }

    courseAttendance = id => {
        return this.api.put(`/${id}/attendance`)
    }

    courseLeave = id => {
        return this.api.put(`/${id}/leave`)
    }

    verify = token => {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const coursesService = new CoursesService()

export default coursesService  
