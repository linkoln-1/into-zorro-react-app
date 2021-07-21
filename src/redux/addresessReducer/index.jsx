const initialState = {
  addresses: [],
  loadingItem: false,
};

export const addressess = (state = initialState, action) => {
  switch (action.type) {
    case "addresses/load/start":
      return {
        ...state,
        loadingItem: true,
      };

    case "addresses/load/success":
      return {
        ...state,
        addresses: action.payload,
        loadingItem: false,
      };

    default:
      return state;
  }
};

export default addressess;
