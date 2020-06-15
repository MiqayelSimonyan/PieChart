import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { chartDataSelector } from '../../selectors/pie-chart';
import { deleteChart, deleteChartField } from '../../ducks/pie-chart';

import AddField from './add-field';
import UpdateField from './update-field';

import history from '../../session-history';

import '../../assets/styles/pages/charts.scss';

const Charts = () => {
    const dispatch = useDispatch();
    let chartsData = useSelector(chartDataSelector);
    let charts = chartsData;

    useEffect(() => {
        if (!charts.length) history.push('/');
    }, [charts.length]);

    const chartFieldDelete = (chartIndex, chartId, fieldId) => {
        let confirmDelete = window.confirm('Are You Sure Delete Field?');
        if (confirmDelete) {
            dispatch(deleteChartField({ chartIndex, chartId, fieldId }));
            toast.success('Field Deleted');
        };
    };

    const chartDelete = (chartId) => {
        let confirmDelete = window.confirm('Are You Sure Delete Chart?');

        if (confirmDelete) {
            dispatch(deleteChart({ chartId }));
            toast.success('Chart Deleted');
        };
    };

    return (
        <div className="container">
            <div className="row">
                {
                    !charts.length ? null :
                        charts.map((chart, chartIndex) => {
                            const { id: chartId, data } = chart;

                            return <div className="col-md-12" key={chartId}>
                                <Link
                                    style={{ display: 'inline-block' }}
                                    className="mt-3"
                                    to={`/chart/${chartId}`}>
                                    Go To Chart
                                </Link>

                                <button
                                    className="btn btn-danger delete-chart float-right ml-3 mt-3 mb-3"
                                    onClick={() => chartDelete(chartId)}>
                                    Delete Chart
                                </button>

                                <table className="table" key={chartId}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Value</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((data, fieldIndex) => {
                                                const { id: fieldId, name, value } = data;

                                                return <tr key={fieldId}>
                                                    <td>{name}</td>
                                                    <td>{value}</td>
                                                    <td>
                                                        <UpdateField
                                                            fieldIndex={fieldIndex}
                                                            chartIndex={chartIndex}
                                                            field={data}
                                                        />
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger float-right ml-3"
                                                            onClick={() => chartFieldDelete(chartIndex, chartId, fieldId)}
                                                        >
                                                            Delete Field
                                                </button>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                                <AddField id={chartId} />
                            </div>
                        })
                }
            </div>
        </div>
    )
};

export default Charts;