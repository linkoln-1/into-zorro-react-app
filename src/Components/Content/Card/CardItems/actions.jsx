export const loadItems = () => {
  return (dispatch) => {
    dispatch({ type: "cafe/load/start" });

    fetch("http://localhost:8000/cafe")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "cafe/load/success",
          payload: json,
        });
      });
  };
};
