import { useEffect, useState,  } from "react";


const useItem = ()=>{
    const [items, setItems] = useState([]);

useEffect(() =>{
    fetch("car.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
},[])

return [items, setItems]

}
export default useItem
