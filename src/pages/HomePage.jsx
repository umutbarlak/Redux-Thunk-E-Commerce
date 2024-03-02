import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getData } from "../redux/actions/productActions";
import Card from "../components/Card";
import { getBasket } from "../redux/actions/basketActions";

const HomePage = () => {
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // sadece bir aksiyon çalıştıracağız
    dispatch(getData());

    dispatch(getBasket());
  }, []);

  return (
    <div className="container p-2">
      {/* veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/* hata oluştuysa */}
      {store.isError && (
        <h1 className="  text-center my-5"> {store.isError} </h1>
      )}

      <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
        {/* veriler geldiyse */}
        {store?.products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
