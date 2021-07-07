import {AppBar, Toolbar} from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyle from '../style';


const NavBar = () => {
    const classes = useStyle();
    return (  
        <AppBar className={classes.header}>
            <Toolbar className={classes.toolBar}>
                <Link className={classes.tabs} style={{"fontSize": "2rem"}} to='/'>Team11</Link>
                <Link className={classes.tabs} to='/add'>Add Player</Link>
            </Toolbar>
        </AppBar>
    );
}
 
export default NavBar;