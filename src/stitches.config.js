import { createStitches } from '@stitches/react';

export const COLOR_DATA = {
    BACKGROUND_PRIMARY: '#24292f',
    BACKGROUND_TERTIARY: '#ececec',
}

export const { theme, styled, css, globalCss } = createStitches({
    theme: {
        colors: {
            backgroundPrimary: COLOR_DATA.BACKGROUND_PRIMARY,
            colorPrimary: '#FFFFFF',
            backgroundSecondary: '#FFFFFF',
            colorSecondary: '#24292f',
            backgroundTertiary: COLOR_DATA.BACKGROUND_TERTIARY,
        },
    },
    media: {
        sm: '(min-width: 640px)',
    }
});