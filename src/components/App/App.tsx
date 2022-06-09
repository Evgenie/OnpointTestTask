import React from 'react';
import Header from '../Header/Header';
import Slide_1 from '../Slide_1';
import { CWrap } from './App.style';

export const App = () => {
	return (
		<CWrap>
			<Header />
			<Slide_1 />
		</CWrap>
	);
};

export default App;
