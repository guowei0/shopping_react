import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import RouteMap from './map';
import RouterConfig from './routes';

class RouterView extends React.Component{
    render(){
        const { routes } = this.props;
        return(
            <BrowserRouter>
                <RouteMap routes = { routes ? routes : RouterConfig }/>
            </BrowserRouter>
        )
    }
}

export default RouterView;