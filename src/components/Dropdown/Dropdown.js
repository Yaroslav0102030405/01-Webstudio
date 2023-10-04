import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.scss';

import { ReactComponent as MobileClose } from './../../images/mobile-menu/close_40px.svg';
import { ReactComponent as MobileMenu } from './../../images/mobile-menu/menu_40px.svg';

import { ReactComponent as Envelope } from './../../images/svg1/envelope (hover).svg';
import { ReactComponent as Smartphone } from './../../images/svg1/smartphone.svg';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className="Dropdown">
        {/* <div className={ Active ? 'Dropdown__active' : 'Dropdown__menu'}> */}
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? (
            <MobileClose className="icon-close" />
          ) : (
            <MobileMenu className="icon-menu" />
          )}
        </button>
        {this.state.visible && (
          <div className="Dropdown__menu">
            <nav className="header-nav">
              <ul className="Dropdown__top">
                <li className="menu__item current">
                  <Link to="/">Studio</Link>
                </li>
                <li className="menu__item">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="menu__item">
                  <a href="!#">Contacts</a>
                </li>
              </ul>

              <ul class="Dropdown-contacts">
                <li>
                  <a
                    className="contacts__link contacts__icon"
                    href="mailto:info@example.com"
                  >
                    <Envelope className="contacts__svg-envelope" />
                    info@example.com
                  </a>
                </li>

                <li>
                  <a
                    className="contacts__link contacts__icon"
                    href="tel:+380961111111"
                  >
                    <Smartphone className="contacts__svg" />
                    +38 096 111 11 11
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
        {/* </div> */}
      </div>
    );
  }
}

export default Dropdown;