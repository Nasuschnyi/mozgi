'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
	const links = [
		{ name: 'where?', href: '/where' },
		{ name: 'what?', href: '/what' },
		{ name: 'who?', href: '/who' },
	];

	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar">
			<button
				className={`burger ${isOpen ? 'open' : ''}`}
				onClick={handleToggle}
			>
				<span></span>
				<span></span>
			</button>
			<ul className={`navbar__list ${isOpen ? 'open' : ''}`}>
				{links.map((link) => (
					<li
						key={link.href}
						className="navbar__item"
					>
						<Link
							href={link.href}
							className="navbar__link"
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
