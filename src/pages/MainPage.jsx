import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productActions";
import Loader from "../components/Loader";

const MainPage = () => {
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();

  console.log(store);

  useEffect(() => {
    dispatch(setLoading());

    axios
      .get("http://localhost:3080/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  return (
    <div className="container p-5">
      {/* veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/* hata oluştuysa */}
      {store.isError && (
        <h1 className="  text-center my-5"> {store.isError} </h1>
      )}
      <div>
        {/* veriler geldiyse */}
        {store?.products.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
