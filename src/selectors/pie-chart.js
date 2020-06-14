import { createSelector } from 'reselect';

import { moduleName } from 'ducks/pie-chart';

const stateSelector = (state: any) => state[moduleName];
export const chartDataSelector = createSelector(stateSelector, state => state.chartData || state.toJS().chartData);
export const getChartByIdSelector = id => {
    return createSelector(
        [chartDataSelector], chartData => {
            return chartData.find(data => {
                return data.id == id;
            });
    });
};