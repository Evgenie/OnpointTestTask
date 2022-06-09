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
