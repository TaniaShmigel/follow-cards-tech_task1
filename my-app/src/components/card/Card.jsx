
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Container, Button, Tweet, Followers } from "./Card.styled";
import Image from "../image/Image";
// import ButtonLoad from '../button/Btn';
// import Description from "../description/Description";
// import Btn from "../button/Btn";


const Card = ( users) => {

  const { id, tweets, followers, avatar, user } = users;

  const [isFollowing, setIsFollowing] = useState(JSON.parse(localStorage.getItem(`${id}-isFollowing`)) ?? false)
  const [numberFollowers, setNumberFollowers] = useState(JSON.parse(localStorage.getItem(`${id}-followers`)) ?? followers)

  useEffect(() => {
    localStorage.setItem(`${id}-isFollowing`, JSON.stringify(isFollowing));
    localStorage.setItem(`${id}-followers`, JSON.stringify(numberFollowers));

  }, [isFollowing, numberFollowers, id]);

  const onFollowClick = () => {
    setIsFollowing(true);
    setNumberFollowers(numberFollowers + 1)
  }

    const onFollowingClick = () => {
      setIsFollowing(false);
      setNumberFollowers(numberFollowers - 1)
  }

  return (
   
   <Container>
  <Image image={avatar} alt={user} />

  
            <Tweet>{tweets}</Tweet>
            <Followers>
{numberFollowers.toLocaleString('en-US')}
            </Followers>
  {isFollowing ?
        <Button type='button'
          onClick={onFollowingClick}
         >Following</Button>
      : <Button type='button'
          onClick={onFollowClick}
          >Follow</Button>
      }


  </Container>);
};

Card.propTypes= {
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
}

export default Card;
