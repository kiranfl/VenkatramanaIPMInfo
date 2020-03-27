const initialState = {
    langType: {
        englishLangSelect: false,
        spanishLangSelect: false,
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LANG_TYPE':
            return {
                ...state,
                langType: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;