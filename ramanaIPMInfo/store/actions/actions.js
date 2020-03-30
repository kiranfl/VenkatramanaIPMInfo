import { BASE_URL, CROPS } from '../../constants/constants';
export const saveLangType = data => {
    return { type: 'LANG_TYPE', payload: data };
}

export const storeCropsList = data => {
    let formatdata = [];
    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        obj.selected = false;
        formatdata.push(obj);
    }
    return { type: 'CROPS_LISTS', payload: formatdata };
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
                return dispatch(storeCropsList(responseJson));

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

