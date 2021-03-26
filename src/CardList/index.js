import './CardList.css';
import { v4 as uuid } from "uuid";
import Card from './../Card';

function CardList({ imgs }) {
  const renderCards = imgs.map(({ src, title, alt }) => (
    <Card key={uuid()} src={src} title={title} alt={alt}/>
  ))

  return (
    <ul className="CardList">
    {renderCards}
    </ul>
  );
}

export default CardList;
