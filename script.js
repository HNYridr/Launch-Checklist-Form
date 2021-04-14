window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListner("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let showFault = document.getElementById("faultyItems");
      let fuelStatusChange = document.getElementById("fuelStatus");
      let launchStatusChange = document.getElementById("launchStatus");
      //alert user if required fields are not filled
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("All fields are required!")
      }
      //alert user if incorrect data is used for cargo mass 
      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("Fuel level and Cargo Mass MUST be numbers. do not include spaces or '.'")
      }
      //alert user if text only section contains other characters
      if (pilotNameInput.value !== string || cargoMassInput.value !== string){
         alert("name of pilot/copilot cannot inculde numbers")
      }
      //update launch status if fuel level is incorrect 
      if (fuelLelevInput.value < 10000){
         showFault.style.visibility =  "visible";
         fuelStatusChange = "there is not enough fuel for the journey";
         launchStatusChange = "Shuttle not ready for launch";
         launchStatusCHange.style.color = "red";
      }

      fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response) {
   let planetData = response.json().then( function(json) {
   "planetName" : "json[0].name",
   "planetDiameter" : "json[0].diameter",
   "planetStar" : "json[0].star",
   "planetDistance" : "json[0].distance",
   "planetImage" : "json[0].image",
   "planetMoons" : "json[0].moons"
   });
 });

 
      
   });
 });


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
