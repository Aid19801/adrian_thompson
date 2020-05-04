import { combineReducers } from 'redux';
import appStateReducer from '../components/App/reducer';

import homePageReducer from '../containers/homepage/reducer';
import aboutPageReducer from '../containers/about-page/reducer';
import projectsPageReducer from '../containers/projects-page/reducer';
import contactPageReducer from '../containers/contact-page/reducer';

const RootReducer = combineReducers({
    appState: appStateReducer,
    homePage: homePageReducer,
    aboutPage: aboutPageReducer,
    contactPage: contactPageReducer,
    projectsPage: projectsPageReducer,
})

export default RootReducer;