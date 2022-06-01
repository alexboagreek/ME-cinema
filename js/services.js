const API_KEY = 'de440de8b2c056052dc479379aa4ecd0';
const BASE_URL = 'https://api.themoviedb.org/3/';

//trending/all/day?api_key='';

const getData = url => {
    fetch(url)
    .then(response => {
        console.lof(response)
    });
};



export const getTrends = () => {
    getData();
}