const initialState = {
 rating: [],
 loadingItem: false,
};

export const Rating = (state = initialState, action) => {
 switch (action.type) {
  case "rating/load/start":
   return {
    ...state,
    loadingItem: true,
   };

  case "rating/load/success":
   return {
    ...state,
    rating: action.payload,
    loadingItem: false,
   };

  case "rating/send/start" :
   return {
    ...state,
    loadingItem: true
   }

  case "rating/send/success" :
   return {
    ...state,
    rating:[...state.rating ,action.payload],
    loadingItem: false
   }

  default:
   return state;
 }
};

export default Rating;
