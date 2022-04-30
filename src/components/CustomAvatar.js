import { styled } from '../stitches.config';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const StyledAvatar = styled(AvatarPrimitive.Root, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    width: 45,
    height: 45,
    borderRadius: '100%',
    backgroundColor: '$backgroundSecondary',
});

const StyledImage = styled(AvatarPrimitive.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: '$colorSecondary',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
});

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

export default () => (
    <Avatar>
        <AvatarImage
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
        />
        <AvatarFallback delayMs={600}>CT</AvatarFallback>
    </Avatar>
);