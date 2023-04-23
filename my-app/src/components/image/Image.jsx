import { Container, Img } from "./Image.styled"
// import PropTypes from 'prop-types';

const Image = ({avatar, user})=> {
    return(
    <Container>
        <Img  src={avatar}  alt={user}
         />
         
    </Container>)
}
// Image.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     user: PropTypes.string.isRequired,
    
// }

export default Image