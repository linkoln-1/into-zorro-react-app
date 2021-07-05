const initialState = {
  item: [],
  addresses: [],
  BigImage: [],
  ContactInfo: [],
  loadingItem: false,
};

export const Card = (state = initialState, action) => {
  switch (action.type) {
    case "cafe/load/start":
      return {
        ...state,
        loadingItem: true,
      };

    case "cafe/load/success":
      return {
        ...state,
        item: action.payload,
        loadingItem: false,
      };

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

    case "image/load/start":
      return {
        ...state,
        loadingItem: true,
      };

    case "image/load/success":
      return {
        ...state,
        BigImage: action.payload,
        loadingItem: false,
      };

    case "info/load/start":
      return {
        ...state,
        loadingItem: true,
      };

    case "info/load/success":
      return {
        ...state,
        ContactInfo: action.payload,
        loadingItem: false,
      };

    default:
      return state;
  }
};

export default Card;
