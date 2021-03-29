window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListner("submit", function(event) {
      submit.preventDefault()
      let pilotNameInput = document.getElementById("pilotName");
      let copilotNameInput = document.getElementById("copilotName");
      let fuelLevelInput = document.getElementById("fuelLevel");
      let cargoMassInput = document.getElementById("cargoMass");
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

      
   });
 });
//  jsonData = fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response) {
//    for (i = 0; i > jsonData.length; i++){
//       for (x = 0; x > i.length; x++){
//       planetName = i[x].name.value;
//       planetDiameter = i[x].diameter.value;
//       planetStar = i[x].star.value;
//       planetDistance = i[x].distance.value;
//       planetImage = i[x].image.value;
//       planetMoons = i[x].moons.value;
//       };
//    };
//  });

fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response) {
   planetData = response.json().then( function(json) {
   planetName = json[0].name;
   planetDiameter = json[0].diameter;
   planetStar = json[0].star;
   planetDistance = json[0].distance;
   planetImage = json[0].image;
   planetMoons = json[0].moons;
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
