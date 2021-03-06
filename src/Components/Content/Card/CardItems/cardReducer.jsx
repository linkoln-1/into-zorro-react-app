const initialState = {
  item: [],
  loadingItem: false,
};

export const Card = (state = initialState, action) => {
  switch (action.type) {
    case 'cafe/load/start':
      return {
        ...state,
        loadingItem: true,
      };

    case 'cafe/load/success':
      return {
        ...state,
        item: action.payload,
        loadingItem: false,
      };

    case 'postCafe/send/start':
      return {
        ...state,
        loadingItem: true,
      };

    case 'postCafe/send/success':
      return {
        ...state,
        item: [...state.item, action.payload],
        loadingItem: false,
      };

    default:
      return state;
  }
};

export default Card;
