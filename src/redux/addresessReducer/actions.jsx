export const loadAddress = () => {
  return (dispatch) => {
    dispatch({ type: "addresses/load/start" });

    fetch("http://localhost:8000/addresses")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "addresses/load/success",
          payload: json,
        });
      });
  };
};
