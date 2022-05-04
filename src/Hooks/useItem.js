import { useEffect, useState,  } from "react";


const useItem = ()=>{
    const [items, setItems] = useState([]);

useEffect(() =>{
    fetch("http://localhost:4000/carcollection")
      .then((res) => res.json())
      .then((data) => setItems(data));
},[])

return [items, setItems]

}
export default useItem
