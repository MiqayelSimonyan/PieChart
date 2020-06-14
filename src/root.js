import React from 'react';
import { Route, Switch } from 'react-router'

<<<<<<< HEAD
import PageNotFound from './components/page-not-found';
import PieChart from './components/pie-chart';
import Charts from './components/pie-chart/charts';
import Chart from './components/pie-chart/chart';

import Header from './components/common/header';
=======
import PageNotFound from 'components/page-not-found';
import PieChart from 'components/pie-chart';
import Charts from 'components/pie-chart/charts';
import Chart from 'components/pie-chart/chart';

import Header from 'components/common/header';
>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757

const Root = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={PieChart} />
                <Route path="/charts" exact={true} component={Charts} />
                <Route path="/chart/:id" exact={true} component={Chart} />
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </>
    )
}

export default Root;