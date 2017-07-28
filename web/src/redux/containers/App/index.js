/**
*APP组件，整个应用顶级路由

这是整个APP的顶层路由页面，所有的路由都会加载这个页面组件，然后根据路由来匹配this.props.children子页面路由


**/

import React,{Component, PropTypes} from 'react'
import Myitem from './components/Myitem'

import Navigation,{Item, Group} from 'qnui/lib/navigation';
import Icon from 'qnui/lib/icon';
import Menu from 'qnui/lib/menu';
import './app.css'




/**
<li> <IndexLink to="/dist/" activeStyle={{color:'red'}}>Home</IndexLink> </li>-->

**/
var App = React.createClass({
    getInitialState(){
        return {
            // nav_active : "navigation_min"
            nav_active : "navigation_max"
        }
    },
    handleChange(e){//鼠标移入移出
        //this.setState({nav_active:e});

    },
    handleShow(c){
        return c == 'navigation_min'?(''):(
            <span style={{"marginLeft":"3px"}}>电商套件</span>
        );
    },
    componentDidMount(){
        //setTimeout(()=>{this.setState({nav_active:'navigation_min'});},500);
    },

    render(){
        var active = this.state.nav_active;
        let header = this.handleShow(active);
        return(
            <div id="container">

                <div id="navigation"  className={active} >
                    <Navigation
                     style={{backgroundColor:"white",border:"0px"}}
                     type="tree"
                     activeDirection="right"
                     >
                     <li className="qn-navigation-vertical">
                       <img style={{width: "24px", verticalAlign: "middle"}} src="image/ebs_log.png"/>
                       {header}
                     </li>
                     </Navigation>
                    <Navigation
                     style={{height:"calc(100% - 52px)",backgroundColor:"white",border:"0px",overflowY: "auto"}}
                     type="tree"
                     activeDirection="right"
                     >

                        <Myitem
                            kind = {active}
                            itemId="Trade"
                            icon="form"
                            link="/dist"
                            text="订单管理"
                        >
                          <Navigation>
                              <Myitem
                                  itemId="Trade"
                                  kind = {active}
                                  link="/dist/dsd"
                                  text="待审单"
                                  ></Myitem>
                              <Myitem
                                  itemId="Trade"
                                  kind = {active}
                                  link="/dist/ycd"
                                  text="异常单"
                                  ></Myitem>
                              <Myitem
                                  itemId="Trade"
                                  kind = {active}
                                  link="/dist/waitPrint"
                                  text="订单打印"
                              ></Myitem>
                              <Myitem
                                  itemId="Trade"
                                  kind = {active}
                                  link="/dist/SweepCodeCheckSend"
                                  text="扫码验货"
                              ></Myitem>
                               <Myitem
                                  itemId="Trade"
                                  kind = {active}
                                  link="/dist/waitWeigh"
                                  text="称重发货"
                              ></Myitem>
                              <Myitem
                                  itemId="Trade"
                                  kind = {active}
                                  link="/dist/SendFail"
                                  text="发货失败"
                              ></Myitem>
                              <Myitem
                                  itemId="Trade"
                                  kind = {active}
                                  link="/dist/WaitPay"
                                  text="待付款"
                              ></Myitem>
                              <Myitem
                                  itemId="Trade"
                                  kind = {active}
                                  link="/dist/hasSend"
                                  text="已发货"
                              ></Myitem>
                          </Navigation>
                        </Myitem>
                        <Myitem
                            itemId="Search"
                            kind = {active}
                            icon="search"
                            link="/dist/orderSearch"
                            text="订单查询"
                        ></Myitem>
                        <Myitem
                            kind = {active}
                            itemId="refund"
                            icon="tuikuan"
                            link="/dist/Cancel"
                            text="售后服务"
                        >
                            <Navigation>
                                <Myitem
                                    itemId="refund"
                                    kind = {active}
                                    link="/dist/aftersale"
                                    text="售后列表"
                                    >
                                </Myitem>
                                <Myitem
                                    itemId="refund"
                                    kind = {active}
                                    link="/dist/refundstorage"
                                    text="退货入库"
                                    >
                                </Myitem>
                            </Navigation>
                        </Myitem>
                        <Myitem
                            kind = {active}
                            itemId="Box"
                            icon="cangku"
                            link="/dist/Box"
                            text="库存盘库"
                        >
                            <Navigation>
                                <Myitem
                                    itemId="Box"
                                    kind = {active}
                                    link="/dist/stockControl"
                                    text="库存管理"
                                ></Myitem>
                                <Myitem
                                itemId="Box"
                                kind = {active}
                                link="/dist/stockCheck"
                                text="库存盘点"
                                ></Myitem>
                            </Navigation>
                        </Myitem>
                        <Myitem
                            kind = {active}
                            itemId="Item"
                            icon="yifu"
                            link="/dist/itemManager"
                            text="商品运营"
                        >
                        <Navigation>
                              <Myitem
                                  itemId="Item"
                                  kind = {active}
                                  link="/dist/itemList"
                                  text="商品列表"
                                  ></Myitem>
                          </Navigation>
                        </Myitem>
                        <Myitem
                            kind = {active}
                            itemId="Money"
                            icon="dollar"
                            link="/dist/Trade"
                            text="财务工具"
                        >
                            <Navigation>
                                <Myitem
                                    itemId="Money"
                                    kind = {active}
                                    link="/dist/DeliveryTrade"
                                    text="快递对账"
                                ></Myitem>
                            </Navigation>
                        </Myitem>
                        <Myitem
                            kind = {active}
                            itemId="Setting"
                            icon="set"
                            text="设置">
                            <Navigation>
                                <Myitem itemId="Setting" kind = {active} link="/dist/InitSet" text="初始化设置" ></Myitem>
                                <Myitem itemId="Setting" kind = {active} link="/dist/PrintModal" text="模版设置" ></Myitem>
                                <Myitem itemId="Setting" kind = {active} link="/dist/OtherSet" text="其他设置" ></Myitem>
                                <Myitem itemId="Setting" kind = {active} link="/dist/SetLogs" text="设置日志" ></Myitem>
                            </Navigation>
                        </Myitem>
                    </Navigation>
                </div>
                <div id="module_data" >
                    <div id="initSet" >
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
})
export default App
