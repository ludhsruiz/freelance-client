import { Row, Col } from "react-bootstrap"
import Loader from "../Loader/Loader"
import CourseCard from "../CourseCard/CourseCard"

const CoursesList = ({ courses }) => {

    return (
        courses.length
            ?
            <Row>
                {
                    courses.map(course => {
                        return (
                            <Col md={{ span: 4 }} key={course._id}>
                                <CourseCard {...course} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default CoursesList