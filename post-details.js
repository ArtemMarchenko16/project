const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

async function getPostDetails() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const postDetails = await response.json();
    return postDetails;
}

async function getPostComments() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await response.json();
    return comments;
}

async function displayPostDetails() {
    const postDetails = await getPostDetails();
    const comments = await getPostComments();

    const postDetailsDiv = document.getElementById('post-details');
    postDetailsDiv.innerHTML = `
        <p>Post Details:</p>
        <p>Title: ${postDetails.title}</p>
        <p>Body: ${postDetails.body}</p>
        <p>User ID: ${postDetails.userId}</p>
        <p>Post ID: ${postId}</p>
    `;

    const commentsDiv = document.getElementById('comments');
    comments.forEach(comment => {
        const commentBlock = document.createElement('div');
        commentBlock.className = 'comment-block';
        commentBlock.innerHTML = `
            <p>Name: ${comment.name}</p>
            <p>Email: ${comment.email}</p>
            <p>Comment ID: ${comment.id}</p>
            <p>Body: ${comment.body}</p>
            <p>Post ID: ${postId}</p>
        `;
        commentsDiv.appendChild(commentBlock);
    });
}

displayPostDetails();
