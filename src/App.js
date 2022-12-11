import React from "react";
import {Categories, Footer, Header, Items, ShowFullItem} from "./components";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Стілець сірий',
                    img: 'chair.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, saepe?',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Стіл білий',
                    img: 'table 2.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, saepe?',
                    category: 'tables',
                    price: '149.99'
                },
                {
                    id: 3,
                    title: 'Стілець чорний',
                    img: 'chair black2.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, saepe?',
                    category: 'chairs',
                    price: '79.99'
                },
                {
                    id: 4,
                    title: 'Стіл чорний',
                    img: 'table black 11.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, saepe?',
                    category: 'tables',
                    price: '199.99'
                },
                {
                    id: 5,
                    title: 'Стілець білий',
                    img: 'chair white11.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, saepe?',
                    category: 'chairs',
                    price: '69.99'
                },
                {
                    id: 6,
                    title: 'Стіл скляний',
                    img: 'table glass11.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, saepe?',
                    category: 'tables',
                    price: '399.99'
                },
                {
                    id: 7,
                    title: 'Диван',
                    img: 'franko1.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, saepe?',
                    category: 'sofa',
                    price: '1599.99'
                },
                {
                    id: 8,
                    title: 'Лампа',
                    img: 'Table-Lamp-Hiding-Bunny.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, saepe?',
                    category: 'light',
                    price: '29.99'
                },
                {
                    id: 9,
                    title: 'Ліжко',
                    img: 'Bed3.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, saepe?',
                    category: 'sofa',
                    price: '1899.99'
                },
                {
                    id: 10,
                    title: 'Крісло',
                    img: 'Сhair-charles-ray.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, saepe?',
                    category: 'chairs',
                    price: '2599.99'
                }
            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.choseCategory = this.choseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }

    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories choseCategory={this.choseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
                {this.state.showFullItem &&
                    <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                <Footer/>
            </div>
        );
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    choseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(element => element.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(element => {
            if (element.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
