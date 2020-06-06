import React from 'react';
import {useSelector} from 'react-redux';
import AchievementListComponentView from './AchievementListComponentView';

const AchievementListComponentContainer = () => {

    const {
        userAchievements
    } = useSelector(state => state.achievements);

    return (
        <AchievementListComponentView allAchievements={userAchievements}/>
    );
};

export default AchievementListComponentContainer;
