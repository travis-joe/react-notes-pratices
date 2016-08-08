/**
 * Created by Administrator on 2016/8/8.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './List'
class Lists extends Component {
    constructor(props){
        super(props)
        this.state={
            key: 0,
            lists: new Map()
        }
        this.addEdit = this.addEdit.bind(this)
        this.removeList = this.removeList.bind(this)
        this.saveList = this.saveList.bind(this)
    }
    addEdit(){
        const key = ++this.state.key
        this.state.lists.set(key,'')
        this.forceUpdate()
    }
    removeList(id){
        this.state.lists.delete(id)
        this.forceUpdate()
    }
    saveList(id,val){
        this.state.lists.set(id,val)
        this.forceUpdate()
    }
    render() {
        const listDOM = [];
        for(let [key, value] of this.state.lists){
            listDOM.push(<List key={key} id={key} saveList={this.saveList}  removeList={this.removeList} value={value}/>)
        }
        return (
            <div>
                <button className="btn btn-default" onClick={this.addEdit}>Add</button>
                <ul className="list-group" >
                    {listDOM}
                </ul>
            </div>
        )
    }
}

export default Lists