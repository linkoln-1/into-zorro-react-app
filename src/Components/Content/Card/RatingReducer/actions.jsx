export const LoadRatings = () => {
 return (dispatch) => {
  dispatch({ type: "rating/load/start" });

  fetch("http://localhost:8000/Rating")
    .then((response) => response.json())
    .then((json) => {
     dispatch({
      type: "rating/load/success",
      payload: json,
     });
    });
 };
};
