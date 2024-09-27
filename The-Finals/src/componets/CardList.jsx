import { useEffect, useState } from "react";
import { getMagicCards } from "../utils/apis";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMagicCards().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <div>
      <h2>Magic Cards</h2>
      {cards.map((card) => (
        <Card key={card.id} sx={{ maxWidth: 345 }} onClick={() => navigate(`/details/${card.id}`)}>
          <CardActionArea>
            <img src={card.image_uris?.small} alt={card.name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default CardList;