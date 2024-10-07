import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LanguageSwitcher = () => {
	const languages = [
		{ code: 'uk', name: 'UA' },
		{ code: 'ru', name: 'RU' },
	];

	const [isActive, setIsActive] = useState(false);

	const handleMouseOver = () => {
		setIsActive(true);
	};

	const handleMouseOut = () => {
		setIsActive(false);
	};

	return (
		<article
			className="switcher"
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<button className="switcher__btn">
				<Image
					src="/images/icon.png"
					width={15}
					height={21}
					alt="icon"
				/>
			</button>
			<ul className={`switcher__list ${isActive ? 'active' : ''}`}>
				{languages.map((language) => (
					<li key={language.code}>
						<Link
							href="/"
							className="switcher__link"
							locale={language.code}
						>
							{language.name}
						</Link>
					</li>
				))}
			</ul>
		</article>
	);
};

export default LanguageSwitcher;
