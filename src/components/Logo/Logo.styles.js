import { styled } from '../../stitches.config';
import { fonts } from '../../core';

export const LogoWrapper = styled('div', {
    background: "$backgroundPrimary",
    color: "$colorPrimary",
    display: "inline-block",
    position: "relative",
    padding: "5px",
    fontFamily: fonts.brand,
    '& span': {
        fontSize: "0.75rem",
        textTransform: "uppercase",
    },
    '& h4': {
        fontSize: "1.25rem",
        marginTop: "0px",
        fontWeight: "600",
    }
});