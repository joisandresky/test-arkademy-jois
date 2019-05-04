function is_username_valid(username) {
    return (/^[a-z]{8}$/.test(username));
}

function is_password_valid(password) {
    return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password));
}

console.log(is_username_valid('Joisand'));
console.log(is_username_valid('joisand'));
console.log(is_username_valid('joisandr'));
console.log(is_password_valid('lasskqwe'));
console.log(is_password_valid('Abcde12@k'));