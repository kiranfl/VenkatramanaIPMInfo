const initialState = {
    langType: {
        englishLangSelect: false,
        spanishLangSelect: false,
        cropsList: [],
        selectedcropsList: {},
        cropCategories: []
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LANG_TYPE':
            return {
                ...state,
                langType: action.payload,
            };
        case 'CROPS_LISTS':
            return {
                ...state,
                cropsList: action.payload,
            };
        case 'SELECTED_CROP':
            return {
                ...state,
                selectedcropsList: action.payload,
            };
        case 'CROPS_CATEGORIES':
            return {
                ...state,
                cropCategories: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;