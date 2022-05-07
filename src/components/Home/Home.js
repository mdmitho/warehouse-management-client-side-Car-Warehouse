import React from 'react';
import { Link } from 'react-router-dom';
import useItem from '../../Hooks/useItem';

import Item from '../Item/Item';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';

const Home = () => {

    const [items,setItems] = useItem()

    return (
      <div>
        <Slider></Slider>
        <div className="container mx-auto ">
          <h1 className="mt-20 text-3xl font-bold text-blue-600">CAR COLLECTION</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-14">
            {items.slice(0, 6).map((item) => (
              <Item key={items._id} item={item}></Item>
            ))}
          </div>
          <Link to="/inventory">
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
              sm:mt-8
              "
              
            >
              CAR all COLLECTION
            </button>
          </Link>
        </div>
        <Service></Service>
      </div>
    );
};

export default Home;