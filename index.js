async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}


async function displayUsers() {
    const users = await getUsers();
    const userList = document.getElementById('user-list');

    users.forEach(user => {
        const userBlock = document.createElement('div');
        userBlock.className = 'user-block';
        userBlock.innerHTML = `
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <button onclick="showUserDetails(${user.id})">Details</button>
        `;
        userList.appendChild(userBlock);
    });
}

function showUserDetails(userId) {
    window.location.href = `user-details.html?id=${userId}`;
}

displayUsers();
