// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart").getContext('2d');
const myAreaChart = new Chart(ordersChart, {
    type: 'line',
    data: data,
  });
  const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");


// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
