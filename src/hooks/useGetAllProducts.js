import { useCallback, useEffect, useState } from "react";

const useGetAllProducts = () => {
  const [data, setData] = useState();

  const fetchdataMomoized = useCallback(async () => {
    let res = await fetch("http://localhost:4000/product");
    let resdata = await res.json();
    setData(resdata);
  }, [])
  
  useEffect(() => {
    fetchdataMomoized();
  }, [fetchdataMomoized]);

  return data;
};

export default useGetAllProducts;
