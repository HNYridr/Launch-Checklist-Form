window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         
   
   
         const displayData = document.getElementById("missionTarget");
         displayData.innerHTML = `
         <h2>Mission Destination</h2> 
           <ol>
               <li id="planetName">Name: ${json[0].name}</li>
               <li id="diameterVal">Diameter: ${json[0].diameter}</li>
               <li id="stars">Star: ${json[0].star}</li>
               <li id="DistanceFrom">Distance from Earth: ${json[0].distance}</li>
               <li id="MoonNum">Number of Moons: ${json[0].moons}</li>
         </ol>
         
      <img src="${json[0].image}"></img>
   
      `;

      
});

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let showFault = document.getElementById("faultyItems");
      
      //alert user if required fields are not filled
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("All fields are required!");
      }
      //alert user if incorrect data is used for cargo mass 
      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("Fuel level and Cargo Mass MUST be numbers. do not include spaces or '.'");
      }
      //alert user if text only section contains other characters
      if (typeof(pilotNameInput.value) !== string || typeof(copilotNameInput.value) !== string){
         alert("name of pilot/copilot cannot inculde numbers");
      }
      //update launch status if fuel level is incorrect 
      if (fuelLevelInput.value < 10000){
         showFault.style.visibility =  "visible";
         fuelStatus.innerHTML = "there is not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = 'red';
      }
      if (cargoMassInput.value > 10000){
         showFault.style.visibility =  "visible";
         cargoStatus.innerHTML = "cargo mass must be less than 10000";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = 'red';
      }

      });
   });
});



