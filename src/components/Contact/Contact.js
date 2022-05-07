
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
    return (
      <div className="container mt-32  ">
        <div class="flex justify-center">
          <div class="flex flex-col md:flex-row ">
            <img
              src="https://whereismap.net/wp-content/uploads/2019/12/Where-is-Dhaka-Located-What-Country-is-Dhaka-in-Dhaka-Map-800x445.jpg"
              alt=""
            />
            <div class="text-left italic mt-16 ml-20   ">
              <h5 class="text-gray-900 text-2xl font-medium mb-2">Contact Details</h5>
              <h1 className="text-gray-900 text-xl font-medium mb-2">Find Location</h1>
              <h2>
                {" "}
                <FontAwesomeIcon className="text-red-700 me-2" icon={faMapLocation} />
                Bangladesh , Dhaka
              </h2>
              <h1 className="text-gray-900 text-xl font-medium mb-2">Call Us 24/7</h1>
              <h2>
                {" "}
                <FontAwesomeIcon className="text-red-700 me-2" icon={faMobile} />
                +880 1878573729
              </h2>
              <h1 className="text-gray-900 text-xl font-medium mb-2">Mail Us</h1>
              <h2>
                <FontAwesomeIcon className="text-red-700 me-2" icon={faEnvelope} />
                mdmitho199911@gmail.com
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;