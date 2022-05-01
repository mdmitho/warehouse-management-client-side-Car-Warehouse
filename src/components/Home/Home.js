import React from 'react';
import useItem from '../../Hooks/useItem';

import Item from '../Item/Item';
import Slider from '../Slider/Slider';

const Home = () => {

    const [items,setItems] = useItem()

    return (
      <div>
        <Slider></Slider>
        <div className="container mx-auto ">
          <h1 className="mt-20 text-3xl font-bold text-sky-500">CAR COLLECTION</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-14">
            {items.slice(0, 6).map((item) => (
              <Item key={items._id} item={item}></Item>
            ))}
          </div>
          <button className="btn btn-info">ALL COLLECTION</button>
        </div>
        
      </div>
    );
};

export default Home;