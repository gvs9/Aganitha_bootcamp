// lineGraph.js

document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  try {
    const response = await fetch(   // "https://api.mockaroo.com/api/0e7fdda0?count=500&key=a425d070"
      //"https://api.mockaroo.com/api/fcae83e0?count=500&key=734630c0"
    );
    const data = await response.json();
    console.log(data);

    const chartData = lineGraphData(data);
    renderLineGraph(chartData);
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
  renderFilters(data);
 
} catch (error) {
  console.error('Error loading data:', error.message);
  loadingIndicator.style.display = 'none';
  // You might want to handle the error gracefully in your application
}
}
const visualizationsContainer = document.getElementById('visualizations');
// Initiate data loading
document.addEventListener('DOMContentLoaded', function () {
// Initiate data loading
loadData();
});

function lineGraphData(data) {
  // Extract unique years from the data
  const years = [...new Set(data.map((item) => item.year))];
  console.log(years);

  // Group data by gender and calculate average age for each year
  const groupedData = {};
  years.forEach((year) => {
    groupedData[year] = { male: 0, female: 0, total: 0, count: 0 };
  });

  data.forEach((item) => {
    const year = item.year;
    const gender = item.gender;
    const age = parseInt(item.age);

    groupedData[year][gender] += age;
    groupedData[year].total += age;
    groupedData[year].count++;
  });

  // Calculate average age for each year and gender
  Object.keys(groupedData).forEach((year) => {
    groupedData[year].male = Math.round(groupedData[year].male / groupedData[year].count);
    groupedData[year].female = Math.round(groupedData[year].female / groupedData[year].count);
    groupedData[year].total = Math.round(groupedData[year].total / groupedData[year].count);
  });

  // Transform data into Chart.js format
  const datasets = [
    {
      label: "Male",
      data: years.map((year) => groupedData[year].male),
      borderColor: getRandomColor(),
      fill: false,
    },
    {
      label: "Female",
      data: years.map((year) => groupedData[year].female),
      borderColor: getRandomColor(),
      fill: false,
    },
    {
      label: "Total",
      data: years.map((year) => groupedData[year].total),
      borderColor: getRandomColor(),
      fill: false,
    },
  ];

  return {
    labels: years,
    datasets: datasets,
  };
}

function renderLineGraph(chartData) {
  const ctx = document.getElementById("lineGraph").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
    },
  });

  ctx.canvas.addEventListener('click', function(event) {
    const activePoint = myLineChart.getElementsAtEvent(event)[0];

    if (activePoint) {
      const label = myLineChart.data.labels[activePoint.index];
      const datasetLabel = myLineChart.data.datasets[activePoint.datasetIndex].label;
      const value = myLineChart.data.datasets[activePoint.datasetIndex].data[activePoint.index];

      // Call a function to update dynamic details based on the clicked section
      updateDynamicDetails(`${datasetLabel} - ${label}`, value);
    }
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

