const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BASKET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_BASKET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_BASKET_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };
    case "ADD":
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };

    case "UPDATE":
      const cloneBasket = [...state.basket];
      const foundId = cloneBasket.findIndex(
        (item) => item.id === action.payload
      );

      cloneBasket[foundId].amount++;
      return {
        ...state,
        basket: cloneBasket,
      };

    case "DELETE":
      const filtred = state.basket.filter((item) => item.id !== action.payload);
      return {
        ...state,
        basket: filtred,
      };

    case "DECREASE":
      const basketClone = [...state.basket];
      const founded = basketClone.findIndex(
        (item) => item.id === action.payload.id
      );
      basketClone[founded].amount--;
      console.log(basketClone);
      return {
        ...state,
        basket: basketClone,
      };

    default:
      return state;
  }
};

export default basketReducer;
