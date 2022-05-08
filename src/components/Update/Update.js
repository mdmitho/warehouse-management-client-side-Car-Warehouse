import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} =useParams()
    console.log(id);
    const [user, setUser] = useState(id);




    const handleDelevir = ()=>{
      const {quantity } = user;
          if(quantity>=1){
              let newQuantity = parseFloat(quantity - 1);
              const newProduct = {...user,quantity: newQuantity};
              
              setUser(newProduct)
              localStorage.setItem(newProduct);
          }else{
              alert("Invalid")
          }
      const url = `http://localhost:4000/carcollection/${id}`;
      fetch(url, {
          method: 'PUT',
          headers: {
              'content-type':'application/json'
          },
          body: JSON.stringify(),
      })
          .then(res => res.json())
          .then(data => {
              console.log(data?.newQuantity);
              alert('update Quantity')
          })
        
  }

  const handleSubmit=e=>{
    e.preventDefault()
    const { quantity } = user;
   let newQuantity = parseFloat(quantity+1);
      const newProduct = {...user,quantity: newQuantity};

      setUser(newProduct)
      localStorage.setItem(newProduct);
}







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
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-5">
            <img
              class=" w-96 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={user.img}
              alt=""
            />
            <div class="p-6 flex flex-col justify-start ">
              <div className="p-3">
                <h5 class="text-gray-900 text-xl font-medium mb-2">{user.name}</h5>
                <p class="text-gray-700 text-base mb-4">Price : {user.price}</p>

                <p class="text-gray-700 text-base mb-4">Description : {user.description}</p>

                <p class="text-gray-700 text-base mb-4">Quantity : {user.quantity}</p>

                <p class="text-gray-700 text-base mb-">Supplier_Name : {user.supplier_name}</p>
              </div>

              <div className="flex ">
                <div className="p-5">
                  <button
                    onClick={handleDelevir}
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                  >
                    delivery
                  </button>
                </div>
                <div className="p-5">
                  <button
                    onClick={handleSubmit}
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