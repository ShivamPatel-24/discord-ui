export const validateLoginForm = ({ email, password }) => {
    const isMailValid = validateMail(email);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
};

const validatePassword = (password) => {
    return password.length > 5;
};

const validateMail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
};
