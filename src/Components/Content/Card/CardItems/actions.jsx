export const LoadItems = () => {
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


export const LoadAddress = () => {
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

export const LoadBigImage = () => {
 return (dispatch) => {
  dispatch({ type: "image/load/start" });

  fetch("http://localhost:8000/bigImages")
    .then((response) => response.json())
    .then((json) => {
     dispatch({
      type: "image/load/success",
      payload: json,
     });
    });
 };
};

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














