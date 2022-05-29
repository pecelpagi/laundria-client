import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { COLOR_DATA } from '../../stitches.config';
import Label from "../InputText/Label";
import AsyncSelect from "./AsyncSelect";
import DefaultSelect from "./DefaultSelect";

export const SELECT_TYPE = {
    DEFAULT: "DEFAULT",
    ASYNC: "ASYNC",
}

const customStyles = {
    control: base => ({
        ...base,
        height: 36,
        minHeight: 36
    }),
};

const SelectComponent = React.forwardRef((props, ref) => {
    const {
        options, label, required, value, onChange, selectType, onFetch, changeEvent, fullWidth
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
        changeEvent(e.value);
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
    changeEvent: PropTypes.func,
    fullWidth: PropTypes.bool,
};

SelectComponent.defaultProps = {
    onFetch: () => { },
    selectType: SELECT_TYPE.DEFAULT,
    options: [],
    changeEvent: () => { },
    fullWidth: false,
};

export default (props) => {
    const { name, control, value, required } = props;

    return (
        <Controller
            {...{ name, control }}
            defaultValue={value}
            rules={{ required }}
            render={({ field }) => <SelectComponent {...props} {...field} />}
        />
    )
};