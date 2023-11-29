




let mockData = [];

// Simulate data fetching with loading indicators
async function fetchData() {
   // const apiUrl = 'https://api.mockaroo.com/api/fcae83e0?count=500&key=734630c0';
    const apiUrl = 'https://api.mockaroo.com/api/0e7fdda0?count=500&key=a425d070';

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        mockData = data;
        console.log('Data fetched successfully:', data);
        return data;


    } catch (error) {
        console.error('Error fetching data:', error.message);
        // You might want to handle the error gracefully in your application
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

// function toggleMenu() {
//     var menuLinks = document.getElementById("menuLinks");
//     if (menuLinks.style.display === "block") {
//         menuLinks.style.display = "none";
//     } else {
//         menuLinks.style.display = "block";
//     }
// }


// loadData();
function searchStudies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const pageContent = document.body.innerText.toLowerCase();
    if (pageContent.includes(searchTerm)) {
        alert(`Found: "${searchTerm}" in the page.`);
    } else {
        alert(`"${searchTerm}" not found in the page.`);
    }

    searchInput.value = "";

}
// Function to render filters
function renderFilters(data) {
    
    // console.log(filterContainer);
    // Get unique values for each filter
    const uniqueDiseaseTypes = [...new Set(data.map(trial => trial.disease_type))];
    const uniqueTrialPhases = [...new Set(data.map(trial => trial.phase))];
    const uniqueLocations = [...new Set(data.map(trial => trial.location))];
    const uniqueStatuses = [...new Set(data.map(trial => trial.status))];
    const uniqueFundingSources = [...new Set(data.map(trial => trial.funding_source))];

    // Render filters
    renderFilterSelect('diseaseType', 'Disease Type', uniqueDiseaseTypes);
    renderFilterSelect('trialPhase', 'Trial Phase', uniqueTrialPhases);
    renderFilterSelect('location', 'Location', uniqueLocations);
    renderFilterSelect('status', 'Status', uniqueStatuses);
    renderFilterSelect('fundingSource', 'Funding Source', uniqueFundingSources);

    
}

