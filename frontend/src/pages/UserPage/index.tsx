import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import productSlice from "../../redux/slices/product-slice";
import { productsService } from "../../services/productService";

const UserPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const id = query.get("id");

  useEffect(() => {
    const Authorization = localStorage.getItem("ACCESS_TOKEN");
    if (id && Authorization) {
      const auth = `Bearer ${Authorization}`;
      productsService
        .getUserProducts(+id, auth)
        .then((res) => console.log(res));
    }
  }, [id]);
  return <div>index</div>;
};

export default UserPage;
