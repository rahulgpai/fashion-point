import userActionTypes from "../../actiontypes/user/userActionTypes";

export const setCurrentUser = userData => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: userData
});
