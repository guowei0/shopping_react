import React from 'react';

import axios from 'axios';

import Left from './left';
import Right from './right';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            homeleft: [],
            homeright: [],
            leftnum: 0
        }
        this.changeTab = this.changeTab.bind(this);
    }
    componentDidMount(){
        const { leftnum } = this.state;
        axios.get('/api/typelist').then(res=>{
            this.setState({
                homeleft: res.data.types
            },()=>{
                this.changeTab(leftnum)
            })
        })
    }
    changeTab(id){
        axios.get('/api/typelist').then(res=>{
            let demp = res.data.types;
            demp.forEach(ite=>{
                if(ite.id===id){
                    this.setState({
                        homeright: ite
                    })
                }
            })
        })
    }
    render(){
        const { homeleft, homeright } = this.state;
        return(
            <div className="home">
                <Left homeleft={homeleft} changeTab={this.changeTab}/>
                <Right homeright={homeright}/>
            </div>
        )
    }
}

export default Home;