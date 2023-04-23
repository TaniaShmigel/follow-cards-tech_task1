import { useState } from "react";

import { List } from "./CardList.styled";
import Card from "../card/Card";
import PropTypes from "prop-types";
import ButtonLoadMore from "../button/Btn";

const CardList = ({ users }) => {
  const cardFollows = 3;

  const [next, setNext] = useState(cardFollows);
  const handleMoreCard = () => {
    setNext(next + cardFollows);
  };

  return (
    <>
      <List>
        {users
          ?.slice(0, next)
          ?.map(({ id, tweets, followers, avatar, user }) => (
            <Card
              key={id}
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              user={user}
            />
          ))}
      </List>

      {next < users?.length && (
        <ButtonLoadMore onClick={handleMoreCard}>Load more</ButtonLoadMore>
      )}
    </>
  );
};
CardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
};

export default CardList;
