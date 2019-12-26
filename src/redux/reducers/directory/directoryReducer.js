import DIRECTORY_DATA from "../../../data/directory";

const INITIAL_STATE = DIRECTORY_DATA;

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
