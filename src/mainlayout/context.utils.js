import { useReducer, useMemo, useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import { ACTION_TYPE } from "./enums";
import * as fetcherUtility from "./fetcher.utils";

import 'moment/locale/id';
import { matchMediaChecker, MATCH_MEDIA_TYPE } from "../utils";

const initialState = {
    isShowingSidebarMenu: matchMediaChecker(MATCH_MEDIA_TYPE.LG),
    loggedInProfile: null,
    companyProfile: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_LOGGED_IN_PROFILE:
            return { ...state, loggedInProfile: action.payload };
        case ACTION_TYPE.SET_COMPANY_PROFILE:
            return { ...state, companyProfile: action.payload };
        case ACTION_TYPE.SET_LOGGED_IN_FULLNAME:
            return {
                ...state,
                loggedInProfile: {
                    ...state.loggedInProfile,
                    fullname: action.payload,
                },
            };
        case ACTION_TYPE.SET_TOGGLE_SIDEBAR_MENU:
            return { ...state, isShowingSidebarMenu: !state.isShowingSidebarMenu };
        case ACTION_TYPE.SET_HIDE_SIDEBAR_MENU:
            return { ...state, isShowingSidebarMenu: false };
        default:
        // do nothing
    }

    return state;
};

const createContextDataHandler = (dispatch = () => { }) => ({
    onToggleSidebar: () => { dispatch({ type: ACTION_TYPE.SET_TOGGLE_SIDEBAR_MENU }); },
    onHideSidebar: () => { dispatch({ type: ACTION_TYPE.SET_HIDE_SIDEBAR_MENU }); },
    onFetchLoggedInProfile: () => { fetcherUtility.handleFetchMyProfile(dispatch); },
    onChangeLoggedInFullname: (fullname) => { dispatch({ type: ACTION_TYPE.SET_LOGGED_IN_FULLNAME, payload: fullname }); },
    onFetchCompanyProfile: () => { fetcherUtility.handleFetchCompanyProfile(dispatch); },
});

const handleDidMount = (dispatch) => {
    fetcherUtility.handleFetchMyProfile(dispatch);
    fetcherUtility.handleFetchCompanyProfile(dispatch);

    numeral.register("locale", "id", {
        delimiters: {
            thousands: ".",
            decimal: ",",
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t",
        },
        currency: {
            symbol: "Rp ",
        },
    });
    numeral.locale("id");
    moment.locale("id");
};

export const useContextReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextDataHandler = useMemo(() => createContextDataHandler(dispatch), [dispatch]);

    useEffect(() => {
        handleDidMount(dispatch);
    }, []);

    return {
        ...state,
        ...contextDataHandler,
    };
};
