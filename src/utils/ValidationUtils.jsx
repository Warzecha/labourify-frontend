export const isRequired = message => value => {
    if (!value) {
        return message;
    } else {
        return null;
    }
};
