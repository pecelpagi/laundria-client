import StyledButton from '../components/StyledButton';
import { isHasProperty } from '../utils';

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
    
    return <div className="flex w-full justify-end gap-3">{components}</div>;
}