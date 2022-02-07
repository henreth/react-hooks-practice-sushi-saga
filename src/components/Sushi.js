import React,{useState} from "react";

function Sushi({sushi,onEatSushi}) {
  let [isEaten,setIsEaten]= useState(false);

  function handleEatSushi(){
    setIsEaten(true);
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {isEaten ? null : (
          <img
            src={sushi['img_url']}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
