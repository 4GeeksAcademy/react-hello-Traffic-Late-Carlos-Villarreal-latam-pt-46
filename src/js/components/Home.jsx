import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
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

export default Home