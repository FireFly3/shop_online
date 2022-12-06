import React from "react";
import {Footer, Header} from "./components";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    title: 'Стілець сірий',
                    img: 'stul.jpeg',
                    desc: 'lorem',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Стіл білий',
                    img: 'stol.jpeg',
                    desc: 'lorem',
                    category: 'tables',
                    price: '149.99'
                },
                {
                    id: 3,
                    title: 'Стілець чорний',
                    img: 'stul.jpeg',
                    desc: 'lorem',
                    category: 'chairs',
                    price: '79.99'
                },
                {
                    id: 4,
                    title: 'Стіл чорний',
                    img: '',
                    desc: 'lorem',
                    category: 'chairs',
                    price: '199.99'
                },
                {
                    id: 5,
                    title: 'Стілець білий',
                    img: '',
                    desc: 'lorem',
                    category: 'chairs',
                    price: '69.99'
                },
                {
                    id: 6,
                    title: 'Стіл скляний',
                    img: '',
                    desc: 'lorem',
                    category: 'chairs',
                    price: '399.99'
                },
                {
                    id: 7,
                    title: 'Stul',
                    img: '',
                    desc: 'lorem',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 8,
                    title: 'Stul',
                    img: '',
                    desc: 'lorem',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 9,
                    title: 'Stul',
                    img: '',
                    desc: 'lorem',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 10,
                    title: 'Stul',
                    img: '',
                    desc: 'lorem',
                    category: 'chairs',
                    price: '49.99'
                }
            ]
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default App;
