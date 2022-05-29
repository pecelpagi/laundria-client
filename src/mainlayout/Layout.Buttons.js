
import StyledButton from '../components/StyledButton';
import { styled } from '../stitches.config';
import { isHasProperty } from '../utils';

const Wrapper = styled('div', {
    flexDirection: 'column',
    '@media (min-width: 345px)': {
        flexDirection: 'row',
    }
})

export default ({ buttons }) => {
    const components = buttons.map(x => (
        <StyledButton
            key={x.id}
            className={isHasProperty(x, "className") ? x.className : ""}
            type="button"
            variant={isHasProperty(x, "variant") ? x.variant : "primary"}
            onClick={x.clickEvent}
            outlined={isHasProperty(x, "outlined") ? x.outlined : false}
        >
            <span
                className={`flex justify-center px-2 text-xs`}
            >
                {x.icon()}&nbsp;{x.title}
            </span>
        </StyledButton>
    ));
    
    return <Wrapper className="flex w-full justify-end gap-3">{components}</Wrapper>;
}