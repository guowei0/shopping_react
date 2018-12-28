import React from 'react';

class Left extends React.Component{
    constructor(props){
        super(props);
        this.state={
            leftnum: 0
        }
    }
    render(){
        const { homeleft, changeTab } = this.props;
        const { leftnum } = this.state;
        return(
            <div className="left">
                {
                    homeleft.length && homeleft.map((ite,ind)=>{
                        return(
                            <span key={ind} onClick={()=>{
                                changeTab(ind)
                                this.setState({
                                    leftnum: ind
                                })
                            }} className={ leftnum === ind ? 'act' : '' }>{ite.name}</span>
                        )
                    })
                }
            </div>
        )
    }
} 

export default Left;