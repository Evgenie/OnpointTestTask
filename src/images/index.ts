import globals from './globals';
import popup from './popup';
import slide_1 from './slide_1';
import slide_2 from './slide_2';
import slide_3 from './slide_3';

export type TAllImages = typeof globals &
	typeof popup &
	typeof slide_1 &
	typeof slide_2 &
	typeof slide_3;

export const allImages: TAllImages = {
	...globals,
	...popup,
	...slide_1,
	...slide_2,
	...slide_3,
};

export const {
	BUTTON_HOME,
	LABLE,
	PROJECT,
	STICK,
	BACKGROUND,
	POPUP_BTN_CLOSE,
	POPUP_BTN_NEXT,
	POPUP_BTN_PREV,
	POPUP_EMPTY_CIRCLE,
	POPUP_PINK_CIRCLE,
	BAQ,
	CELL_1,
	CELL_2,
	CELL_3,
	CELL_4,
	CELL_5,
	CELL_6,
	PINK_SPERM_1,
	PINK_SPERM_2,
	ARROW,
	BTN,
	SPERM_1,
	SPERM_2,
	SPERM_3,
	SPERM_4,
	SPERM_5,
	STICK_BIG,
	BLUE_BABBLE_1,
	BLUE_BABBLE_2,
	BLUE_BABBLE_3,
	BLUE_BABBLE_4,
	BLUE_BABBLE_5,
	BOTTLE,
	CALENDAR,
	PINK_BABBLE_1,
	PINK_BABBLE_2,
	PINK_BABBLE_3,
	PLATE,
} = allImages;

export default allImages;
