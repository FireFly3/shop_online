import React, {useState} from 'react';
import {FaShoppingCart} from "react-icons/fa";

import Order from "./Order";

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (<div>
        {props.orders.map(element => (<Order key={element.id} item={element} onDelete={props.onDelete}/>))}
        <p className='summa'>Всього: {new Intl.NumberFormat().format(summa)}$</p>
    </div>)
}

const showNothing = () => {
    return <div className='empty'>
        <h2>Корзина пуста</h2>
    </div>
}

const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <div>
                <span className='logo'>House Staf</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
                                className={`shop-cart-button ${cartOpen && 'active'}`}/>

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'>

            </div>
        </header>
    );
};

export {Header};