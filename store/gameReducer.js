//ACTION TYPES
const START_TIMER = 'START_TIMER';
const TIMER_RAN_OUT = 'TIMER_RAN_OUT';

//ACTION CREATORS
const startTimer = () => ({
  type: START_TIMER,
});

const timerRanOut = () => ({
  type: TIMER_RAN_OUT,
});

export const timerStarted = () => {
  return dispatch => {
    dispatch(startTimer());
  };
};

export const timerUp = () => {
  return dispatch => {
    dispatch(timerRanOut());
  };
};

// INITIAL STATE
let initialState = {
  password: '',
  timerRunning: false,
  gameInProgress: false,
  gameWon: false,
  gameLost: false,
};

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        timerRunning: true,
        gameInProgress: true,
      };
    case TIMER_RAN_OUT:
      return {
        ...state,
        timerRunning: false,
        gameInProgress: false,
        gameLost: true,
      };
    default:
      return state;
  }
}
