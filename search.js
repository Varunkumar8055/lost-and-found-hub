// search.js

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const leftPostContainer = document.getElementById("leftpostStores");
    const rightPostContainer = document.getElementById("rightpoststore");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        filterPosts(leftPostContainer, searchTerm);
        filterPosts(rightPostContainer, searchTerm);
    });

    function filterPosts(container, searchTerm) {
        const posts = container.querySelectorAll(".post");

        posts.forEach(post => {
            const postText = post.textContent.toLowerCase();
            const isVisible = postText.includes(searchTerm);
            post.style.display = isVisible ? "block" : "none";
        });
    }
});
