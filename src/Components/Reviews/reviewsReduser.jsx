const initialState = {
  reviews: [],
  loading: false,
}

const reviewsReduser = (state = initialState, action) => {
  switch (action.type) {
    case  'reviews/load/start':
      return {
        ...state,
        loading: true
      }

    case  'reviews/load/success':
      return {
        ...state,
        loading: false,
        reviews: action.payload
      }

    case 'reviews/add':
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
      }

    default:
      return state
  }
}

export default reviewsReduser;