import React from 'react';
import {Link} from "react-router-dom";
import { Segment, Menu, Image } from 'semantic-ui-react'
class Home extends React.Component{
    render() {
        return(
            <div>
                <Image rounded src={require('./img/sh_trade.png')} style={{width: '100%',height: '100px'}}/>
                <Menu>
                    <Menu.Item>
                        <Link to='/Page1/' style={{color: 'black'}}>
                            <div>点击跳转page1</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Page2/" style={{color: 'black'}}>
                            <div>点击跳转page2</div>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
export default Home;
