const sidebarReducer = (state, action) => {
    if(action.type === "TOGGLE_SIDEBAR"){
        return { ...state, isSidebarOpen: !state.isSidebarOpen}
    }
    else if(action.type === "CLICK_SIDEBAR_ITEM"){
        return { ...state, sideActiveLinkIdx:action.sideActiveLinkIdx}
    }
    throw new Error(`No matching "${action.type} action type`);
}

export default sidebarReducer;