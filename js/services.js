const API_KEY = 'de440de8b2c056052dc479379aa4ecd0';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

//all/day?api_key='';

const getData = url => {
    return fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw `Что-то пошло не так, ошибка ${response.status}`
    })
    .catch(err => console.error());
};



export const getTrends = async (type = 'all', period = 'week', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`
    return await getData(url);  
}

export const getTop = async () => {

};
export const getPopular = async () => {

};