import React, {Component} from 'react';

import Aux from  '../../hoc/ReactAux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout  extends Component {
    
    state = {
        showSideDrawer: true
    }
    
    SideDrawerClosedhandler = () => {
        this.setState({showSideDrawer: false});
    }

    render(){
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedhandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}

export default layout;