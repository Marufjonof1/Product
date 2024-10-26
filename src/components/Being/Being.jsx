import React from "react";
import './Being.css'
import bobur1 from '../../img/amico.png'
const Being = () => {
  return (
    <div className="workat-section">
      <h2>Product is being used with great effects alongside:</h2>
      <div className="workat-content">
        <div className="workat-image">
          <img src={bobur1}  />
        </div>
        <div className="workat-info">
          <ul>
            <li>
              <span>🧑‍💼 Entrepreneur</span> 
              <p>
                Product is a great way to help medium and small enterprise owners achieve their goals.
              </p>
            </li>
            <li>
              <span>📊 Accountants</span>
              <p>
                Whether you are working on contract with clients, or on other key accounting documents, Product is for you.
              </p>
            </li>
            <li>
              <span>🏫 Universities</span>
              <p>
                Organize university projects and have documents easily graded online with Product.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Being;
