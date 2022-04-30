import React from 'react';
import notfound from '../../img/404.jpg'
import "./NotFound.css";

const NotFound = () => {
    return (
      <div className="notfound">
        <img className=" min-w-full" src={notfound} alt="" />
      </div>
    );
};

export default NotFound;