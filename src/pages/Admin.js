import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

const Admin = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      animationData: require("../assets/data-management.json"),
    });
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="page-heading">Admin Panal</h2>
        <br />
        <div className="row">
          <div className="col">
            <div className=" action-card">
              <h4>Manage Categories</h4>
              <p>
                Create new category, remove category, edit existing category...
              </p>
            </div>
            <div className="action-card">
              <div>
                <h4>Manage Users</h4>
              </div>

              <p>Assign roles to users, See users details...</p>
            </div>
            <div className=" action-card">
              <h4>Manage Products</h4>
              <p>
                Create new product, remove product, edit existing product...
              </p>
            </div>
          </div>
          <div className="col">
            <div ref={container}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
