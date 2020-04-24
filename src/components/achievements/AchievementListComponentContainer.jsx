import React from 'react';
import {useSelector} from 'react-redux';
import AchievementListComponentView from './AchievementListComponentView';

const AchievementListComponentContainer = () => {

    const {
        allAchievements
    } = useSelector(state => state.achievements);

    return (
        <AchievementListComponentView allAchievements={allAchievements}/>
    );
};

export default AchievementListComponentContainer;
