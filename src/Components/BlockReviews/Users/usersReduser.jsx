const initialState = {
  users: [],
  loading: false
}

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'users/load/start':
      return {
        ...state,
        loading: true
      }

    case 'users/load/success':
      return {
        ...state,
        loading: false,
        users: action.payload
      }

    default:
      return state
  }
}

export default usersReduser;