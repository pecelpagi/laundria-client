import { createStitches } from '@stitches/react';

export const { theme, styled, css, globalCss } = createStitches({
    theme: {
        colors: {
            backgroundPrimary: '#24292f',
            colorPrimary: '#FFFFFF',
            backgroundSecondary: '#FFFFFF',
            colorSecondary: '#24292f',
            backgroundTertiary: '#ececec',
        },
    },
    media: {
        sm: '(min-width: 640px)',
    }
});