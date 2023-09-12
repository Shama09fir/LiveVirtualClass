document.getElementById("subscriptionButton").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
});

document.getElementById("subscribeButton").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var country = document.getElementById("country").value;

  if (name === "" || country === "") {
      alert("Subscription failed: Please fill in all details.");
  } else {
      var message;
      if (country.toLowerCase() === "india") {
          message = "Subscription successful! You've availed a discount.";
      } else {
          message = "Subscription successful! No discount available.";
      }

      alert(message);
      document.getElementById("overlay").style.display = "none";
      document.getElementById("popup").style.display = "none";
  }
});