import { createReducer } from "typesafe-actions";
import { getUserProfileAsync } from "./actions";
import {
  asyncState,
  createAsyncReducer,
  transformToArray,
} from "../../lib/reducerUtils";
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERROR,
  GET_USER_PROFILE_SUCCESS,
} from "./actions";
import { GithubState, GithubAction } from "./types";

const initialState: GithubState = {
  //   userProfile: {
  //     loading: false,
  //     error: null,
  //     data: null,
  //   },
  userProfile: asyncState.initial(),
};

/* 
const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: (state, action) => ({
    ...state,
    // userProfile: {
    //   loading: true,
    //   error: null,
    //   data: null,
    // },
    userProfile: asyncState.load(),
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    // userProfile: {
    //   loading: false,
    //   error: null,
    //   data: action.payload,
    // },
    userProfile: asyncState.success(action.payload),
  }),
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    // userProfile: {
    //   loading: false,
    //   error: action.payload,
    //   data: null,
    // },
    userProfile: asyncState.error(action.payload),
  }),
});
*/

const github = createReducer<GithubState, GithubAction>(
  initialState
).handleAction(
  transformToArray(getUserProfileAsync),
  createAsyncReducer(getUserProfileAsync, "userProfile")
);
export default github;
