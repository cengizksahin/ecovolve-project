// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Get references to all screen sections
    const landingPage = document.getElementById("landing-page");
    const smeScreen = document.getElementById("sme-screen");
    const aiPersonaScreen = document.getElementById("ai-persona-screen");

    // Get references to the buttons
    const signInButton = document.getElementById("sign-in-btn");
    const chatNowButtons = document.querySelectorAll(".chat-now-btn");
    const backToLandingButtons = document.querySelectorAll("#back-to-landing"); // QuerySelectorAll for multiple back buttons
    const backToSmeButton = document.getElementById("back-to-sme");

    // Reference to the "Run" button and graph container
    const runButton = document.getElementById("run-btn");
    const graphContainer = document.getElementById("graph-container");

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

    // Event listeners for all "Back to Landing" buttons
    backToLandingButtons.forEach((button) => {
        button.addEventListener("click", () => {
            hideAllScreens();
            landingPage.style.display = "block"; // Show the Landing Page
            document.getElementById("landing-page-css").disabled = false;
            document.getElementById("sme-screen-css").disabled = true;
            document.getElementById("ai-persona-css").disabled = true;
        });
    });

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
            // Display the graph image
            graphContainer.innerHTML = `<img src="graph_image.png" alt="Graph" style="width: 100%; height: auto;">`;
        });
    }

    // Initially, show only the landing page
    hideAllScreens();
    landingPage.style.display = "block";
    document.getElementById("landing-page-css").disabled = false;
    document.getElementById("sme-screen-css").disabled = true;
    document.getElementById("ai-persona-css").disabled = true;
});
