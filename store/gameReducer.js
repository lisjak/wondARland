//ACTION TYPES
const START_TIMER = 'START_TIMER';
const TIMER_RAN_OUT = 'TIMER_RAN_OUT';
const GAME_STARTED = 'GAME_STARTED';
const GAME_PAUSED = 'GAME_PAUSED';
const GAME_RESUMED = 'GAME_RESUMED';

//ACTION CREATORS
const gameStarted = () => ({
  type: GAME_STARTED,
});
const gamePaused = () => ({
  type: GAME_PAUSED,
});
const gameResumed = () => ({
  type: GAME_RESUMED,
});

const startTimer = () => ({
  type: START_TIMER,
});

const timerRanOut = () => ({
  type: TIMER_RAN_OUT,
});

// THUNKS
export const gameStartedThunk = () => {
  return dispatch => {
    dispatch(gameStarted());
  };
};

export const gamePausedThunk = () => {
  return dispatch => {
    dispatch(gamePaused());
  };
};

export const gameResumedThunk = () => {
  return dispatch => {
    dispatch(gameResumed());
  };
};

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
  timeStarted: 0,
  timeElapsed: 0,
  password: '',
  timerRunning: false,
  gameInProgress: false,
  gameWon: false,
  gameLost: false,
  millisecondsRemaining: 15000,
};

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GAME_STARTED:
      return {
        ...state,
        timeStarted: Date.now(),
        gameInProgress: true,
        timeRunning: true,
      };
    case GAME_PAUSED:
      return {
        ...state,
        timeElapsed: Date.now() - state.timeStarted,
      };
    case GAME_RESUMED:
      return {
        ...state,
        timeStarted: Date.now(),
        millisecondsRemaining: state.millisecondsRemaining - state.timeElapsed,
      };
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
