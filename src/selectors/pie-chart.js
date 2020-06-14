import { createSelector } from 'reselect';

<<<<<<< HEAD
import { moduleName } from '../ducks/pie-chart';

const stateSelector = (state) => state[moduleName];
=======
import { moduleName } from 'ducks/pie-chart';

const stateSelector = (state: any) => state[moduleName];
>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757
export const chartDataSelector = createSelector(stateSelector, state => state.chartData || state.toJS().chartData);
export const getChartByIdSelector = id => {
    return createSelector(
        [chartDataSelector], chartData => {
            return chartData.find(data => {
<<<<<<< HEAD
                return data.id === id;
=======
                return data.id == id;
>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757
            });
    });
};