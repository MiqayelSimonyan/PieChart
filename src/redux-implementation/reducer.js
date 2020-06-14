import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import pieChartReducer, { moduleName as pieChartModule } from '../ducks/pie-chart';

export default combineReducers({
    router,
    [pieChartModule]: pieChartReducer
});