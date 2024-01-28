import React from "react";
import PropTypes from "prop-types";
import { COLOR_DATA } from '../../stitches.config';
import Label from "../Label";
import AsyncSelect from "./AsyncSelect";
import DefaultSelect from "./DefaultSelect";

export const SELECT_TYPE = {
    DEFAULT: "DEFAULT",
    ASYNC: "ASYNC",
}

const customStyles = {
    control: (base) => {
        return {
            ...base,
            height: 38,
            minHeight: 38,
            fontSize: '0.875rem',
            boxShadow: 'none',
            borderRadius: 0,
            borderColor: 'rgb(203 213 225)'
        };
    },
    menu: base => ({
        ...base,
        fontSize: '0.875rem',
    })
};

const SelectComponent = React.forwardRef((props, ref) => {
    const {
        options, label, required, value, onChange, selectType, onFetch, fullWidth
    } = props;

    const selectStyles = {
        styles: customStyles,
        theme: (theme) => ({
            ...theme,
            colors: {
                ...theme.colors,
                primary: COLOR_DATA.BACKGROUND_PRIMARY,
                primary25: COLOR_DATA.BACKGROUND_TERTIARY
            },
        })
    }

    const handleChangeValue = (e) => {
        onChange(e.value);
    }

    return (
        <div>
            <Label {...{ label, required }} />
            <div className="relative">
                {selectType === SELECT_TYPE.DEFAULT && (
                    <DefaultSelect
                        {...selectStyles}
                        {...{ options, value, fullWidth }}
                        onChange={handleChangeValue}
                    />
                )}
                {selectType === SELECT_TYPE.ASYNC && (
                    <AsyncSelect
                        {...selectStyles}
                        {...{ onFetch, value }}
                        onChange={handleChangeValue}
                    />
                )}
            </div>
        </div>
    );
});

SelectComponent.propTypes = {
    selectType: PropTypes.string,
    onFetch: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({})),
    fullWidth: PropTypes.bool,
};

SelectComponent.defaultProps = {
    onFetch: () => { },
    selectType: SELECT_TYPE.DEFAULT,
    options: [],
    fullWidth: false,
};

export default SelectComponent;