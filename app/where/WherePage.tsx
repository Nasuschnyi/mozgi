import Link from 'next/link';
import React from 'react';

const WherePage = () => {
	return (
		<section className="page">
			<Link
				className="navbar__link"
				href="/"
			>
				&#60; back
			</Link>
			<h1 className="page__title">where?</h1>
		</section>
	);
};

export default WherePage;
