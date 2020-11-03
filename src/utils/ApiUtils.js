export const getAccessTokenFromState = (getState) => {
    const {
        auth: {
            accessToken
        } = {}
    } = getState();

    return accessToken;
};

export const getAuthorizationHeaders = accessToken => ({'Authorization': `Bearer ${accessToken}`});
