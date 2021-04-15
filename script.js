window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
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
      if (pilotNameInput.value !== String || cargoMassInput.value !== String ){
         alert("name of pilot/copilot cannot inculde numbers");
      }
      //update launch status if fuel level is incorrect 
      if (fuelLevelInput.value < 10000){
         
         showFault.style.visibility =  "visible";
         fuelStatus.innerHTML = "there is not enough fuel for the journey";
         cargoStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = 'red';
      }
      
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then( function(json) {
      // alert(JSON.stringify(json));
     emptyArray = [];
      jsonArray = emptyArray.push(json);
      alert(jsonArray);
      const displayData = document.getElementById("missionTarget");
      moonNum.innerHTML = `Number of Moons: ${"jsonArray[0].moons"}`;
     
  
      
      
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

