import React from 'react';


const AllItem = ({item,DeleteBtn}) => {
 

    const { img, name, description, supplier_name, price, quantity, } = item;
    return (
      <div>
        <div class="flex justify-center ">
          <div class="rounded-lg bg-white max-w-sm shadow-2xl shadow-black-500/50 mt-5">
            <a href="#!">
              <img class="rounded-t-lg" src={img} alt="" />
            </a>
            <div class="p-6 ">
              <h5 class="text-gray-900 text-2xl font-bold mb-2"> {name}</h5>
              <h1 className="mt-4">Price : ${price}</h1>
              <p className="mt-4">quantity : {quantity}</p>

              <p class="text-gray-700 text-base mb-3 text-left mt-3">{description}</p>
              <h1 className="mb-3 text-left">Supplier Name : {supplier_name}</h1>
              <button
              onClick={()=>DeleteBtn(item._id)}
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllItem;