// Line Chart for Orders
const ctx = document.getElementById('myBarChart').getContext('2d');
const myBarChart= new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['June', 'July', 'August', 'September', 'October'],
        datasets: [{
            label: 'Women',
            data: [5000, 4000, 3000, 2000, 1000],
            backgroundColor: [
                '#CAD2C5',
                '#CAD2C5',
                '#77aca2',
                '#9dbebb',
                '#77aca2',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
           
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Bar Chart for Visitor
const visitorChart  = document.getElementById('myAreaChart').getContext('2d');
const ordersChart   = new Chart(visitorChart, {
    type: 'line',
    data: {
        labels: ['Aug1', 'Aug3', 'Aug5', 'Aug7', 'Aug9', 'Aug11','Aug13'],
        datasets: [{
            label: 'Month',
            data: [5000, 4000, 3000, 2000, 1000],
            backgroundColor: [
                '#77aca2',
                '#CAD2C5',
                '#e3d5ca',
                '#CAD2C5',
                '#CAD2C5',
                '#c9ada7)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// 468189
// Liner Chart for Cities
const citiesChart  = document.getElementById('myPieChart').getContext('2d');
const myPieChart  = new Chart(citiesChart, {
    type: 'doughnut',
    data: {
        labels: ['Riyadh', 'Jeddah', 'Dammam', 'Macca'],
        datasets: [{
            label: '# of Votes',
            data: [3, 5, 2, 3],
            backgroundColor: [
                '#edede9',
                '#CAD2C5',
                '#9dbebb',
                '#CAD2C5',
                '#edede9'
              ],
              hoverOffset: 2
          
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart").getContext('2d');
const myLinearChart  = new Chart(ratChart, {
    type: 'radar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Month',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#CAD2C5',
                '#CAD2C5',
                '#9dbebb',
                '#CAD2C5',
                '#CAD2C5'
            ],
          
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});