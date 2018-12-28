import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


class Right extends React.Component{
    render(){
        const { datatype } = this.props.homeright;
        const { types, Types } = this.props;
        return(
            <div className="right">
                <div className="rightTo">
                    <Link to="/shopcar">进入购物车</Link>
                </div>
                {
                    datatype && datatype.map((ite,ind)=>{
                        return(
                                <dl key={ind}>
                                    <dt>
                                        <Link to={{
                                            pathname:"/detail",
                                            state: ite
                                        }}>
                                            <img src={ite.pic} alt=""></img>
                                        </Link>
                                    </dt>
                                    <dd>
                                        <Link to={{
                                            pathname:"/detail",
                                            state: ite
                                        }}>
                                            <h4>{ite.name}</h4>
                                        </Link>
                                        <h5>￥{ite.price}</h5>
                                        <span onClick={()=>{
                                            types(ite, Types)
                                        }}>加入购物车</span>
                                    </dd>
                                </dl>
                            
                        )
                    })
                }
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return state.listReducers
}

const mapDispatchToProps = (dispatch) => {
    return {
        types(product, Types){
            let demp = Types.filter(ite=>{
                if(ite.name===product.name){
                    return ite;
                }
                return '';
            })
            if(demp.length){
                demp.forEach(ite=>{
                    ite.count++
                })
            }else{
                Types.push({...product,count:1})
            }
            dispatch({type:'TYPES',payload:Types})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Right);