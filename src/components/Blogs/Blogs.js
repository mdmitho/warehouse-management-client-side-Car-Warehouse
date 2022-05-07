import React from "react";

const Blogs = () => {
  return (
    <div className="container ">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingOne">
            <button
              class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. Difference between javascript and nodejs?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5 text-left">
              <code>JavaScript</code> <br /> 1. JavaScript is a programming language. It is
              running in any web browser with a proper browser engine.
              <br /> 2. Javascript can only be run in the browsers.
              <br /> 3. It is basically used on the client-side.
              <br /> 4. Javascript can run in any browser engine as like JS core in safari and
              Spidermonkey in Firefox.
              <br /> 5. Javascript is used in frontend development. <br /> 6. It is the
              upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
              <br />
              <code>Node JS</code> <br />
              1. NodeJS is a Javascript runtime environment.
              <br /> 2. We can run Javascript outside the browser with the help of NodeJS.
              <br /> 3. It is mostly used on the server-side.
              <br /> 4. V8 is the Javascript engine inside of node.js that parses and runs
              Javascript.
              <br /> 5. Nodejs is used in server-side development.
              <br /> 6. Nodejs is written in C, C++ and Javascript.
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingTwo">
            <button
              class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. Differences between sql and nosql databases?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5 text-left">
              <code>SQL</code>
              <br /> 1 SQL databases are relational <br />2 SQL databases use structured query
              language and have a predefined schema <br />3 SQL databases are vertically
              scalable
              <br /> 4 SQL databases are table-based <br />5 SQL databases are better for
              multi-row transactions
              <br /> 6 These databases have fixed or static or predefined schemaoverflow.
              <br />
              <code>NoSQL</code>
              <br />1 NoSQL databases are non-relational.
              <br /> 2 NoSQL databases have dynamic schemas for unstructured data.
              <br /> 3 while NoSQL databases are horizontally scalable. <br />4 while NoSQL
              databases are document, key-value, graph, or wide-column stores. <br />5 while
              NoSQL is better for unstructured data like documents or JSON. <br />6 They have
              dynamic schema
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingThree">
            <button
              class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. What is the purpose of jwt and how does it work?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5">
              <strong>JWT, or JSON Web Token </strong> , is an open standard used to share
              security information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are signed using a
              cryptographic algorithm to ensure that the claims cannot be altered after the
              token is issued.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
