// import { add, fancyLog } from './my-module';
// import {mult} from './sub-folder/myOtherModule';
// import foo from './defaultDemo';

// fancyLog(foo('hello world'));

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberLister  from './NumberLister';

// class MyOtherComponent extends React.Component {

//     render() {
//         return <div>
//             <h2>From my other component {this.props.text}</h2>
//         </div>
//     }
// }

// class MyFirstComponent extends React.Component {

//     state = {
//         number: 0
//     }

//     constructor() {
//         super();
//         setInterval(() => {
//             this.setState({number: this.state.number + 1}); //this.state.number++;
//         }, 1000);

//     }

//     render() {
//         return( 
//             <>
//                 <MyOtherComponent text={this.state.number} />
//                 <h1>Hello World!!! {this.state.number}</h1>
//                 <MyOtherComponent text={this.state.number * 2} />
//             </>

//         )
//    }
// }

// class ButtonDemo extends React.Component {

//     state = {
//         number: 0,
//         text: ''
//     }

//     onButtonClick = () => {
//         this.setState({ number: this.state.number + 1 });
//     }

//     onTextboxChange = (e) => {
//         this.setState({ text: e.target.value });
//     }

//     onReverseClick = () => {
//         const reversed = this.state.text.split("").reverse().join("");
//         this.setState({ text: reversed });
//     }


//     render() {
//         return <div className='container mt-5' >
//             <div className='row'>
//                 <div className='col-md-6 offset-md-3'>
//                     <button onClick={this.onButtonClick} className='btn btn-primary w-100'>Click me!!</button>
//                     <h1>{this.state.number}</h1>
//                 </div>
//                 <div className='col-md-6 offset-md-3'>
//                     <input type='text' value={this.state.text} onChange={this.onTextboxChange} className='form-control' placeholder='Type stuff...' />
//                     <h1>{this.state.text}</h1>
//                     <button className='btn btn-dark' onClick={this.onReverseClick}>Reverse</button>
//                 </div>
//             </div>
//         </div>
//     }
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <NumberLister />
)