import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

import MenuIcon from '@material-ui/icons/Menu';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CodeIcon from '@material-ui/icons/Code';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import './styles.css';

function MenuLinks({ menuStatus }) {

    return (
      <div className={menuStatus} id='menu'>
        <ul>

          <li>
            <HomeIcon />
            <Link to={ROUTES.HOME}>Home</Link>
          </li>

          <li>
            <MenuBookIcon />
            <Link to={ROUTES.PROJECTS}>Projects</Link>
          </li>
          <li>
            <CodeIcon />
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <AddIcCallIcon />
            <Link to={ROUTES.CONTACT}>Contact</Link>
          </li>
        </ul>
      </div>
    )
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this._menuToggle = this._menuToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }
  _handleDocumentClick(e) {
    if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
      this.setState({
        isOpen: false
      });
    };
  }
  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    let menuStatus = this.state.isOpen ? 'isopen' : '';

    return (
      <div ref="root" style={{ position: 'absolute', left: 0, right: 0 }}>
        <div className="menubar">
          <div className="hambclicker" onClick={this._menuToggle}></div>
          <div id="hambmenu" className={menuStatus}><span></span><span></span><span></span><span></span></div>
          <div className="title">
            <span>{this.props.title}</span>
          </div>
        </div>
        <MenuLinks menuStatus={menuStatus} />
      </div>
    )
  }
}

export default Navigation;