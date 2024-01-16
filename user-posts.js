const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

async function getUserPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const userPosts = await response.json();
    return userPosts;
}

async function displayUserPosts() {
    const userPosts = await getUserPosts();
    const userPostsDiv = document.getElementById('user-posts');

    userPosts.forEach(post => {
        const postBlock = document.createElement('div');
        postBlock.className = 'post-block';
        postBlock.innerHTML = `
            <p>Title: ${post.title}</p>
            <button onclick="showPostDetails(${post.id})">Details</button>
        `;
        userPostsDiv.appendChild(postBlock);
    });
}

function showPostDetails(postId) {
    window.location.href = `post-details.html?postId=${postId}`;
}

displayUserPosts();