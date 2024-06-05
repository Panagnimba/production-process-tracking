import { createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReducer";
import PropTypes from 'prop-types';

const initialState = {
    isSidebarOpen: false,
    sideActiveLinkIdx:1
}

export const SidebarContext = createContext({});
export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" })
    }
    const selectSidebarItem = (idx) => {
        dispatch({ type: "CLICK_SIDEBAR_ITEM",sideActiveLinkIdx:idx })
    }
    return (
        <SidebarContext.Provider value = {{
            ...state,
            toggleSidebar,
            selectSidebarItem
        }}>
            { children }
        </SidebarContext.Provider>
    )
}

SidebarProvider.propTypes = {
    children: PropTypes.node
}