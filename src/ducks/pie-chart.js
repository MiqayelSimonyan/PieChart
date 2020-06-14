import { Map, List } from 'immutable';

export const CREATE_CHART = 'CREATE_CHART';
export const DELETE_CHART = 'DELETE_CHART';
export const UPDATE_CHART_FIELD = 'UPDATE_CHART_FIELD';
export const DELETE_CHART_FIELD = 'DELETE_CHART_FIELD';

const initialState = {
	chartData: List.of()
};

export const moduleName = 'pieChart';

const initialStateMap = Map(initialState);

export default function reducer(state = initialStateMap, action) {
	switch (action.type) {
		case CREATE_CHART: {
			const { id: payloadId, data: payloadData } = action.payload;

			let chartData = state.get('chartData');
			let chartIndex = chartData.findIndex(data => data.id === payloadId);

			return state
				.set(
					'chartData', chartIndex > -1
				?
					chartData.setIn(
						[chartIndex, 'data', chartData.getIn([chartIndex, 'data']).length],
						payloadData
					)
				:
					List.of(...state.get('chartData'), { id: payloadId, data: [payloadData] })
				)
		}

		case UPDATE_CHART_FIELD: {
			const { fieldIndex, chartIndex, fieldId, name, value } = action.payload;

			let chartData = state.get('chartData');

			return state
				.set(
					'chartData',
					chartData.setIn(
						[chartIndex, 'data', fieldIndex],
						{ id: fieldId, name, value }
					)
				)
		}

		case DELETE_CHART: {
			const { chartId } = action.payload;

			return state
				.set(
					'chartData',
					List.of(
						...state.get('chartData').filter(chart => {
							return chart.id !== chartId;
						})
					)
				)
		}

		case DELETE_CHART_FIELD: {
			const { chartIndex, chartId, fieldId } = action.payload;

			let chartData = state.get('chartData');
			let chartFieldsLength = chartData.getIn([chartIndex, 'data']).length;

			return state
				.set(
						'chartData', chartIndex > -1
					?
						chartFieldsLength < 2 ?
							List.of(
								...chartData.filter(chart => {
									return chart.id !== chartId;
								})
							)
						:
						chartData.update(
							chartIndex,
							chart => {
								const { id, data } = chart;

								return {
									id,
									data: data.filter(field => field.id !== fieldId )
								}
							}
						)
					:
						state.get('chartData')
				)
		}

		default:
			return state;
	}
};

/* actions */
export function createChart(payload) {
	return {
		type: CREATE_CHART,
		payload
	}
};

export function updateChartField(payload) {
	return {
		type: UPDATE_CHART_FIELD,
		payload
	}
};

export function deleteChart(payload) {
	return {
		type: DELETE_CHART,
		payload
	}
};

export function deleteChartField(payload) {
	return {
		type: DELETE_CHART_FIELD,
		payload
	}
};