const initialState = {
  reviews: [],
  loading: false,
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'reviews/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'reviews/load/success':
      return {
        ...state,
        loading: false,
        reviews: action.payload,
      };

    case 'review/add/start':
      return {
        ...state,
        loading: true,
      };

    case 'reviews/add':
      return {
        ...state,
        loading: false,
        reviews: [action.payload, ...state.reviews ],
      };

    default:
      return state;
  }
};

export default reviewsReducer;
