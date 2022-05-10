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

    getAllCourses = () => {
        return this.app.get('/')
    }

    getOneCourse = id => {
        return this.app.get(`/${id}`)
    }

    createCourse = course => {
        return this.app.post('/create', course)
    }

    editCourse = (id, course) => {
        return this.app.put(`${id}/edit`, course)
    }

    deleteCourse = id => {
        return this.app.delete(`${id}/delete`)
    }
    
    courseAttendance = id => {
        return this.app.put(`${id}/attendance`)
    }

    courseLeave = id => {
        return this.app.put(`${id}/leave`)
    }
    
    verify = token => {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const coursesService = new CoursesService()

export default coursesService