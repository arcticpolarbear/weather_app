//API key is 1c0c421516ee4b6b865211829230605

const input = {
  getWeather: function (textInput) {
    const userLocation = document.getElementById("location_input");
    console.log("User location: " + userLocation);
    return userLocation;
  },
};

const locationSubmit = document.getElementById("location_submit");

locationSubmit.addEventListener("input", input.getWeather());
