import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} =useParams()
    const [user, setUser] = useState(id);
    const {register} = useForm()
   
    // const handleDelivery =()=>{
    //     const {quantity} = user;
    //     if(quantity >=1){
    //         let newQuantity = parseFloat(quantity -1)
    //         const newProduct = {...user,quantity:newQuantity};
    //         setUser(newProduct)
    //     }
    //     else{
    //         alert('Invalid')
    //     }

    //     const url = `http://localhost:4000/carcollection/${id}`;
    //     fetch(url, {
    //       method: "PUT",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(),
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data?.newQuantity);
    //         alert('update quantity')
    //     })

    // }
   
    useEffect(() => {
        const url = `http://localhost:4000/carcollection/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setUser(data))
    }, [])

    return (
      <div>
        <div class="flex justify-center">
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={user.img}
              alt=""
            />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">{user.name}</h5>
              <p class="text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
              <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
              <div className="flex ">
                <div className="p-5">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                  >
                    delivery
                  </button>
                </div>
                <div className="p-5">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                  >
                    add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Update;