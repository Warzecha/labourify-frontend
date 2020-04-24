import React, {useEffect} from 'react';
import UserProfileComponentView from "./UserProfileComponentView";

import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserProfileAction} from '../../redux/actions/userProfileActions';

const UserProfileComponentContainer = () => {

        const {id} = useParams();

        const dispatch = useDispatch();

        useEffect(() => {
            if (id) {
                dispatch(fetchUserProfileAction(id));
            }
        }, [id]);

        // const history = useHistory();

        const {
            userProfile,
            error,
            isLoading
        } = useSelector(state => state.user);


        return <UserProfileComponentView userProfile={userProfile}
                                         error={error}
                                         isLoading={isLoading}
            // onUserSaved={handleUserSaved}
        />;

    }
;

export default UserProfileComponentContainer;

