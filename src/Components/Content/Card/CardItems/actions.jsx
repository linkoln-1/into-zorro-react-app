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

export const postCafe = (title, address, photo) => {
  return (dispatch) => {
    dispatch({
      type: "postCafe/send/start",
    });
    fetch("http://localhost:8000/cafe", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        address: address,
        url: photo,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "postCafe/send/success",
          payload: json,
        });
      });
  };
};
