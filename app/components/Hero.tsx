import Image from 'next/image';
import BgText from './BgText';
import Decor from './Decor';
import Title from './Title';
import bgImg from '../images/bg.png';

const Hero = () => {
	return (
		<main className="hero">
			<Title />
			<Decor />
			<BgText />
			<figure className="hero__img">
				<Image
					src={bgImg}
					width={730}
					height={730}
					alt="bg"
				/>
			</figure>
		</main>
	);
};

export default Hero;
