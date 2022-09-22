import axios from "axios";

export const GET_DATA = "GET_DATA";
export const GET_DATA_LOADING = "GET_DATA_LOADING";
export const GET_DATA_ERR = "GET_DATA_ERR";
export const GET_GYM_DETAILS = "GET_GYM_DETAILS";
export const GET_GYM_PLAN = "GET_GYM_PLAN";
export const GET_DATA_LOADING_PLAN = "GET_DATA_LOADING_PLAN";

export const baseUrl = "https://devapi.wtfup.me";

export const getData = (dispatch, Data, city) => {
  dispatch({
    type: GET_DATA_LOADING,
  });

  axios
    .get(`${baseUrl}/gym/nearestgym?lat=${Data.lat}&long=${Data.long}`)
    .then(({ data }) => {
      console.log(data);
      if (data.status) {
        dispatch({
          type: GET_DATA,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_DATA_ERR,
        });
      }
    })
    .catch((err) => {
      //   console.log(err);
      dispatch({
        type: GET_DATA_ERR,
      });
    });
};

export const getBycity = (dispatch, city) => {
  dispatch({
    type: GET_DATA_LOADING,
  });

  axios
    .get(`${baseUrl}/gym/places`)
    .then(({ data }) => {
      if (data.status) {
        dispatch({
          type: GET_DATA,
          payload: data.data,
        });
      } else {
        dispatch({
          type: GET_DATA_ERR,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_DATA_ERR,
      });
    });
};

export const getGymDetails = (dispatch, gym_id) => {
  dispatch({
    type: GET_DATA_LOADING,
  });
  dispatch({
    type: GET_GYM_DETAILS,
    payload: gym_id,
  });
};

export const gymPlan = (dispatch, gym_id) => {
  dispatch({
    type: GET_DATA_LOADING_PLAN,
  });
  axios
    .post(`${baseUrl}/gym/plan`, { gym_id })
    .then(({ data }) => {
      //   console.log(data);
      dispatch({
        type: GET_GYM_PLAN,
        payload: data.data,
      });
    })
    .catch((err) => {
      //   console.log(err);
      dispatch({
        type: GET_DATA_ERR,
      });
    });
};
