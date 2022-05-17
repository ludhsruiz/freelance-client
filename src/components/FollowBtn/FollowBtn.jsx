import { Button } from "react-bootstrap"


const FollowBtn = ({ btnState, handleFollowBtn }) => {

    return (
        <Button className='myBtn followBtn' onClick={handleFollowBtn}>{btnState}</Button>

    )
}

export default FollowBtn


