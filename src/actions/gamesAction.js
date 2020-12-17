import axios from "axios";
import { popular_gamesURL, upComingGamesURL, newGamesURL } from "../api";


export const loadGames = () => async (dispatch) => {

    const popularData = await axios.get(popular_gamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upComingData = await axios.get(upComingGamesURL());

    dispatch({
        type:"FETCH_GAMES",
        payload: {
            popular: popularData.data.results, 
            upComing: upComingData.data.results,
            newGames: newGamesData.data.results,  
        },
    });

};