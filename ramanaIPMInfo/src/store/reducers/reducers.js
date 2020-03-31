const initialState = {
    langType: {
        englishLangSelect: false,
        spanishLangSelect: false,
        cropsList: []
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
        default:
            return state;
    }
};

export default reducer;