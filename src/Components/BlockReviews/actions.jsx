export const loadReviews = () => {
  return (dispatch) => {
    dispatch({ type: 'reviews/load/start' });
    fetch(`http://localhost:8000/reviews`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'reviews/load/success',
          payload: json,
        });
      });
  };
};
