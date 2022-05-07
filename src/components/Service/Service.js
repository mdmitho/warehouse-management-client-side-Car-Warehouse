import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
    return (
      <div>
        <div className="container">
          <h1 className="mt-20 mb-20 text-3xl font-bold text-blue-600">Service</h1>

          <div class=" gap-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <FontAwesomeIcon className="w-16 h-16 mt-5 text-blue-600" icon={faCarSide} />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Fast Feature Delivety</h5>
                <p class="text-gray-700 text-base mb-4">
                  If the mechanic discovers other issues white your car while it's in the
                  garage he will call.
                </p>
              </div>
            </div>
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <FontAwesomeIcon
                  className="w-16 h-16 mt-5 text-blue-600"
                  icon={faMoneyCheckDollar}
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Reasonable Price</h5>
                <p class="text-gray-700 text-base mb-4">
                  Receiving offers through Autobutler guarantees your certainty your car. fixed
                  if the mechanic
                </p>
              </div>
            </div>
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <FontAwesomeIcon
                  className="w-16 h-16 mt-5 text-blue-600"
                  icon={faUserAstronaut}
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Expert Mechanics</h5>
                <p class="text-gray-700 text-base mb-4">
                  Most of the vehicles get damaged just because of maintenance neglect you
                  take.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;