// Helper function to render a filter select element
function renderFilterSelect(id, label, options) {
    const selectElement = document.getElementById(id);
    selectElement.innerHTML = ''; 

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = `Select ${label}`;
    selectElement.appendChild(defaultOption);

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

// Function to apply filters
function applyFilters() {
    // console.log('running');
    // Get selected values from the filters
    const selectedDiseaseType = document.getElementById('diseaseType');
    const selectedTrialPhase = document.getElementById('trialPhase');
    const selectedLocation = document.getElementById('location');
    const selectedStatus = document.getElementById('status');
    const selectedFundingSource = document.getElementById('fundingSource');
    console.log(selectedDiseaseType.value);
    
    // Filter the data based on selected values
   // console.log('apply',mockData);
    let filteredData = mockData.filter(trial => {
       // console.log('trial', trial.disease_type)
        return (
            (!selectedDiseaseType.value || trial.disease_type === selectedDiseaseType.value) &&
            (!selectedTrialPhase.value || trial.phase === selectedTrialPhase.value) &&
            (!selectedLocation.value || trial.location === selectedLocation.value) &&
            (!selectedStatus.value || trial.status === selectedStatus.value) &&
            (!selectedFundingSource.value || trial.funding_source === selectedFundingSource.value)
        );
    });
    console.log('filtered', filteredData)
    renderTrialDetails(filteredData);
    if (filteredData.length > 0) {
        const trialDetails = filteredData;
    } else {
        console.error('No trial details found in the API response.');
    }
   // console.log(filteredData);
    // Call functions to update visualizations and data table with filteredData
    updatePieChart(filteredData);
    renderVisualizations(filteredData);
    renderDataTable(filteredData);
}

document.addEventListener('DOMContentLoaded', function() {
    const filterContainer = document.querySelector('#filters');
    console.log(filterContainer);
    
    filterContainer.addEventListener('submit', (event) => {
        console.log('submit');
        event.preventDefault();
        applyFilters();
    })
})





// Function to render trial details
function renderTrialDetails(trial) {
    // TODO: Implement collapsible elements for trial details
    
    // Create collapsible elements for trial details and add them to the container
    // ...

    // Add event listeners for collapsing/expanding trial details
    // ...
    console.log('trial', trial);
    const trialDetailsContainer = document.getElementById('trial-details-content');
    if (!trialDetailsContainer) {
        console.error('Trial details container not found.');
        return;
    }

    trialDetailsContainer.innerHTML = ''; // Clear loading message

    // Create collapsible elements for trial details
    const createCollapsibleElement = (title, content) => {
        const collapsibleElement = document.createElement('div');
       // const collapsibleElementPara = document.createElement('p');
        collapsibleElement.classList.add('collapsible');

        const header = document.createElement('div');
        header.classList.add('collapsible-header');
        header.textContent = title;

        const icon = document.createElement('span');
        icon.classList.add('icon');
        icon.textContent = '+';
        header.appendChild(icon);

        const body = document.createElement('div');
        body.classList.add('collapsible-body');
        // body.innerHTML = content;
        content.forEach(section => {
            console.log(section)
            const sectionElement = document.createElement('div');
    

            
            // Iterate over the keys in each section and create elements
            const limelement = ['phase','objective', 'methodologies', 'participant_demographic', 'outcomes'];
            const element = limelement.slice(0, 50);
            element.forEach(key => {
                const element = document.createElement('p');
                element.textContent =  `${key}: ${section[key]}`;
                 element.classList.add('filter-key'); 
                sectionElement.appendChild(element);
            });
    
            // Append the section to the body
            body.appendChild(sectionElement);
        });


        collapsibleElement.appendChild(header);
        collapsibleElement.appendChild(body);
       // collapsibleElement.appendChild(para);

        return collapsibleElement;
    };

    console.log(trial[0].objectives);
    // Add collapsible elements for each section
    trialDetailsContainer.appendChild(createCollapsibleElement('Phase-I', trial));
    trialDetailsContainer.appendChild(createCollapsibleElement('Phase-II', trial));
    trialDetailsContainer.appendChild(createCollapsibleElement('Phase-III', trial));
    trialDetailsContainer.appendChild(createCollapsibleElement('Phase-IV', trial));

    // Add event listeners for collapsing/expanding trial details
    const collapsibleElements = trialDetailsContainer.querySelectorAll('.collapsible');
    collapsibleElements.forEach(collapsible => {
        collapsible.addEventListener('click', () => {
            collapsible.classList.toggle('collapsed');
            const icon = collapsible.querySelector('.icon');
            icon.textContent = collapsible.classList.contains('collapsed') ? '+' : '-';
        });
    });



}






// Simulate data loading with loading indicators
document.addEventListener("DOMContentLoaded", function () {
    var goToTopBtn = document.getElementById("goToTopBtn");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    });

    goToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});
// Add a click event listener to smoothly scroll to the top

// index.js

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the visualization containers
    const pieChartContainer = document.getElementById('pie-chart-container');
    const barGraphContainer = document.getElementById('bar-graph-container');
    const lineGraphContainer = document.getElementById('line-graph-container');

    // Attach click event listeners to the links
    pieChartContainer.querySelector('a').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        window.location.href = 'pieChart.html'; // Redirect to the pie chart page
    });

    barGraphContainer.querySelector('a').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'stackedBarGraph.html';
    });

    lineGraphContainer.querySelector('a').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'lineGraph.html';
    });
});
// index.js

document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the data table container
    const dataTableContainer = document.getElementById('data-table-container');

    // Attach a click event listener to the data table link
    dataTableContainer.querySelector('a').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        window.location.href = 'dataTable.html'; // Redirect to the data table page
    });
});
// function toggleMenu() {
//     var menuLinks = document.getElementById("menuLinks");
//     menuLinks.classList.toggle("menulinks");
//     console.log('opening',menuLinks); // Toggle the "show-menu" class
// }

// document.getElementById('menu-icon').addEventListener('click', function () {
//     var nav = document.querySelector('nav');
//     nav.classList.toggle('show-menu');
// });

document.getElementById('navToggle').addEventListener('click', function () {
    var nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
});