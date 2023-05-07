const inputHandling = {
  submit: function (location) {
    //I know hardcoding API keys is bad, but this is an educational assignment
    const apiKey = "1c0c421516ee4b6b865211829230605";
    const userLocation = location;
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userLocation}`"
    );
  },
};

const userLocation = document.getElementById("location_input").value;
const locationSubmit = document.getElementById("location_submit");

locationSubmit.addEventListener("click", function () {
  const userLocation = inputHandling.getLocation();
  if (!userLocation) {
    console.log("No location submitted!");
  }
});
