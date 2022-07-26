import React from "react";
import Card from "./Card";

const CardList = ({ robots, searchValue }) => {
  console.log(
    robots.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  );
  return (
    <>
      {robots.length > 0 ? (
        robots
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Card
              name={item.name}
              email={item.email}
              id={item.id}
              key={item.id}
            />
          ))
      ) : (
        <h2>loading.......</h2>
      )}
    </>
  );
};

export default CardList;
