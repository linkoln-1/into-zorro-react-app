const initialState = {
  BigImage: [],
  loadingItem: false,
};

export const bigImages = (state = initialState, action) => {
  switch (action.type) {
    case 'image/load/start':
      return {
        ...state,
        loadingItem: true,
      };

    case 'image/load/success':
      return {
        ...state,
        BigImage: action.payload,
        loadingItem: false,
      };

    default:
      return state;
  }
};

export default bigImages;
