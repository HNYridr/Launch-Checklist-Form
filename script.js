window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
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
         launchStatusChange.style.color = "red";
      }

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then( function(json) {
      const displayData = document.getElementById("missionTarget");
      displayData.innerHTML = 
      <h2>Mission D</h2>
         <ol>
            <li>Name: ${"json[0].name"}</li>
            <li>Diameter: ${"json[0].diameter"}</li>
            <li>Star: ${"json[0].star"}</li>
            <li>Distance from Earth: ${"json[0].distance"}</li>
            <li>Number of Moons: ${"json[0].moons"}</li>
         </ol>
      <img src="${https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg}">
      */</img>
   // "planetName" : "json[0].name",
   // "planetDiameter" : "json[0].diameter",
   // "planetStar" : "json[0].star",
   // "planetDistance" : "json[0].distance",
   // "planetImage" : "json[0].image",
   // "planetMoons" : "json[0].moons"
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
