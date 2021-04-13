import {SET_SCORE, SET_SHOW_ENDGAME} from "../action/typesAction";

const initialGameState = {
  showEndGame: false,
  score: 0
}

export const isGameResult = (state = initialGameState, {type, payload}) => {
  switch (type) {
    case SET_SHOW_ENDGAME:
      return {...state, showEndGame: payload};
    case SET_SCORE:
      return {...state, score: state.score + 1, showEndGame: true }
    default:
      return state;
  }
};

export default isGameResult;