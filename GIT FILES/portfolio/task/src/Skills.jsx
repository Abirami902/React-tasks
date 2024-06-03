import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
 // Assuming you have a separate CSS file for styling
// import htmlImg from './public/html.png'; // Adjust the path as per your project structure
// import cssImg from './images/css.png';
// import gitImg from './images/git.png';
// import jsImg from './images/js.png';
// import mongoImg from './images/mongo.png';
// import nodeImg from './images/node.png';
// import reactImg from './images/React.webp';
// import xmlImg from './images/xml.jpg';
// import jsxImg from './images/jsx.webp';
// import bootstrapImg from './images/bootstrap.jpg';
// import cImg from './images/c.png';
// import cppImg from './images/cpp.png';
// import expressImg from './images/express.png';
// import javaImg from './public/java.png';
// import mysqlImg from './images/mysql.png';

function Skills() {
  return (

     <div className="container my-5 color text-white">
      <h1 className="text-center mb-4 ">SKILLS</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src='html.png' alt='abc' className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">HTML</h5>
            </div>
          </div>
        </div>
        {/* Repeat the card structure for other skills */}
        <div className="col-md-4 mb-4">
          <div className="card">
          <img src='' alt='abc' className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">CSS</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
          <img src='' alt='abc' className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">BOOTSTRAP</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
