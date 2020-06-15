import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getChartByIdSelector } from '../../selectors/pie-chart';
import history from '../../session-history'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Chart = (props) => {
    const chartData = useSelector(getChartByIdSelector(props.match.params.id));

    useEffect(() => {
        let chart = am4core.create("chartdiv", am4charts.PieChart3D);
        let data = chartData;

        chart.data = data.data;
        if (!data) history.push('/');
        chart.logo.disabled = true;

        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "value";
        series.dataFields.category = "name";
    });

    return (
        <div className="container">
            <div className="row">
                <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
            </div>
        </div>
    );
};

export default Chart;