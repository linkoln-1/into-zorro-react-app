const initialState = {
  reviews: [],
  loadingReviews: false
}

const reviewsReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'reviews/load/start':
      return {
        ...state,
        loadingReviews: true
      }
    case 'reviews/load/success':
      return {
        ...state,
        reviews: action.payload,
        loadingReviews: false
      }


    default:
      return state
  }
}

export default reviewsReduser;