import React from 'react';
import {Segment} from "semantic-ui-react";
class Page2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myText: '',
        }
    }
    getData(){
        fetch('http://127.0.0.1:8081', {
            method: 'GET',
        }).then(res=>res.text()).then(
            data=>{
                this.setState({myText:data})
            }
        )
    }
    componentWillMount() {
        this.getData();
    }

    render() {
        return(
            <div>
                <div>
                    <Segment style={{ textAlign: 'center', width: '60%', margin: '10px auto' }}>
                        文章二 -- {this.state.myText}
                    </Segment>
                    <Segment style={{
                        textAlign: 'center',
                        margin: '10px auto'
                    }}>
                        鹅鹅鹅<br/>
                        曲项向天歌<br/>
                        拔毛浮绿水<br/>
                        红掌拨清波<br/>
                    </Segment>
                </div>
            </div>
        )
    }
}
export default Page2;
