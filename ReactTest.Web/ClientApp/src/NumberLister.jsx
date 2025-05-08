import React from 'react';
import NumberForm from './NumberForm'
import NumberDisplay from './NumberDisplay';

class NumberLister extends React.Component {

    state = {
        currentNumber: '',
        numbers: []
    }

    onNumberChange = e => {
        this.setState({ currentNumber: e.target.value })
    }

    onClearClick = () => {
        this.setState({ currentNumber: '', numbers: [] });
    }

    onAddClick = () => {
        const copy = [...this.state.numbers];
        copy.push({num: this.state.currentNumber});
        this.setState({ numbers: copy, currentNumber: '' });
    }

    render() {
        return (
            <div className='container mt-5'>
                <NumberForm onNumberChange={this.onNumberChange}
                    onClearClick={this.onClearClick}
                    currentNumber={this.state.currentNumber}
                    onAddClick={this.onAddClick} />
                <NumberDisplay numbers={this.state.numbers} />
            </div>
        )
    }
}

export default NumberLister;