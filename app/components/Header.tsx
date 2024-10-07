import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

const Header = () => {
	return (
		<header className="header">
			<LanguageSwitcher />
			<Logo />
		</header>
	);
};

export default Header;
