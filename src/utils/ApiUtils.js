export const getAccessTokenFromState = (getState) => {
    const {
        auth: {
            accessToken
        } = {}
    } = getState();

    return accessToken;
};
