import React from 'react';

class NumberDisplay extends React.Component {
    getContent = () => {
        if (!this.props.numbers.length) {
            return <h1>Nothing to display....</h1>
        }
        return this.props.numbers.map(n => <li className='list-group-item'>
            <h2 className={this.getClassName(n.num)}>{n.num}</h2>
        </li>)
    }

    getMultiContent = () => {
        return [<h1>HEllo</h1>, <h1>Goodbye</h1>];
    }

    getClassName = number => {
        return number > 100 ? 'text-danger' : '';
    }



    render() {
        return <ul className='list-group'>
            {this.getContent()}
        </ul>
    }
}

export default NumberDisplay;