import style from './card.module.css';

const Card = ({ src, alt, name, text, color }) => {
	return (
		<div className={`${style.card} ${style[color]}`}>
			<h3 className={style['card-name']}>{name}</h3>
			<p className={style['card-text']}>{text}</p>
			<img className={style['card-img']} src={src} alt={alt} />
		</div>
	);
};

export default Card;
