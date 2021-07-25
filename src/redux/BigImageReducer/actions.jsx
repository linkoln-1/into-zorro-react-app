export const loadBigImage = () => {
  return (dispatch) => {
    dispatch({ type: 'image/load/start' });

    fetch('http://localhost:8000/bigImages')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'image/load/success',
          payload: json,
        });
      });
  };
};
