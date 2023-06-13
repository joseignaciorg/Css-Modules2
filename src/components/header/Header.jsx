import style from './header.module.css';

const Header = ({ tittle1, tittle2, text }) => {
	return (
		<div className={style.header}>
			<p className={style['header-tittle1']}>{tittle1}</p>
			<h1 className={style['header-tittle2']}>{tittle2}</h1>
			<p className={style['header-text']}>{text}</p>
		</div>
	);
};
export default Header;
