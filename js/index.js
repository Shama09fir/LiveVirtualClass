const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
  
canvas.width = 300; // Set the width of the canvas box
canvas.height = 150; // Set the height of the canvas box
  
context.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Set the fill color with some transparency
context.fillRect(0, 0, canvas.width, canvas.height); // Draw the filled rectangle
  
context.strokeStyle = 'black'; // Set the stroke color
context.lineWidth = 10; // Set the stroke width
context.strokeRect(0, 0, canvas.width, canvas.height); // Draw the stroke rectangle
  
context.font = 'bold 20px Arial'; // Set the font style
context.fillStyle = 'black'; // Set the text color
context.textAlign = 'center';
context.textBaseline = 'middle';
context.fillText('Live Virtual Class', canvas.width / 2, canvas.height / 2); // Draw the text




let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-slide').length;
    
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
}
    
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}
    
function updateSlide() {
  const slideWidth = 100 / totalSlides;
  const transformValue = `translateX(-${currentSlide * slideWidth}%)`;
  document.querySelector('.carousel-slides').style.transform = transformValue;
}

var subscriptionModal = document.getElementById("subscriptionModal");

function openSubscriptionModal() {
  subscriptionModal.style.display = "block";
}
    
function closeSubscriptionModal() {
  subscriptionModal.style.display = "none";
}



    
function subscribe() {
  var name = document.getElementById("name").value;
  var country = document.getElementById("country").value;
  var discountMessage = "";
    
  if (country.toLowerCase() === "india") {
    discountMessage = "Congratulations! You have received a 50% discount.";
  } 
  else {
    discountMessage = "Sorry, no discount is available for your country.";
  } 
  alert("Thank you, " + name + "! " + discountMessage);
  closeSubscriptionModal();
}