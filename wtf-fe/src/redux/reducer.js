import { GET_DATA, GET_DATA_ERR, GET_DATA_LOADING } from "./action";

const initState = {
  nearByGym: [],
  isLoading:false,
  isError:false,
  gymByPlace: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_ERR:{
      return{
        ...state,
        isLoading:false,
        isError:true,
      }
    }
    case GET_DATA_LOADING:{
      return{
        ...state,
        isLoading:true,
        isError:false,
      }
    }
    case GET_DATA:{
      return{
        ...state,
        nearByGym:payload,
        isLoading:false,
        isError:false
      }
    }
    default: {
      return state;
    }
  }
};
