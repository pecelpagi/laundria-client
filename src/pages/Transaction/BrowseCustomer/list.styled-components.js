import { styled } from "../../../stitches.config";

export const Wrapper = styled('div', {
    padding: 25,
    paddingTop: 15,
    paddingRight: 18,
    maxHeight: '500px',

    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#c3c3c3'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#555',
    }
})

export const RowWrapper = styled('div', {
    border: '1px solid rgb(203 213 225)',
    padding: '10px',
    '&:hover': {
        cursor: 'pointer'
    },
    variants: {
        isActive: {
            true: {
                borderColor: '$backgroundPrimary',
            }
        }
    },
});