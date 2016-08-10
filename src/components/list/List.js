/**
 * Created by apple on 8/8/16.
 */
import React, {Component} from 'react';

export default class List extends Component {
    constructor(props){
        super(props)
        this.remove = this.remove.bind(this)
        this.saveHandler = this.saveHandler.bind(this)
        this.edit = this.edit.bind(this)
        this.state ={
            isEdit:true
        }
    }
    remove(){
        this.props.removeList(this.props.id)
    }
    saveHandler(){
        this.setState({isEdit:false})
        this.props.saveList(this.props.id,this.refs.inputText.value)
    }
    edit(){
        this.setState({isEdit:true})
    }
    render() {
        return (
            this.state.isEdit?
            <li className="list-group-item">
                <span>{this.props.id}</span>
                <input className="item-edit"  ref="inputText" defaultValue={this.props.value} />
                <a href="#" className="pull-right fa fa-floppy-o fa-lg" onClick={this.saveHandler}></a>
                <a href="#" className="pull-right fa fa-remove fa-lg" onClick={this.remove}></a>
            </li>:
                <li className="list-group-item">
                    <span>{this.props.id}</span>
                    <span>{this.props.value}</span>
                    <a href="#" className="pull-right fa fa-edit fa-lg" onClick={this.edit}></a>
                    <a href="#" className="pull-right fa fa-remove fa-lg" onClick={this.remove}></a>
                </li>
        )
    }
}