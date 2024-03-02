import axios from "axios";

export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};

export const setProducts = (payload) => {
  return {
    type: "SET_PRODUCTS",
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: "SET_ERROR",
    payload,
  };
};

// redux thunk devreye girince action oluşturan fonksiyon

export const getData = () => {
  return (dispatch) => {
    dispatch(setLoading());
    //api isteği atabilir daha sonra store haber verebiliir
    axios
      .get("http://localhost:3080/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.massage)));
  };
};

// dispatch({
//   type: "SET_PRODUCTS",
//   payload: resizeBy.data,
// }
