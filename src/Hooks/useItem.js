import { useEffect, useState } from "react";

const useItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://frozen-plateau-23610.herokuapp.com/carcollection")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return [items, setItems];
};
export default useItem;
