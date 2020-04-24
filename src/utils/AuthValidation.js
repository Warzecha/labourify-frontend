export const validateUsername = (username) => {
    if (!username) {
        return "Required Username";
    } else if (!/.{4,}/.test(username)) {
        return "Username must be at least 4 characters";
    }
    return null;
};

export const validatePassword = (password) => {
    if (!password) {
        return 'Required Password';
    } else if (password.length < 5) {
        return 'Password must be at least 5 characters';
    } else {
        return null;
    }
};

export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
        return 'Email is required';
    } else if (!re.test(String(email).toLowerCase())) {
        return 'Email must be valid';
    } else {
        return null;
    }
};

export const validateRepeatedPassword = (password) => (repeatedPassword) => {
    if (repeatedPassword !== password) {
        return 'Passwords must match';
    } else {
        return null;
    }
};
