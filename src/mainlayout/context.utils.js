import React, { useReducer, useMemo } from "react";
import { ACTION_TYPE } from "./enums";

const initialState = {
    isShowingSidebarMenu: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_TOGGLE_SIDEBAR_MENU:
            return { ...state, isShowingSidebarMenu: !state.isShowingSidebarMenu };
        default:
        // do nothing
    }

    return state;
};

const createContextDataHandler = (dispatch = () => { }) => ({
    onToggleSidebar: () => { dispatch({ type: ACTION_TYPE.SET_TOGGLE_SIDEBAR_MENU }); },
});

export const useContextReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextDataHandler = useMemo(() => createContextDataHandler(dispatch), [dispatch]);

    return {
        ...state,
        ...contextDataHandler,
    };
};
