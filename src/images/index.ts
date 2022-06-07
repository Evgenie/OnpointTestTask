import globals from "./globals";
import popup from "./popup";
import slide_1 from "./slide_1";
import slide_2 from "./slide_2";
import slide_3 from "./slide_3";

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
	SLIDE_1_BAQ,
	SLIDE_1_CELL_1,
	SLIDE_1_CELL_2,
	SLIDE_1_CELL_3,
	SLIDE_1_CELL_4,
	SLIDE_1_CELL_5,
	SLIDE_1_CELL_6,
	SLIDE_1_PINK_SPERM_1,
	SLIDE_1_PINK_SPERM_2,
	SLIDE_2_BTN,
	SLIDE_2_SPERM_1,
	SLIDE_2_SPERM_2,
	SLIDE_2_SPERM_3,
	SLIDE_2_SPERM_4,
	SLIDE_2_SPERM_5,
	SLIDE_2_STICK,
	SLIDE_3_BLUE_BABBLE_1,
	SLIDE_3_BLUE_BABBLE_2,
	SLIDE_3_BLUE_BABBLE_3,
	SLIDE_3_BLUE_BABBLE_4,
	SLIDE_3_BLUE_BABBLE_5,
	SLIDE_3_BOTTLE,
	SLIDE_3_CALENDAR,
	SLIDE_3_PINK_BABBLE_1,
	SLIDE_3_PINK_BABBLE_2,
	SLIDE_3_PINK_BABBLE_3,
	SLIDE_3_PLATE,
} = allImages;

export default allImages;
