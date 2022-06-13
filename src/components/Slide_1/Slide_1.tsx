import React from 'react';
import { Arrow, Button, CWrap, Discr, Hello } from './Slide_1.style';

export const Slide_1 = () => {
	return (
		<CWrap>
			<Hello>привет, </Hello>
			<Discr>
				это <span>не</span> коммерческое задание
				<Button>
					<Arrow />
					Что дальше?
				</Button>
			</Discr>
		</CWrap>
	);
};

export default Slide_1;
