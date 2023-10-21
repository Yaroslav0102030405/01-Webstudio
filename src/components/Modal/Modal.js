import React, { Component} from 'react';

import './Modal.scss';
import * as ReactDOM from 'react-dom';

export default class Modal extends Component {
  // const [visible, setState] = useState(true)
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown )
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
    };
    
    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

  render () {
    return ReactDOM.createPortal(
      <div className="backdrop" onClick={this.propshandleBackdropClick}>
        <div className="form">{this.props.children}</div>
      </div>,
      document.getElementById('root'),
    );
      
  
 
    
  }
}
