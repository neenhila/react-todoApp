import React from 'react';
import '../styles/TodoItem.css'

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    editItem = (e) => {
        let e2 = e.target.parentElement;
        let total = e2.parentElement;
        let editMessage = prompt("Lütfen değiştirmek için aşağıya yazıyı girip onaylayınız.")
        total.firstChild.innerText = editMessage;
    }

    deleteItem = (e) => {
        let e2 = e.target.parentElement;
        let total = e2.parentElement;
        total.remove();
    }
    render() {
        return (
            <div className="todoBar" keyid={this.props.key}>
                <div className="todoContent">{this.props.content}</div>
                <div className='editDeleteBar'>
                    <button className="edit" id="edit" onClick={this.editItem}>Düzenle</button>
                    <button className="delete" id="delete" onClick={this.deleteItem}>Sil</button>
                </div>
            </div>
        )
    }
}

export default TodoItem
