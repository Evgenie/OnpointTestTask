import React from 'react';
import { LABLE } from '../../images';
import Header from '../Header/Header';
import Slide_1 from '../Slide_1';
import { CWrap, Logo } from './App.style';

export const App = () => {
	return (
		<CWrap>
			<Header />
			<Slide_1 />
			<Logo src={LABLE} alt="logo onpiont" />
		</CWrap>
	);
};

export default App;
