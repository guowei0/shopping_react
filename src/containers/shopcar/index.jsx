import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as listReducers from 'store/actions';

class Shopcar extends React.Component{
    render(){
        const { Types, checkall, checkAll, checkone, add, min, total, summer } = this.props;
        return(
            <div className="shopcar">
                <div className="checkall">
                    <input type="checkbox"  checked={checkall} onChange={()=>{
                        checkAll(checkall,Types)
                    }}/> 全选
                    <Link to="/home">进入首页</Link>
                </div>
                <div className="shoplist">
                    {
                        Types.length && Types.map((ite,ind)=>{
                            return (
                                    <div key={ind} className="shopcont">
                                        <input type="checkbox" checked={ite.check} onChange={()=>{
                                            checkone(ind, Types, checkall)
                                        }}/>
                                        <dl>
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
                                                <div className="computed">
                                                    <span className="min" onClick={()=>{
                                                        min(ind, Types)
                                                    }}>-</span>
                                                    <span className="count">{ite.count}</span>
                                                    <span className="add" onClick={()=>{
                                                        add(ind, Types)
                                                    }}>+</span>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                            )
                        })
                    }
                </div>
                <div className="number">
                    总数：{total} &nbsp; 总价：￥{summer}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.listReducers
}

const mapDispatchToProps = (dispatch) => {
    return {
        add(ind, Types){
            Types[ind].count++;
            let tot = 0;
            let sum = 0;
            Types.forEach(ite=>{
                if(ite.check){
                    tot += ite.count;
                    sum += tot * ite.price
                }
            })
            dispatch(listReducers.total(tot))
            dispatch(listReducers.summer(sum))
            dispatch(listReducers.add(Types))
        },
        min(ind, Types){
            if(Types[ind].count<1)return;
            Types[ind].count--;
            let tot = 0;
            let sum = 0;
            Types.forEach(ite=>{
                if(ite.check){
                    tot += ite.count;
                    sum += tot * ite.price
                }
            })
            dispatch(listReducers.total(tot))
            dispatch(listReducers.summer(sum))
            dispatch(listReducers.add(Types))
        },
        checkAll(checkall,Types){
            Types.map(ite=>{
                return ite.check = !checkall
            })
            checkall = !checkall;

            let tot = 0;
            let sum = 0;
            Types.forEach(ite=>{
                if(ite.check){
                    tot += ite.count;
                    sum += tot * ite.price
                }
            })
            dispatch(listReducers.total(tot))
            dispatch(listReducers.summer(sum))
            dispatch({type:'CHECKALL',payload:checkall})
        },
        checkone(ind, Types, checkall){
            Types[ind].check = !Types[ind].check;

            let flag = Types.every(v=>{
                return v.check === true
            })
            if(flag){
                checkall = true;
            }else{
                checkall = false;
            }

            let tot = 0;
            let sum = 0;
            Types.forEach(ite=>{
                if(ite.check){
                    tot += ite.count;
                    sum += tot * ite.price
                }
            })
            dispatch(listReducers.total(tot))
            dispatch(listReducers.summer(sum))
            dispatch({type:'CHECKALL', payload: checkall})
            dispatch(listReducers.checkone(Types))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopcar);