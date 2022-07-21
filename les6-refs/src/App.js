import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import './components/Product'
import Products from './components/Product';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'apple iphone 13 promax',
          price: '2500000',
          img: 'https://vcdn-sohoa.vnecdn.net/2021/09/28/DSCF0011-1632545766-jpeg-9210-1632818972.jpg',
          status: true
        },
        {
          id: 2,
          name: 'Macbook Pro',
          price: '2500000',
          img: 'https://vcdn1-sohoa.vnecdn.net/2021/10/27/macbook-pro-2021-cnet-review-23-1635307337.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=FIheyR1HRqH-lOAwxTjM7g',
          status: true
        },
        {
          id: 3,
          name: 'Airpod',
          price: '500000',
          img: 'https://www.apple.com/v/airpods-pro/f/images/meta/og__ch3csr9zmviq_overview.png',
          status: true
        },
      ],
      isActive: true
    };
    // this.onSetState = this.onSetState.bind(this);

  }
  onSetState = () => {
    // if (this.state.isActive == true) {
    //   this.setState({
    //     isActive: false
    //   });
    // } else {
    //   this.setState({
    //     isActive: true
    //   });
    // }

    this.setState({
       isActive : !this.state.isActive
    });
  }

 

  render() {


    let elements = this.state.products.map((product, index) => {
      if (product.status) {
        return <tr key={index}>
          <td>{index}</td>
          <td>{product.name}</td>
          <td>
            <span class="label label-success">{product.price} VND</span>
          </td>
        </tr>
      }
    });


    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className='container-fluid'>
            <a className="navbar-brand" >State</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="row">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>tên sản phẩm</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {elements}
                </tbody>
              </table>
              <button type="button" className="btn btn-warning" onClick={this.onSetState} >
                Active:{this.state.isActive == true ? 'true' : 'false'}
              </button>
            </div>
          </div>
        </div>
      </div>



    );
  };
}
export default App;
