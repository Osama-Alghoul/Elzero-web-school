// Create an AJAX call to fetch the JSON file
const xhr = new XMLHttpRequest();
xhr.open("GET", "articles.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Convert the JSON object to a JavaScript object
        let mainData = JSON.parse(xhr.responseText);

        // Update the category of all articles to 'All'
        mainData.forEach(article => {
            article.category = "All";
        });

        // Log the mainData variable content after the update
        console.log("mainData Variable Content:", mainData);

        // Convert the JavaScript object back to a JSON object
        let updatedData = JSON.stringify(mainData);

        // Log the updatedData variable content
        console.log("UpdatedData Variable Content:", updatedData);

        // Log a message indicating the data has been loaded
        console.log("Data Loaded");

        // Append the data to the div with id="data"
        const dataDiv = document.getElementById("data");

        mainData.forEach(article => {
            // Use default values if properties are undefined
            const title = article.title || "No Title";
            const body = article.body || "No content available.";
            const author = article.author || "Unknown";
            const category = article.category || "General";

            const articleHTML = `
                <div>
                    <h2>${title}</h2>
                    <p>${body}</p>
                    <p>Author: ${author}</p>
                    <p>Category: ${category}</p>
                </div>
            `;
            dataDiv.innerHTML += articleHTML;
        });

    }
};

// Send the request
xhr.send();
