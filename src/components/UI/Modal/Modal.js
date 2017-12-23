import React, {Component} from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/ReactAux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    // return true only if the next property and current property is different
    // this prevents from model from updating when not required thus increasing app performance
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {

        return(
            <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
            <div 
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Aux>
        );
    }


}
export default Modal;