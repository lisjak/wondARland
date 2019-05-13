//ACTION TYPES
const GAME_STARTED = "GAME_STARTED";
const GAME_PAUSED = "GAME_PAUSED";
const GAME_RESUMED = "GAME_RESUMED";
const GAME_ENDED = "GAME_ENDED";
const POINT_FOUND = "POINT_FOUND";
const ROSE_FOUND = "ROSE_FOUND";

//ACTION CREATORS
const gameStarted = () => ({
  type: GAME_STARTED
});
const gamePaused = () => ({
  type: GAME_PAUSED
});
const gameResumed = () => ({
  type: GAME_RESUMED
});
const gameEnded = () => ({
  type: GAME_ENDED
});
const pointFound = () => ({
  type: POINT_FOUND
});
const roseFound = () => ({
  type: ROSE_FOUND
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

export const gameEndedThunk = () => {
  return dispatch => {
    dispatch(gameEnded());
  };
};

export const pointFoundThunk = () => {
  return dispatch => {
    dispatch(pointFound());
  };
};

export const roseFoundThunk = () => {
  return dispatch => {
    dispatch(roseFound());
  };
};

// INITIAL STATE
let initialState = {
  timeRemaining: 0,
  timeStarted: 0,
  timeElapsed: 0,
  password: "",
  gameInProgress: false,
  pointsFound: 0,
  rosesFound: 0
};

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GAME_STARTED:
      return {
        ...state,
        timeRemaining: 1500000,
        timeStarted: Date.now(),
        gameInProgress: true
      };
    case GAME_PAUSED:
      return {
        ...state,
        timeElapsed: Date.now() - state.timeStarted
      };
    case GAME_RESUMED:
      return {
        ...state,
        timeStarted: Date.now(),
        timeRemaining: state.timeRemaining - state.timeElapsed
      };
    case GAME_ENDED:
      return {
        timeRemaining: 0,
        timeStarted: 0,
        timeElapsed: 0,
        password: "",
        gameInProgress: false,
        pointsFound: 0,
        rosesFound: 0
      };
    case POINT_FOUND:
      return {
        ...state,
        pointsFound: state.pointsFound + 1
      };
    case ROSE_FOUND:
      return {
        ...state,
        rosesFound: state.rosesFound + 1
      };
    default:
      return state;
  }
}
