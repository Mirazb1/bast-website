
"use static";

document.getElementById('button').addEventListener('click', function () {
    const emails = document.getElementById('email');
    const userEmail = emails.value;

    // get userPassword
    const passwords = document.getElementById('password');
    const userPassword = passwords.value;

    if (userEmail == 'mdmiraz7589@gmail.com' && userPassword == 'Miraz8@#') {
        window.location.href = 'https://mirazb1.github.io/panda-bootstrap/';
    }
})
