import React, { Component } from "react";
import "../../css/navbar-seller.css";
import { Link } from "react-router-dom";
import history from "../common/history";
import { connect } from "react-redux";
import Logout from "../../components/auth/Logout";
import { shopProfileAction } from "../../actions/shop/shopAction";
import Popup from "reactjs-popup";
import Pusher from "pusher-js";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notify: null
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    } else {
      this.props.loadProfile();
    }
  }

  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    const { shopProfile } = this.props;
    const { notify } = this.state;
    let pusher = new Pusher("0d7d902b507646ac2d5e", { cluster: "ap1" });
    pusher.subscribe("notifications").bind("order_created", (order) => {
      if (order.order_to === shopProfile._id) {
        this.setState({
          notify: order
        });
      }
    });
    return (
      <div className="navbar-seller">
        <div className="navbar-container-seller">
          <div id="logo">
            <Link to="/shop">
              <i className="fa i-seller">&#xf270;</i>
            </Link>
          </div>
          <div id="txt-seller">Seller Center</div>
          <div id="user-seller">
            <Popup
              trigger={
                <div id="user-hover">
                  <i className="fa i-seller">&#xf2bd;</i>
                  <span className="ml-2">{user.name}</span>
                </div>
              }
              on="hover"
            >
              <Logout />
            </Popup>
          </div>
          <div id="notify-seller">
            <i className="fa i-seller">&#xf0f3;</i>
            {
                notify ? (
                    <span className="badge badge-warning" id='lblNotifyCount'>
                        *
                    </span>
                ) : (
                    <span></span>
                )
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shopProfile: state.shopReducer.shop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProfile: () => dispatch(shopProfileAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
