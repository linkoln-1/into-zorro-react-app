export const LoadContactInfo = () => {
 return (dispatch) => {
  dispatch({ type: "info/load/start" });

  fetch("http://localhost:8000/ContactInfo")
    .then((response) => response.json())
    .then((json) => {
     dispatch({
      type: "info/load/success",
      payload: json,
     });
    });
 };
};
