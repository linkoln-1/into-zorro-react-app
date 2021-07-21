const initialState = {
  ContactInfo: [],
  loadingItem: false,
};

export const ContactInfo = (state = initialState, action) => {
  switch (action.type) {
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

export default ContactInfo;
