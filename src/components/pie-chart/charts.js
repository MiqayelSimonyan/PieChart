import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { chartDataSelector } from 'selectors/pie-chart';
import { deleteChart, deleteChartField } from 'ducks/pie-chart';
import { Storage } from 'utils/storage';

import history from 'session-history';

import 'assets/styles/charts.scss';
import Popup from 'components/common/popup';

const Charts = () => {
    const dispatch = useDispatch();
    let chartsData = useSelector(chartDataSelector);
    let charts = chartsData /*chartsData.length ? chartsData : JSON.parse(Storage.getToken('chartData'))*/;

    useEffect(() => {
        if (!charts?.length) history.push('/');
    }, [chartsData]);

    const chartFieldDelete = (chartId, fieldId) => {        
        let confirmDelete = window.confirm('Are You Sure Delete Field?');
        if (confirmDelete) {
            dispatch(deleteChartField({ chartId, fieldId }));
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

    const chartUpdate = (chartId) => {

    };

    return (
        <div className="container">
            <div className="row">
                {
                    !charts?.length ? null :
                    charts.map(chart => {
                        const { id: chartId, data } = chart;

                        return <div className="col-md-12" key={chartId}>
                            <Link            
                                style={{ display: 'inline-block' }}
                                className="mt-3"          
                                to={`/chart/${chartId}`}>
                                    Go To Chart
                            </Link>
                            <Popup />

                            <button className="btn btn-danger delete-chart float-right ml-3 mt-3 mb-3" onClick={() => chartDelete(chartId)}>Delete Chart</button>
                            <button className="btn btn-primary update-chart float-right ml-3 mt-3 mb-3" onClick={() => chartUpdate(chartId)}>Update Chart</button>
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
                                    data.map(data => {
                                        const { id: fieldId, name, value } = data;

                                        return <tr key={fieldId}>
                                            <td>{name}</td>
                                            <td>{value}</td>                                            
                                            <td>
                                                <button className="btn btn-primary float-right">Update Field</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger float-right ml-3" onClick={() => chartFieldDelete(chartId, fieldId)}>Delete Field</button>
                                            </td>
                                        </tr>
                                    })   
                                    }
                                </tbody>                                  
                            </table>
                        </div>
                    })
                }
            </div>
        </div>
    )
};

export default Charts;