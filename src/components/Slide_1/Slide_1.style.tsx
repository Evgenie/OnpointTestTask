import styled from '@emotion/styled';

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
	fontSize: '155px',
	fontFamily: '"Gilroy Light", sans-serif',
	lineHeight: '0.7',
	'& > span': {
		fontFamily: '"Gilroy Extrabold", sans-serif',
	},
});

export const Button = styled.button({
	border: 'none',
	borderRadius: '50px',
	backgroundColor: '#ff6a9f',
	display: 'inline-block',
	height: '75px',
	width: '240px',
	marginLeft: '50px',
});

export const Arrow = styled.div({
	backgroundColor: '#000',
	height: '70%',
	width: '23%',
	borderRadius: '50%',
	position: 'relative',
	left: '10px',
	// outlineStyle: 'groove ',
	// outlineWidth: '4px',
	// outlineColor: 'rgba(255,255,255,0.2)',
	boxShadow:
		'inset -5px 1px 1px rgba(154, 147, 140, 0.8), 2px 5px 1px rgba(255, 255, 255, 0.3)',
});
