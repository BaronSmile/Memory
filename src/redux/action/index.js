import {SET_SCORE, SET_SHOW_ENDGAME} from "./typesAction";

export const showEndGame = (bool) =>({type: SET_SHOW_ENDGAME, payload: bool,})

export const scoreUp = () => ({
  type: SET_SCORE
})