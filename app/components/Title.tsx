import React, { useState, useEffect } from 'react';

const Title = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) =>
			setMousePosition({ x: event.clientX, y: event.clientY });

		document.addEventListener('mousemove', handleMouseMove, {
			passive: true,
		});

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const parallaxStyle = {
		transform: `translate(${mousePosition.x / 50}px, ${
			mousePosition.y / 50
		}px)`,
	};

	return (
		<h1
			className="title"
			style={parallaxStyle}
		>
			FULL-CYCLE EVENT AGENCY
		</h1>
	);
};

export default Title;
