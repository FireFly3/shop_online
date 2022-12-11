import React, {Component} from 'react';
import Item from "./Item";

export class Items extends Component {
    render() {
        return (
            <div>
                <main>
                    {this.props.items.map(element => (
                        <Item onShowItem={this.props.onShowItem} item={element} key={element.id}
                              onAdd={this.props.onAdd}/>
                    ))}
                </main>
            </div>
        );
    }
}

export default Items;