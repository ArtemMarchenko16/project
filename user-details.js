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
        <p>Username: ${userDetails.username}</p>
        <p>Email: ${userDetails.email}</p>
        <p>Address:</p>
        
            <li>Street: ${userDetails.address.street}</li>
            <li>Suite: ${userDetails.address.suite}</li>
            <li>City: ${userDetails.address.city}</li>
            <li>Zipcode: ${userDetails.address.zipcode}</li>
        
        <p>Geo:</p>
        
        <li>lat: ${userDetails.address.geo.lat}</li>   
        <li>Ing: ${userDetails.address.geo.lng}</li>      
        <p>Phone: ${userDetails.phone}</p>
        <p>Website: ${userDetails.website}</p>
        <p>Company:</p>
        <li>name:${userDetails.company.name}</li>
        <li>catchPhrase:${userDetails.company.catchPhrase}</li>
        <li>bs:${userDetails.company.bs}</li>
    `;
}



function showUserPosts() {
    window.location.href = `user-posts.html?userId=${userId}`;
}

displayUserDetails();
