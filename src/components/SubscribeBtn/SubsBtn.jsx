import { Button } from "react-bootstrap"

const SubsBtn = ({ btnState, handleSubsBtn }) => {

    return (
        <Button className='myBtn' variant="dark" onClick={handleSubsBtn}>{btnState}</Button>
    )
}

export default SubsBtn

