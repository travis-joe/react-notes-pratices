/**
 * Created by Administrator on 2016/8/8.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-default">Add</button>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span>6</span>
                        <input className="item-edit" value=""/>
                        <a href="#" className="pull-right fa fa-floppy-o fa-lg"></a>
                        <a href="#" className="pull-right fa fa-remove fa-lg"></a>
                    </li>

                    <li className="list-group-item">
                        <span >asdasdasd</span>
                        <span> </span>
                        <a href="#" className="pull-right fa fa-edit fa-lg"></a>
                        <a href="#" className="pull-right fa fa-remove fa-lg"></a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default List