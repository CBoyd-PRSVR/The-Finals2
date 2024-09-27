import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCardById } from "../utils/apis";

const CardDetails = () => {
  const [card, setCard] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getCardById(id).then((data) => {
      setCard(data);
    });
  }, [id]);

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{card.name}</h1>
      <img src={card.image_uris?.large} alt={card.name} />
      <p>{card.oracle_text}</p>
      <p>Set: {card.set_name}</p>
    </div>
  );
};

export default CardDetails;