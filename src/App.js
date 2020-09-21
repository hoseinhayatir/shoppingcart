import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import './components/Products.css';
import Cart from './components/Cart'
import './components/Cart.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  componentWillMount() {
    // fetch("http://localhost:8000/products").then(res => res.json)
    //   .then(data => this.setState({
    //     products: data
    //   }))

      fetch('http://localhost:8000/products')
      .then((response) => response.json())
      .then((responseJson) => this.setState({
        products: responseJson
      }))
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-4">
            <Cart />
          </div>
          <div className="col-md-8">
            <Products products={this.state.products} />
          </div>
       
        </div>
      </div>
    )
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
