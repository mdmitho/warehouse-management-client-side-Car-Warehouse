import React from 'react';
import useItem from "../../Hooks/useItem";
import AllItem from "../All-Item/AllItem";


const Inventory = () => {
    const [items, setItems] = useItem();
    const DeleteBtn = (id)=>{
      const proceed = window.confirm("Are you sure you want to delete");
      if (proceed) {
        const url = `http://localhost:4000/carcollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
              console.log('sucess',data);
            const remaing = items.filter((item) => item._id!== id);
            setItems(remaing);
          });
      }
    }
    return (
      <div>
        <div className="container mx-auto ">
          <h1 className="mt-10 text-3xl font-bold text-sky-500">All Car</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8">
            {items.map((item) => (
              <AllItem 
              key={items._id} 
              item={item}
              DeleteBtn={DeleteBtn}
                 ></AllItem>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Inventory;