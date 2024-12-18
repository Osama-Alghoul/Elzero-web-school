// 01
// Fetch the JSON file using Promises
function fetchArticles() {
    return new Promise((resolve, reject) => {
        fetch('package.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch JSON data");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Function to render the first 5 articles on the page
function renderArticles(articles) {
    const articlesDiv = document.getElementById("articles");
    articles.slice(0, 5).forEach(article => {
        const articleHTML = `
            <div>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <p><strong>User ID:</strong> ${article.userId}</p>
            </div>
        `;
        articlesDiv.innerHTML += articleHTML;
    });
}

// Fetch and render the articles
fetchArticles()
    .then(articles => {
        renderArticles(articles);
    })
    .catch(error => {
        console.error("Error loading articles:", error);
    });


// 02
// Function to fetch articles using Fetch API
function fetchArticles() {
    return fetch('package.json') // Fetch the JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch JSON data");
            }
            return response.json(); // Parse the JSON data
        });
}

// Function to render the first 5 articles
function renderArticles(articles) {
    const articlesDiv = document.getElementById("articles");
    articles.slice(0, 5).forEach(article => {
        const articleHTML = `
            <div>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <p><strong>User ID:</strong> ${article.userId}</p>
            </div>
        `;
        articlesDiv.innerHTML += articleHTML;
    });
}

// Fetch and render articles
fetchArticles()
    .then(articles => {
        renderArticles(articles);
    })
    .catch(error => {
        console.error("Error loading articles:", error);
    });
