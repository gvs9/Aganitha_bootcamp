// stackedBarGraph.js

document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  try {
    const response = await fetch(" https://api.mockaroo.com/api/0e7fdda0?count=500&key=a425d070"
     // "https://api.mockaroo.com/api/fcae83e0?count=500&key=734630c0"
    );
    const data = await response.json();
    console.log(data);

    const chartData = stackedBarGraphData(data);
    renderStackedBarGraph(chartData);
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

function stackedBarGraphData(data) {
  // Extract unique years from the data
  const years = [...new Set(data.map((item) => item.start_year))];
  console.log(years);

  // Group data by disease type and count trials for each year
  const groupedData = {};
  years.forEach((year) => {
    groupedData[year] = {};
  });

  data.forEach((item) => {
    const year = item.start_year;
    const diseaseType = item.disease_type;

    if (!groupedData[year][diseaseType]) {
      groupedData[year][diseaseType] = 1;
    } else {
      groupedData[year][diseaseType]++;
    }
  });

  // Transform data into Chart.js format
  const datasets = Object.keys(groupedData).map((year) => {
    return {
      label: year,
      data: Object.values(groupedData[year]),
      backgroundColor: getRandomColors(Object.keys(groupedData[year]).length),
    };
  });

  return {
    labels: Object.keys(groupedData[years[0]]), // Assume all years have the same disease types
    datasets: datasets,
  };
}

function renderStackedBarGraph(chartData) {
  const ctx = document.getElementById("stackedBarGraph").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
  

    },
  });

   // Add click event listener to the bar chart
   ctx.canvas.addEventListener('click', function(event) {
    const activePoint = myBarChart.getElementsAtEvent(event)[0];

    if (activePoint) {
      const label = myBarChart.data.labels[activePoint.index];
      const datasetLabel = myBarChart.data.datasets[activePoint.datasetIndex].label;
      const value = myBarChart.data.datasets[activePoint.datasetIndex].data[activePoint.index];

      // Call a function to update dynamic details based on the clicked section
      updateDynamicDetails(`${datasetLabel} - ${label}`, value);
    }
  });
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

