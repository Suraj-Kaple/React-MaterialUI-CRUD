import notFound from '../assets/images/PageNotFound.svg'
import useStyle from '../style';
const NotFound = () => {
    const classes=useStyle();
    return (
        <object type='image/svg+xml' data={notFound} className={classes.notFound} />
    );
}
 
export default NotFound;