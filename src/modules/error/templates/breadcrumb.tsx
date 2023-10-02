import React from "react";
import Image from "next/image";
const BreadCrumb = () => {
  return (
    <section className="breadcrumb">
      <div className="shape-breadcrumb">
        <img
          className="shape-bread01"
          src="assets/images/shapes/pie-half07.png"
          alt=""
        />
        <img
          className="shape-bread02"
          src="assets/images/shapes/wave03.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-wrap">
              <p>
                <a href="index.html">
                  <span>Home</span>
                </a>{" "}
                {">"} <a href="error.html">Error</a>
              </p>
              <h3>404 Error</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
