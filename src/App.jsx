import Card from './components/card/Card';
import Header from './components/header/Header';
import { CARDS } from './constants/cards';

const App = () => {
	return (
		<div>
			<Header
				tittle1='Reliable, efficient delivery'
				tittle2='Powered by Technology'
				text='Our Artificial Intelligence powered tools use millions of project data 
				points to ensure that your project is successful'
			/>
			<div className='container'>
				{CARDS.map(card => (
					<Card
						key={card.id}
						src={card.src}
						alt={card.alt}
						name={card.name}
						text={card.text}
						color={card.color}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
