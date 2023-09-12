function calculate() {
    var percentage = document.getElementById("percentage");
    var mathsMarks = document.getElementById("mathsMarks").value;
    var computerMarks = document.getElementById("computerMarks").value;
    var scienceMarks = document.getElementById("scienceMarks").value;
    var totalMarks = document.getElementById("totalMarks");
    var maxMarks = document.getElementById("maxMarks");

    totalMarks.textContent = parseFloat(mathsMarks) + parseFloat(computerMarks) + parseFloat(scienceMarks);
    percentage.textContent = (totalMarks.textContent / 300 * 100).toFixed(2) + "%";

    var max = Math.max(parseFloat(mathsMarks), parseFloat(computerMarks), parseFloat(scienceMarks));
    maxMarks.textContent = max;
}