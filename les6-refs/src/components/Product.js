import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { Component } from "react";

class Products extends Component {
    // constructor(props){
    //     super(props);
    //     // this.onBuyProduct=this.onBuyProduct.bind(this);
    // }

    // onBuyProduct(){
    //   alert(this.props.name+'-'+this.props.price);
    // }

     onBuyProduct=()=>{
      alert(this.props.name+'-'+this.props.price);
    }
    render() {
       
        return (

            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img alt={this.props.name} src={this.props.img} />
                        <div className="caption">
                            <h3>{this.props.name}</h3>
                            <p>
                                {this.props.price}
                            </p>
                            <p>
                                <a className="btn btn-primary" onClick={ this.onBuyProduct}>
                                   Mua ngay
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}
export default Products;