import { BASE_URL, CROPS } from '../../constants/constants';
export const saveLangType = data => {
    return { type: 'LANG_TYPE', payload: data };
}

export const storeCropsList = data => {
    return { type: 'CROPS_LISTS', payload: data };
}

export function getCrops() {
    return dispatch => {
        return fetch(BASE_URL.trim() + CROPS.trim(), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                let formatdata = [];
                for (let i = 0; i < responseJson.length; i++) {
                    let obj = responseJson[i];
                    obj.selected = false;
                    formatdata.push(obj);
                }
                return dispatch(storeCropsList(formatdata));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

