import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((item) => (
        <Card name={item.name} email={item.email} id={item.id} key={item.id} />
      ))}
    </>
  );
};

export default CardList;
