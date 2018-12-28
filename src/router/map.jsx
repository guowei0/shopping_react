import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

class RouteMap extends React.Component{
    render(){
        const { routes } = this.props;
        const defaultRoute = <Route key={'-1'} path='/' exact component={()=><Redirect to='/home'/>}></Route>
        return(
            <Switch>
                {
                    routes.length && routes.map((ite,ind)=>{
                        return(
                            <Route key={ind} path={ite.path} component={(config)=>{
                                const Component = ite.component;
                                const Children = ite.children === undefined ? [] : ite.children;
                                return <Component routes = { Children } {...config}/>
                            }}></Route>
                        )
                    }).concat([defaultRoute])
                }
            </Switch>
        )
    }
}

export default RouteMap;