import React from 'react';
import { CWrap, Discr, Hello } from './Slide_1.style';

export const Slide_1 = () => {
	return (
		<CWrap>
			<Hello>привет, </Hello>
			<Discr>
				это <span>не</span> коммерческое задание
			</Discr>
		</CWrap>
	);
};

export default Slide_1;
