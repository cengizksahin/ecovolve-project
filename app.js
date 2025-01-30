// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Get references to all screen sections
    const landingPage = document.getElementById("landing-page");
    const smeScreen = document.getElementById("sme-screen");
    const aiPersonaScreen = document.getElementById("ai-persona-screen");

    // Get references to the buttons
    const signInButton = document.getElementById("sign-in-btn");
    const chatNowButtons = document.querySelectorAll(".chat-now-btn");
    const backToLandingButton = document.getElementById("back-to-landing");
    const backToSmeButton = document.getElementById("back-to-sme");

    // Reference to the "Run" button and graph container
    const runButton = document.getElementById("run-btn");
    const graphContainer = document.getElementById("graph-container");

    // Dropdown references
    const categorySelect = document.getElementById("category-select");
    const reportSelect = document.getElementById("report-select");

    // Report data based on category
    const reports = {
        "CSRD Compliance": [
            "Financial Disclosure Alignment",
            "Emission Reduction Strategies",
            "Legal Compliance Overview"
        ],
        "CO2 Accounting": [
            "Carbon Footprint Analysis",
            "Offsetting Strategies",
            "Emission Benchmarking"
        ],
        "Energy Efficiency": [
            "Energy Usage Analysis",
            "Renewable Integration Feasibility",
            "Efficiency Improvement Strategies"
        ],
        "Waste Management": [
            "Recycling Metrics",
            "Waste Reduction Plans",
            "Hazardous Waste Tracking"
        ]
    };

    // Function to populate the report dropdown based on the selected category
    const updateReportOptions = () => {
        const selectedCategory = categorySelect.value;

        // Clear previous options
        reportSelect.innerHTML = "";

        // Add placeholder
        const placeholderOption = document.createElement("option");
        placeholderOption.textContent = "Select a Report";
        placeholderOption.value = "";
        placeholderOption.disabled = true;
        placeholderOption.selected = true;
        reportSelect.appendChild(placeholderOption);

        // Populate new options
        if (reports[selectedCategory]) {
            reports[selectedCategory].forEach((report) => {
                const option = document.createElement("option");
                option.textContent = report;
                option.value = report;
                reportSelect.appendChild(option);
            });
        }
    };

    // Add event listener to category dropdown
    categorySelect.addEventListener("change", updateReportOptions);

    // Function to hide all screens
    const hideAllScreens = () => {
        landingPage.style.display = "none";
        smeScreen.style.display = "none";
        aiPersonaScreen.style.display = "none";
    };

    // Event listener for the "Sign In" button
    signInButton.addEventListener("click", () => {
        hideAllScreens();
        smeScreen.style.display = "block"; // Show the SME screen
        document.getElementById("landing-page-css").disabled = true;
        document.getElementById("sme-screen-css").disabled = false;
        document.getElementById("ai-persona-css").disabled = true;
    });

    // Event listeners for all "Chat Now" buttons
    chatNowButtons.forEach((button) => {
        button.addEventListener("click", () => {
            hideAllScreens();
            aiPersonaScreen.style.display = "block"; // Show the AI Persona screen
            document.getElementById("landing-page-css").disabled = true;
            document.getElementById("sme-screen-css").disabled = true;
            document.getElementById("ai-persona-css").disabled = false;
        });
    });

    // Event listener for the "Back to Landing" button
    if (backToLandingButton) {
        backToLandingButton.addEventListener("click", () => {
            hideAllScreens();
            landingPage.style.display = "block"; // Show the Landing Page
            document.getElementById("landing-page-css").disabled = false;
            document.getElementById("sme-screen-css").disabled = true;
            document.getElementById("ai-persona-css").disabled = true;
        });
    }

    // Event listener for the "Back to SME" button
    if (backToSmeButton) {
        backToSmeButton.addEventListener("click", () => {
            hideAllScreens();
            smeScreen.style.display = "block"; // Show the SME screen
            document.getElementById("landing-page-css").disabled = true;
            document.getElementById("sme-screen-css").disabled = false;
            document.getElementById("ai-persona-css").disabled = true;
        });
    }

    // Event listener for the "Run" button
    if (runButton) {
        runButton.addEventListener("click", () => {
            generateGraph();
        });
    }

// Function to generate a sample graph
const generateGraph = () => {
    // Clear the graph container
    graphContainer.innerHTML = '';

    // Create a canvas element for the graph
    const canvas = document.createElement('canvas');
    canvas.id = 'sample-graph';
    canvas.style.width = '100%'; // Set the canvas width
    canvas.style.height = '300px'; // Set the canvas height
    graphContainer.appendChild(canvas);

    // Sample data for the graph
    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: '',
                data: [520, 610, 780, 890, 670, 750, 860, 910, 940, 1020, 1120, 1180],
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                borderWidth: 2,
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 7
            }
        ]
    };

    // Graph configuration
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false, // Disable aspect ratio to allow full use of height/width
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Monthly Data Overview (2024)',
                    font: {
                        size: 18
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Months',
                        font: {
                            size: 14
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'CO2 Footprint ',
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    };

    // Render the graph using Chart.js
    new Chart(canvas, config);
};


const chatButtons = document.querySelectorAll('.chat-card');
const chatPreview = document.querySelector('.chat-preview');

chatButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            // Sample message history for the first button
            chatPreview.innerHTML = `
                <div>
                    <p><strong>User:</strong> How can I improve my company's CSRD compliance score?</p>
                    <p><strong>AI Persona:</strong> Based on your latest report, your CSRD compliance score is at 75%. You can improve it by enhancing supply chain transparency and increasing your renewable energy usage.</p>
                    <p><strong>User:</strong> What are the key areas I need to focus on for the next audit?</p>
                    <p><strong>AI Persona:</strong> The main areas for improvement include detailed emissions tracking, employee sustainability training, and proper documentation of ESG initiatives.</p>
                    <p><strong>User:</strong> Can you generate a summary of our sustainability report for this quarter?</p>                                     
                    </div>
            `;
        } else {
            // Placeholder for other chats
            chatPreview.innerHTML = `<p>No data available for this chat.</p>`;
        }
    });
});





    // Initially, show only the landing page
    hideAllScreens();
    landingPage.style.display = "block";
    document.getElementById("landing-page-css").disabled = false;
    document.getElementById("sme-screen-css").disabled = true;
    document.getElementById("ai-persona-css").disabled = true;
});
