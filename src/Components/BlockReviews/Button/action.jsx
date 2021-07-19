export const addReview = (text, id, userId) => {
  return(dispatch) => {
    fetch(`http://localhost:8000/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        cafeId: id,
        text: text,
        // name: name,
        date: new Date().toLocaleDateString()
      }),
      headers:{
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'reviews/add',
          payload: {
            userId: userId,
            cafeId: id,
            text: text,
            // name: name,
          }
        })
      })
  }
}