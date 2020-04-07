import { BASE_URL, CROPS, CATEGORIES, POSTS, MENU_VIDEOS } from '../../constants/constants';
import reactotron from 'reactotron-react-native';

export const saveLangType = data => {
    return { type: 'LANG_TYPE', payload: data };
}

export const storeCropsList = data => {
    return { type: 'CROPS_LISTS', payload: data };
}
export const storeSelectedstore = data => {
    return { type: 'SELECTED_CROP', payload: data };
}

export const storeCropCategories = data => {
    return { type: 'CROPS_CATEGORIES', payload: data };
}
export const storeCropsVideos = data => {
    return { type: 'CROPS_VIDEOS', payload: data };
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
                //reactotron.log(responseJson);
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
export function getCropCategories(cropId) {
    return dispatch => {
        return fetch(BASE_URL.trim() + CROPS.trim() + '/' + cropId + '/' + CATEGORIES, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                return dispatch(storeCropCategories(responseJson));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getCropsDetails(catPostsID) {
    return fetch(BASE_URL.trim() + POSTS.trim() + '/' + catPostsID + '?type=plain', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            return responseJson;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function getCropsVideosList() {
    return dispatch => {
        return fetch(MENU_VIDEOS, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                return dispatch(storeCropsVideos(responseJson));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}