import axios from "axios";

export const addToBasket = (product) => async (dispatch) => {
  const newProduct = { ...product, amount: 1 };

  delete newProduct.specs;
  delete newProduct.color;
  delete newProduct.title;
  delete newProduct.stockAmount;

  console.log(newProduct);

  const res = await axios.post("http://localhost:3080/basket", newProduct);

  if (res) {
    dispatch({
      type: "ADD",
      payload: newProduct,
    });
  }
};

export const getBasket = () => (dispatch) => {
  dispatch({
    type: "SET_BASKET_LOADING",
  });
  axios
    .get("http://localhost:3080/basket")
    .then((res) =>
      dispatch({
        type: "SET_BASKET_DATA",
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "SET_BASKET_ERROR",
        payload: err.message,
      })
    );
};

export const updateItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3080/basket/${product.id}`, {
      amount: product.amount + 1,
    })
    .then(() => {
      dispatch({
        type: "UPDATE",
        payload: product.id,
      });
    });
};

export const deleteItem = (delete_id) => (dispatch) => {
  axios.delete(`http://localhost:3080/basket/${delete_id}`).then(() =>
    dispatch({
      type: "DELETE",
      payload: delete_id,
    })
  );
};

export const decreaseItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3080/basket/${product.id}`, {
      amount: product.amount - 1,
    })
    .then(() =>
      dispatch({
        type: "DECREASE",
        payload: product,
      })
    );
};
