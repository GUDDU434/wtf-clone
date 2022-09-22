import {
  GET_DATA,
  GET_DATA_ERR,
  GET_DATA_LOADING,
  GET_DATA_LOADING_PLAN,
  GET_GYM_DETAILS,
  GET_GYM_PLAN,
} from "./action";

const initState = {
  nearByGym: [],
  isLoading: false,
  isError: false,
  gymDetails: {},
  terms: [],
  gymPlanData: {},
  loadingPlan: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_ERR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_DATA: {
      return {
        ...state,
        nearByGym: payload.data,
        terms: payload.terms,
        isLoading: false,
        isError: false,
      };
    }
    case GET_GYM_DETAILS: {
      return {
        ...state,
        gymDetails: state.nearByGym.filter(
          (elem) => elem.user_id == payload
        )[0],
        isLoading: false,
        isError: false,
      };
    }
    case GET_DATA_LOADING_PLAN: {
      return {
        ...state,
        loadingPlan: true,
      };
    }
    case GET_GYM_PLAN: {
      return {
        ...state,
        gymPlanData: payload,
        loadingPlan: false,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
