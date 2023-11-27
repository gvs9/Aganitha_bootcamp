

document.addEventListener("DOMContentLoaded", async function () {
    const data = await fetchData();
    renderDataTable(data);
});

async function fetchData() {
    try {
        const response = await fetch( ''//" https://api.mockaroo.com/api/0e7fdda0?count=500&key=a425d070");
       // "https://api.mockaroo.com/api/fcae83e0?count=500&key=734630c0" 
       );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}


function renderDataTable(data) {
    // Define the column names and corresponding data keys
    const columnNames = ["Trial ID", "Disease Type", "Trial Phase", "Location", "Status", "Funding Source", "Participant Count", "Outcome Success Rate", "Start Year", "End Year","Objective","Methodologies","Partcipant Demographic","Outcomes","Age"];
    const columnKeys = ["trial_id", "disease_type", "phase", "location", "status", "funding_source", "participant_count", "outcome_successrate", "start_year", "end_year","objective","methodologies","participant_demographic","outcomes","age"];

    // Create DataTable columns dynamically
    const columns = columnNames.map((name, index) => ({ data: columnKeys[index], title: name }));

    // Initialize DataTable with options
    const dataTable = $('#data-table').DataTable({
        data: data,
        columns: columns,
        destroy: true, // Destroy existing table (if any) before initializing
    });

    // Optionally, add additional customization or event handling here
}
