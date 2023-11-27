document.addEventListener("DOMContentLoaded", fetchData);

let currentInsight = '';

async function fetchData() {
  try {
    const response = await fetch(//" https://api.mockaroo.com/api/0e7fdda0?count=500&key=a425d070"
     // "https://api.mockaroo.com/api/fcae83e0?count=500&key=734630c0"
    );
    const data = await response.json();
    console.log(data);

    const chartData = pieChartData(data);
    renderChart(chartData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function loadData() {
  // const loadingIndicator = document.createElement('div');
  // loadingIndicator.innerHTML = '<p>Loading...</p>';
  // document.getElementById('filters').appendChild(loadingIndicator);
  const loadingIndicator = document.getElementById('loadingIndicator');
try {
  loadingIndicator.style.display = 'block';
  const data = await fetchData();
  console.log('Data loaded successfully:', data);
  loadingIndicator.style.display = 'none';
  // Remove loading indicator
  // loadingIndicator.remove();

  // Render components with data
 // renderFilters(data);
 
} catch (error) {
  console.error('Error loading data:', error.message);
  loadingIndicator.style.display = 'none';
  // You might want to handle the error gracefully in your application
}
}
//const visualizationsContainer = document.getElementById('visualizations');
// Initiate data loading
document.addEventListener('DOMContentLoaded', function () {
// Initiate data loading
loadData();
});

function pieChartData(data) {
  const phases = [...new Set(data.map((item) => item.phase))];
  console.log(phases);
  const counts = phases.map(
    (phase) => data.filter((item) => item.phase === phase).length
  );

  return {
    labels: phases,
    datasets: [
      {
        data: counts,
        backgroundColor: getRandomColors(counts.length),
      },
    ],
  };
}

function renderChart(chartData) {
  const ctx = document.getElementById("pieChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: chartData,
    options: {
      responsive: true,
      // Remove maintainAspectRatio: false

      legend: {
        position: "bottom",
        padding: 2,
      },
     

    },
  });




  ctx.canvas.addEventListener('click', function(event) {
    const activePoint = myPieChart.getElementsAtEvent(event)[0];

    if (activePoint) {
      const label = myPieChart.data.labels[activePoint.index];
      const value = myPieChart.data.datasets[0].data[activePoint.index];

      // Call a function to update dynamic details based on the clicked section
      updateDynamicDetails(label, value);
      console.log(value);
    }
  });

}
  // Add click event listener to the pie chart


  function updateDynamicDetails(label, value) {
    // You can update some HTML element with the details based on the clicked section
    const dynamicDetailsElement = document.getElementById("dynamic-details");
    dynamicDetailsElement.innerHTML = `<p>Phase: ${label}</p><p>Number of Trials: ${value}</p>`;
  }




function getRandomColors(count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(getRandomColor());
  }
  return colors;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}






