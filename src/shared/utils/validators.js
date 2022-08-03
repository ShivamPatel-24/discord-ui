export const validateLoginForm = ({ email, password }) => {
    return validateMail(email) && validateNumChar(password, true);
};

export const validateRegisterForm = ({ email, username, password }) => {
    return (
        validateMail(email) &&
        validateNumChar(username, false) &&
        validateNumChar(password, true)
    );
};

const validateNumChar = (word, pass) => {
    if (pass) return word.length >= 6 && word.length <= 15;
    return word.length >= 3 && word.length <= 12;
};

const validateMail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
};
