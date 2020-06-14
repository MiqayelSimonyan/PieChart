import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { chartDataSelector } from '../../selectors/pie-chart';

import '../../assets/styles/header.scss';

const Navigation = () => {
    const chartData = useSelector(chartDataSelector);

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <NavLink exact activeClassName="navigation-active" to="/">Home Page</NavLink>           
            <NavLink
                className="ml-3"
                activeClassName="navigation-active"
                to="/charts"
                onClick={(event) => !chartData.length && event.preventDefault()}
                style={{ cursor: !chartData.length ? 'no-drop' : 'pointer', opacity: !chartData.length ? 0.5 : 1  }}>
                Charts
            </NavLink>
            
        </nav>
    );
};

export default Navigation;