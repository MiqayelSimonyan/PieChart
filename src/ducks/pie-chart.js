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
						chartData.update(
							chartIndex,
							chart => {
								const { id, data } = chart;

								return { id, data: [...data, payloadData] }
							}
						)
					:
						List.of(...state.get('chartData'), { id: payloadId, data: [payloadData] })
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

		case UPDATE_CHART_FIELD: {
			const { chartId, fieldId, name, value } = action.payload;

			let chartData = state.get('chartData');
			let chartIndex = chartData.findIndex(data => data.id === chartId);

			return state
				.set(
					'chartData',
					chartData.update(
						chartIndex,
						chart => {
							const { id, data } = chart;
							let dataIndex = data.findIndex(field => field.id === fieldId);

							let dataCopy = [...data];
							dataCopy[dataIndex].name = name;
							dataCopy[dataIndex].value = value;

							return {
								id,
								data: dataCopy
							}
						}
					)
				)
		}

		case DELETE_CHART_FIELD: {
			const { chartId, fieldId } = action.payload;

			let chartData = state.get('chartData');
			let chartIndex = chartData.findIndex(data => data.id === chartId);
			let chartFieldsLength = chartData.toJS()[chartIndex].data.length;

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

export function updateChartField(payload) {
	return {
		type: UPDATE_CHART_FIELD,
		payload
	}
};