import axios from "axios";
import { popular_gamesURL } from "../api";


export const loadGames = () => async (dispatch) => {

    const popularData = await axios.get(popular_gamesURL());
    dispatch({
        type:"FETCH_GAMES",
        payload: {
            popular: popularData.data.results,   
        },
    });

};