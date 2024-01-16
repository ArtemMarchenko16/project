const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

async function getUserDetails() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userDetails = await response.json();
    return userDetails;
}

async function displayUserDetails() {
    const userDetails = await getUserDetails();
    const userDetailsDiv = document.getElementById('user-details');

    userDetailsDiv.innerHTML = `
        <p>ID: ${userDetails.id}</p>
        <p>Name: ${userDetails.name}</p>
    `;
}

function showUserPosts() {
    window.location.href = `user-posts.html?userId=${userId}`;
}

displayUserDetails();