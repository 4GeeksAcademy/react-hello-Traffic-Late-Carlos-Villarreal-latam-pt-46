import React, { useState, useEffect } from "react";


// Create your first component

	function TrafficLight ()  {

		/* Creo la constante que sera para uso de los colores*/
		const [color, setColor] = useState("red");

		/* Creo la constante que tendra el IF para el clic del boton*/
		const clic= () => {
			if (color === "red") setColor("yellow");
			else if (color === "yellow") setColor("green");
			else setColor("red");
		  };
		  	

    return (
					
			
			<div className="support">	
				<div className="app d-inline-flex flex-column flex-nowrap"> 
					<div  onClick={() => setColor("red")}    className={color === "red"    ? "red light" :     "red" }  	>		</div>
					<div  onClick={() => setColor("yellow")} className={color === "yellow" ? "yellow light ":  "yellow" } 	>		</div>
					<div  onClick={() => setColor("green")}  className={color === "green"  ? "green  light":	"green" } 	>		</div>
				</div>

				<div class="btn-group" role="group" aria-label="Basic example">

					<button type="button" class="btn btn-primary"onClick={clic}>Cambiar Color</button>
			
				</div>
		
			</div> 


		

			

	)

		
};

export default TrafficLight;