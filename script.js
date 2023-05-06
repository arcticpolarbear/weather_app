//API key is 1c0c421516ee4b6b865211829230605

const input = {
  getLocation: function () {
    const userLocation = document.getElementById("location_input").value;
    console.log("User location: " + userLocation);
    return userLocation;
  },
};

const locationSubmit = document.getElementById("location_submit");

locationSubmit.addEventListener("click", function () {
  const userLocation = input.getLocation();
  if (!userLocation) {
    console.log("No location submitted!");
  }
});
