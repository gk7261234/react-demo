import React from 'react';
import { Segment } from 'semantic-ui-react';

class Page1 extends React.Component{
    render() {
        return(
            <div>
                <Segment style={{ textAlign: 'center', width: '60%', margin: '10px auto' }}>
                    文章一 -- 春晓
                </Segment>
                <Segment style={{
                    textAlign: 'center',
                    margin: '10px auto'
                }}>
                    春眠不觉晓<br/>
                    处处闻啼鸟<br/>
                    夜来风雨声<br/>
                    花落知多少<br/>
                </Segment>
            </div>
        )
    }
}
export default Page1;
