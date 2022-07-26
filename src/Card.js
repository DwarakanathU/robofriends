import "./Card.css";

const Card = ({ id, name, email }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}`} alt="robots" />
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
