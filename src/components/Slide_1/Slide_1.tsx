import React from 'react';
import { BAQ, SPERM_1 } from '../../images';
import {
	Arrow,
	Baq,
	Button,
	CWrap,
	Discr,
	Hello,
	Sperm_1,
} from './Slide_1.style';

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
			<Baq src={BAQ} alt="bacterium" />
			<Sperm_1 src={SPERM_1} alt="spermatozoon" />
		</CWrap>
	);
};

export default Slide_1;
