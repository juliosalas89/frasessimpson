import React from "react";

const Frases = (props) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-2">
            <img src={props.frase.image} className="img-fluid rounded-start" alt={props.frase.character}/>
          </div>
          <div className="col-md-10">
            <div className="text-center card-body">
              <h5 className="card-title">{props.frase.character}</h5>
              <p className="card-text">
              {props.frase.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frases;
