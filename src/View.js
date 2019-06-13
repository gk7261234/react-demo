import React from 'react';
import {Segment, Input, Button} from 'semantic-ui-react';
class View extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        }
        this.userChange = this.userChange.bind(this);
        this.psdChange = this.psdChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    userChange(e){
        this.setState({user: e.target.value})
    }
    psdChange(e){
        this.setState({password: e.target.value})
    }
    submit(){
        this.getConnect()
    }
    getConnect(){
        let initHeaders = new Headers();
        initHeaders.append('Accept', 'application/json, text/plain, */*')
        initHeaders.append('Cache-Control', 'no-cache')
        initHeaders.append('Content-Type', 'application/json;charset=UTF-8')

        let text = {user: this.state.user, password: this.state.password};
        let send = JSON.stringify(text,null,2);
        fetch('http://127.0.0.1:8081/password', {
            method: 'POST',
            headers: initHeaders,
            body: send,
            mode: 'cors'
        }).then(res=>res.json()).then(
            data=>{
                if (data.success) window.alert("验证成功")
                else window.alert('失败')
            }
        ).catch(e => console.log("错误", e));
    }
    render() {
        return (
            <div style={{margin: '10px'}}>
                <Segment style={{textAlign: 'center'}}>
                    <h2>请登陆</h2>
                    <Input
                        id='user'
                        placeholder='用户名'
                        style={{marginBottom: '10px'}}
                        onChange={this.userChange}/><br/>
                    <Input
                        id='password'
                        placeholder='密码'
                        style={{marginBottom: '10px'}}
                        onChange={this.psdChange}/><br/>
                    <Button primary content='登陆' style={{marginBottom: '10px'}} onClick={this.submit}/>
                    <Button content='重置' style={{marginBottom: '10px'}}/>

                </Segment>

            </div>
        )
    }
}
export default View;
