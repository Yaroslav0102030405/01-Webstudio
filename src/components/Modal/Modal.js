import React, {Component} from 'react'
import './Modal.scss'

export default class Modal extends Component {
    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div className="backdrop">
                <div className="form">{this.props.children}</div>
            </div>
        )
    }
}