import React, {useEffect} from 'react';
import UserProfileComponentView from "./UserProfileComponentView";

import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserProfileAction} from '../../redux/actions/userProfileActions';
import {loadUserAchievements} from '../../redux/actions/achievementsActions';

const UserProfileComponentContainer = () => {

        const {id} = useParams();

        const dispatch = useDispatch();

        useEffect(() => {
            if (id) {
                dispatch(fetchUserProfileAction(id));
                dispatch(loadUserAchievements(id));
            }
        }, [dispatch, id]);

        // const history = useHistory();

        const {
            userProfile,
            error,
            isLoading
        } = useSelector(state => state.user);

        const {
            levels
        } = useSelector(state => state.experience);


        return <UserProfileComponentView userProfile={userProfile}
                                         error={error}
                                         isLoading={isLoading}
                                         experienceLevels={levels}
            // onUserSaved={handleUserSaved}
        />;

    }
;

export default UserProfileComponentContainer;

