import {
  FETCH_USER_LOGIN,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  USER_LOGOUT,
  USER_REFRESH,
} from "../action/userAction";

const INITIALSTATE = {
  account: {
    email: "",
    auth: null,
    token: "",
  },
  isLoading: false,
  isError: false,
  // accounts: localStorage.get('') ? localStorage.get('') : []
};

const userReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      console.log("FETCH_USER_CheckAction: ", action);
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USER_ERROR:
      console.log("FETCH_USER_CheckAction: ", action);
      return {
        ...state,
        account: {
          auth: false,
        },
        isLoading: false,
        isError: true,
      };
    case FETCH_USER_SUCCESS:
      console.log("FETCH_USER_CheckAction: ", action);
      return {
        ...state,
        account: {
          email: action.data.email,
          token: action.data.token,
          auth: true,
        },
        isLoading: false,
        isError: false,
      };
    case USER_LOGOUT:
      console.log("FETCH_USER_CheckAction: ", action);
      return {
        ...state,
        account: {
          email: "",
          token: "",
          auth: false,
        },
      };
    case USER_REFRESH:
      console.log("FETCH_USER_CheckAction: ", action);
      return {
        ...state,
        account: {
          email: localStorage.getItem("email"),
          token: localStorage.getItem("token"),
          auth: true,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
