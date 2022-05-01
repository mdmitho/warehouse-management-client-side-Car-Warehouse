import React from 'react';
import useItem from "../../Hooks/useItem";
import AllItem from '../All-Item/AllItem';


const MyItem = () => {
    const [items, setItems] = useItem();
    return (
      <div>
        <div className="container mx-auto ">
          <h1 className="mt-10 text-3xl font-bold text-sky-500">All Item</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8">
            {items.map((item) => (
              <AllItem key={items._id} item={item}></AllItem>
            ))}
          </div>
          
        </div>
      </div>
    );
};

export default MyItem; 