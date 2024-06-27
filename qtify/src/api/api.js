import axios from "axios"

export const URL = "https://qtify-backend-labs.crio.do/"


// fetching the TOP album data 
export const fetchTopAlbum = async () =>{
    try {
        const response = await axios.get(`${URL}albums/top`)
        return response.data
    } catch (e) {
        console.log("API Error",e)
    }
}

//fetching the NEW album data 
export const fetchNewAlbum = async () =>{
    try {
        const response = await axios.get(`${URL}albums/new`)
        return response.data
    } catch (e) {
        console.log("API Error",e);
    }
}

//fetching the songs data
export const fetchSongs = async () =>{
    try {
        const response = await axios.get(`${URL}songs`)
        return response.data
    } catch (e) {
        console.log("API Error", e);
    }
}

//fetching slug responses
export const fetchSlug = async () =>{
    try {
        const response = await axios.get(`${URL}:slug`)
        return response.data
    } catch (e) {
        console.log("API Error",e);
    }
}

//fetching the genres
export const fetchGenre = async () =>{
    try {
        const response = await axios.get(`${URL}genres`)
        return response.data        
    } catch (e) {
        console.log("API Error",e);
    }
}