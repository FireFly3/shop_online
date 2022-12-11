import React, {Component} from 'react';
import {RiDeleteBin2Line} from 'react-icons/ri'

class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} alt={this.props.item.img}/>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}$</b>
                <RiDeleteBin2Line className='delete' onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        );
    }
}

export default Order;