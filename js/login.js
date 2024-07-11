firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "main.html";
    }
});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "main.html";
        })
        .catch(error => {
            console.log(error);
            alert('Wrong email or password');
        });
});
