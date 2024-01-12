
import { Fragment } from 'react';
import StyledButton from '../components/StyledButton';
import { styled } from '../stitches.config';
import { isHasProperty } from '../utils';

const Wrapper = styled('div', {
    flexDirection: 'column',
    '@media (min-width: 345px)': {
        flexDirection: 'row',
    }
})

const LayoutButtons = ({ buttons }) => {
    const components = buttons.map(x => (
        <StyledButton
            key={x.title}
            className={isHasProperty(x, "className") ? x.className : ""}
            variant={isHasProperty(x, "variant") ? x.variant : "primary"}
            onClick={x.clickEvent}
            outlined={isHasProperty(x, "outlined") ? x.outlined : false}
            {...isHasProperty(x, 'form') ? { form: x.form } : {}}
            {...isHasProperty(x, 'type') ? { type: x.type } : { type: 'button' }}
        >
            <span
                className={`flex justify-center px-2 text-xs`}
            >
                {x.icon ? <Fragment>{x.icon()}&nbsp;{x.title}</Fragment> : x.title}
            </span>
        </StyledButton>
    ));

    return <Wrapper className="flex w-full justify-end gap-3">{components}</Wrapper>;
}

export default LayoutButtons;