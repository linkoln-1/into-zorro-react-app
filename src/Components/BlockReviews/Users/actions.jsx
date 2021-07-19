export const loadUsers = () => {
  return(dispatch) => {
    dispatch({type: 'users/load/start'})
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'users/load/success',
          payload: json
        })
      })
  }
}