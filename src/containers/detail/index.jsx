import React from 'react';

class Detail extends React.Component{
    render(){
        const { state } = this.props.location;
        return(
            <div className="detail">
                <div className="detailTo">
                    <a href='javascript:history.back();'>〈</a>
                </div>
                <div className="detailCont">
                    <dl>
                        <dt>
                            <img src={state.pic} alt=""/>
                        </dt>
                        <dd>
                            <h4>{state.name}</h4>
                            <h5>￥{state.price}</h5>
                        </dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default Detail;