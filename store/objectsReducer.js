//ACTION TYPES
const GET_OBJECTS = 'GET_OBJECTS';
const ADD_SINGLE_OBJECT = 'ADD_SINGLE_OBJECT';
const GET_SINGLE_OBJECT = 'GET_SINGLE_OBJECT';

//ACTION CREATORS
const getObjects = objects => ({
  type: GET_OBJECTS,
  objects,
});

const addSingleObject = object => ({
  type: ADD_SINGLE_OBJECT,
  object,
});

const getSingleObject = object => ({
  type: GET_SINGLE_OBJECT,
  object,
});

//INITIAL STATE
let initialState = {
  objects: [],
  object: {},
};

//REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OBJECTS:
      return {
        ...state,
        objects: action.objects,
      };
    case ADD_SINGLE_OBJECT:
      return {
        ...state,
        objects: [...state.objects, action.object],
      };
    case GET_SINGLE_OBJECT:
      return {
        ...state,
        object: action.object,
      };
    default:
      return state;
  }
}
