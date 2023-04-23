
import { ButtonLoadMore } from './Btn.styled';
import PropTypes from 'prop-types';

const ButtonLoad = ({ onClick }) => {
  return <ButtonLoadMore onClick={onClick}>Load more</ButtonLoadMore>;
};

ButtonLoad.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLoad;