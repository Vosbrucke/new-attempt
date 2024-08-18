document.addEventListener("DOMContentLoaded", function() {
    // Function to load markdown file
    function loadMarkdown(file, elementId) {
        fetch(file)
            .then(response => response.text())
            .then(text => {
                const html = marked.parse(text); // Convert Markdown to HTML using marked
                console.log(html); // Debug: Output the converted HTML
                document.getElementById(elementId).innerHTML = html;
            })
            .catch(error => console.error('Error loading markdown file:', error));
    }

    // Load each section's markdown file
    loadMarkdown('home.md', 'home-content');
    loadMarkdown('aboutme.md', 'about-content');
    loadMarkdown('project1.md', 'project1-content');
    loadMarkdown('project2.md', 'project2-content');
    loadMarkdown('project3.md', 'project3-content');
    loadMarkdown('contact.md', 'contact-content');
});
