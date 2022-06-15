import styled from '@emotion/styled';
import { ARROW } from '../../images';

export const CWrap = styled.div({
	marginLeft: '7vw',
	fontFamily: 'sans-serif',
	lineHeight: '1',
	fontVariant: 'small-caps',
	letterSpacing: '5px',
});

export const Hello = styled.p({
	fontSize: '36px',
	letterSpacing: '2px',
	paddingTop: '11vh',
	fontFamily: '"DIN Pro", sans-serif',
});

export const Discr = styled.p({
	display: 'inline-block',
	fontSize: '150px',
	fontFamily: '"Gilroy Light", sans-serif',
	lineHeight: '0.7',
	'& > span': {
		fontFamily: '"Gilroy Extrabold", sans-serif',
	},
});

export const Button = styled.button({
	fontFamily: '"DIN Pro", sans-serif',
	fontSize: '22px',
	border: 'none',
	borderRadius: '50px',
	backgroundColor: '#ff6a9f',
	display: 'inline-flex',
	alignItems: 'center',
	height: '75px',
	width: '240px',
	marginLeft: '50px',
	verticalAlign: 'middle',
});

export const Arrow = styled.div({
	backgroundColor: '#000',
	backgroundImage: `url(${ARROW})`,
	backgroundPosition: 'center center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: '35% 25%',
	marginRight: '25px',
	height: '45px',
	width: '45px',
	borderRadius: '50%',
	position: 'relative',
	left: '10px',
	boxShadow: `-11px 12px 3px -10px rgb(255 106 159), 
				18px -14px 3px -10px rgb(255 106 159),
				-1.7px -1.5px 1px 2.2px rgba(40, 40, 60, 0.30),
				1.5px 1.7px 3px 2px rgba(255, 255, 255, 0.55)`,
});

export const Baq = styled.img({
	height: '14%',
	width: '12%',
	position: 'absolute',
	top: '70px',
	left: '0px',
});

export const Sperm_1 = styled.img({
	height: '70%',
	width: '75%',
	position: 'absolute',
	top: '55px',
	right: '20px',
	transform: 'rotate(-25deg)',
});
