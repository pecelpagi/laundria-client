import { fonts } from '../../core';
import { globalCss } from '../../stitches.config';

const globalStyles = globalCss({
    'body': {
        fontFamily: fonts.system,
    }
});

export default globalStyles;