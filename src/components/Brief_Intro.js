import "./Briefstyle.css";
import React from "react";

const Brief_Intro = () => {
  return (
    <div className="brief">
      <div className="left">
        <h1>Brief Introduction</h1>
        <p>
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️ </p>
         <p> I am fluent in classics like Java, Javascript and Python.</p>
         <p>
          My field of Interest's are building new Web Technologies and Products
          and also in areas related to Machine learning and Data Mining.</p>
          <p> Whenever possible, I also apply my passion for developing
          products with Node.js and Modern Javascript Library and Frameworks
          like React.js and Next.js</p>
        
      </div>
      <div className="right">
      <div className="img-container">
          <div className="img-stack top">
            <img
              src="https://images.unsplash.com/photo-1633366446553-8adb7236f4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt="about img "
            //   width="100%"
            //   height="80%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brief_Intro;
