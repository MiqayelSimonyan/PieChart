import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

<<<<<<< HEAD
import { chartDataSelector } from '../../selectors/pie-chart';
import { deleteChart, deleteChartField } from '../../ducks/pie-chart';

import UpdateField from './update-field';

import history from '../../session-history';

import '../../assets/styles/charts.scss';
=======
import { chartDataSelector } from 'selectors/pie-chart';
import { deleteChart, deleteChartField } from 'ducks/pie-chart';
import { Storage } from 'utils/storage';

import history from 'session-history';

import 'assets/styles/charts.scss';
import Popup from 'components/common/popup';
>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757

const Charts = () => {
    const dispatch = useDispatch();
    let chartsData = useSelector(chartDataSelector);
<<<<<<< HEAD
    let charts = chartsData;

    useEffect(() => {
        if (!charts.length) history.push('/');
    }, [charts.length]);
=======
    let charts = chartsData /*chartsData.length ? chartsData : JSON.parse(Storage.getToken('chartData'))*/;

    useEffect(() => {
        if (!charts?.length) history.push('/');
    }, [chartsData]);
>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757

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

<<<<<<< HEAD
=======
    const chartUpdate = (chartId) => {

    };

>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757
    return (
        <div className="container">
            <div className="row">
                {
<<<<<<< HEAD
                    !charts.length ? null :
=======
                    !charts?.length ? null :
>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757
                    charts.map(chart => {
                        const { id: chartId, data } = chart;

                        return <div className="col-md-12" key={chartId}>
                            <Link            
                                style={{ display: 'inline-block' }}
                                className="mt-3"          
                                to={`/chart/${chartId}`}>
<<<<<<< HEAD
                                Go To Chart
                            </Link>                            

                            <button
                                className="btn btn-danger delete-chart float-right ml-3 mt-3 mb-3"
                                onClick={() => chartDelete(chartId)}>
                                Delete Chart
                            </button>
                            
=======
                                    Go To Chart
                            </Link>
                            <Popup />

                            <button className="btn btn-danger delete-chart float-right ml-3 mt-3 mb-3" onClick={() => chartDelete(chartId)}>Delete Chart</button>
                            <button className="btn btn-primary update-chart float-right ml-3 mt-3 mb-3" onClick={() => chartUpdate(chartId)}>Update Chart</button>
>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757
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
<<<<<<< HEAD
                                                <UpdateField chartId={chartId} field={data} />
=======
                                                <button className="btn btn-primary float-right">Update Field</button>
>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757
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