export const loadCafe = () => {
  return (dispatch) => {
    dispatch({ type: "load/cafe/start" });

    fetch();
  };
};
