// import { all, takeEvery } from 'redux-saga/effects';
import { Map, List, updateIn } from 'immutable';

export const CREATE_CHART_DATA = 'CREATE_CHART_DATA';
export const DELETE_CHART = 'DELETE_CHART';
export const DELETE_CHART_FIELD = 'DELETE_CHART_FIELD';

const initialState = {
	chartData: List.of(
		
	)
};

export const moduleName = 'pieChart';

const initialStateMap = Map(initialState);

export default function reducer(state = initialStateMap, action) {
	switch (action.type) {
		case CREATE_CHART_DATA:
			let chartData = state.get('chartData');
			let chartIndex = chartData.findIndex(data => data.id == action.payload?.id);

			return state
				.set(
						'chartData', chartIndex > -1
					?
						chartData.update(
							chartIndex,
							item => {
								return { id: item?.id, data: [...item?.data, action.payload?.data] }
							}
						)
					:
						List.of(...state.get('chartData'), { id: action.payload?.id, data: [action.payload?.data] })
				)

		case DELETE_CHART:
			return state
				.set(
					'chartData',
					List.of(
						...state.get('chartData').filter(chart => {
							return chart.id != action.payload?.chartId;
						})
					)
				)

		case DELETE_CHART_FIELD:
			let index = state.get('chartData').findIndex(data => data.id == action.payload?.chartId);
			let chartFieldsLength = state.get('chartData').toJS()[index].data.length;

			return state
				.set(
						'chartData', index > -1
					?
						chartFieldsLength < 2 ?
							List.of(
								...state.get('chartData').filter(chart => {
									return chart.id != action.payload?.chartId;
								})
							)
						:
						state.get('chartData').update(
							index,
							item => {
								return { id: item?.id, data: item?.data.filter(field => field.id != action.payload?.fieldId ) }
							}
						)
					:
						state.get('chartData')
				)
		default:
			return state;
	}
};

/* actions */
export function createChartData(payload) {
	return {
		type: CREATE_CHART_DATA,
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

/* saga */
/*
export const createAllTilesSaga = function* (action) {
	const { firstName, lastName } = action.payload;

	try {
		// if (user.data && !user.data.success) throw user.data.data;
   } catch (error) {
		// if (error)
	}
}
*/

/*
export const saga = function* () {
	yield all([
		takeEvery(CREATE_ALL_TILES_REQUEST, createAllTilesSaga)
	]);
}
*/