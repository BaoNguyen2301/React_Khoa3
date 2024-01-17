import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class LifeCycleReact extends Component {

    constructor(props){
        super(props);
        this.state = {
            number: 1
        }
    }

    //Duoc goi khi component nay dc su dung tren DOM(giao dien)
    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps');
        return null;
    }


    //Duoc goi khi setState hoac props
    shouldComponentUpdate(){
        //return true thi chay tiep cac life cycle con lai, true: chay, false: dung
        return true;
    }

    render() {
        console.log('renderParent');
        return (
            <div>
                <h1>Parent Component</h1>
                <span>Number: {this.state.number}</span>
                <button className='btn btn-success' onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>click</button>
                {this.state.number === 1 ? <ChildComponent /> : ''}
                
            </div>
        )
    }

    //Duoc goi sau render va chi goi 1 lan duy nhat(trang thai mounting)
    componentDidMount(){
        console.log('componentDidMount')
    }


    //Lan dau se khong goi, chi goi khi setState hoac thay doi props
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate')
    }
}
