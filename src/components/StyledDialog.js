import { styled } from '../stitches.config';
import { blackA } from '@radix-ui/colors';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const StyledOverlay = styled(DialogPrimitive.Overlay, {
    backgroundColor: blackA.blackA9,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'grid',
    placeItems: 'center',
    overflowY: 'auto',
});

const StyledContent = styled(DialogPrimitive.Content, {
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    width: '90vw',
    maxWidth: '450px',
    padding: 25,
    '&:focus': { outline: 'none' },
    position: 'relative'
});

function Content({ children, ...props }) {
    return (
        <DialogPrimitive.Portal>
            <StyledOverlay>
                <StyledContent {...props}>{children}</StyledContent>
            </StyledOverlay>
        </DialogPrimitive.Portal>
    );
}

const StyledTitle = styled(DialogPrimitive.Title, {
    margin: 0,
    color: '$colorSecondary',
    fontSize: 17,
    borderBottom: '1px solid #e7e7e7',
    paddingBottom: '14px',
    fontWeight: '600',
});

const StyledDescription = styled(DialogPrimitive.Description, {
    margin: '10px 0 20px',
    color: '$colorSecondary',
    fontSize: 15,
    lineHeight: 1.5,
});


const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '5px',
    border: 0,
    height: 28,
    width: 28,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1c1f2b',
    backgroundColor: '#e8e8e9',
    position: 'absolute',
    top: 18,
    right: 25,
    outline: 'none',

    '&:hover': { cursor: 'pointer' },
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;
export const CloseButton = (props) => (
    <IconButton {...props}>
        <Cross2Icon />
    </IconButton>
)