import Image from 'next/image';
import imgDecor from '../images/decor.png';

const Decor = () => {
	return (
		<figure className="decor">
			<Image
				src={imgDecor}
				width={118}
				height={118}
				alt="decor"
			/>
		</figure>
	);
};

export default Decor;
