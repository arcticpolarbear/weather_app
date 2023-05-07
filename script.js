const inputHandling = {
  submitLocation: async function (location) {
    if (!location) {
      console.log("User location not found");
      return;
    }
    console.log("User location: " + location);
    //I know hardcoding API keys is bad, but this is an educational assignment
    try {
      const apiKey = "1c0c421516ee4b6b865211829230605";
      const userLocation = location;
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userLocation}`
      );
      const data = await response.json();
      console.log("Response from server\n" + data);
      return data;
    } catch (e) {
      console.log("Failed to return API call: " + e);
    }
  },
};

const submitButton = document.getElementById("location_submit");

submitButton.addEventListener("click", function () {
  const locationField = document.getElementById("location_input").value;
  inputHandling.submitLocation(locationField);
});
