import './Card.css';

function Card({src, alt, title}) {
  return (
    <div className="Card">
      <div className="content">
        <img src={src} alt={alt} />
        <p>{title}</p>
      </div>

    </div>
  );
}

export default Card;
