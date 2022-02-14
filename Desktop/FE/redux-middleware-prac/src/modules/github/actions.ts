import { AxiosError } from "axios";
import { deprecated, createAsyncAction } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
const { createAction, createStandardAction } = deprecated;

export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERROR = "github/GET_USER_PROFILE_ERROR";

/* #1. createStandardAction으로 액션함수 생성하기 */
// export const getUserPorfile = createStandardAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = createStandardAction(
//   GET_USER_PROFILE_SUCCESS
// )<GithubProfile>();
// export const getUserPorfileError = createStandardAction(
//   GET_USER_PROFILE_ERROR
// )<AxiosError>();

/* #2. createAsyncAction 사용하기 */
export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>();
