import React from 'react'

import '../styles/Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input type='text' value={this.props.userInput} onChange={this.props.onInputChange} className="form-input" />
                <button onClick={this.props.addItem} className='btn'>+</button>
            </form>
        )
    }
}

export default Form
