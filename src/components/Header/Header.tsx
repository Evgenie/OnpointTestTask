import React from 'react';
import { BUTTON_HOME, STICK } from '../../images';
import { CWrap, Home, Logo, Stick } from './Header.style';

export const Header = () => {
	return (
		<CWrap>
			<a>
				<Home src={BUTTON_HOME} alt="Button Home" />
			</a>
			<Stick src={STICK} alt="separator" />
			<Logo>project</Logo>
		</CWrap>
	);
};

export default Header;
