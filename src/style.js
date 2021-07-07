import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
    header:{
        backgroundColor: '#000000',
        position: 'static',
    },
    toolBar: {
        padding: '0px',
        margin: 'auto 15% auto 15%',
        '@media (max-width: 500px)':{
            margin: 'auto 5% auto 5%'
        }
    },
    tabs: {
        color: '#cccccc',
        textDecoration: 'none',
        margin: '20px 40px 20px 0px',
        '&:hover': {
            color: "#ffffff"
        },
        '@media (max-width: 500px)':{
            margin: '20px 15px 20px 0px'
        }
    },
    table: {
        width: '70%',
        margin: '30px 15% auto 15%'
    },
    tHead:{
        '& > *':{   // target direct children of parent element
            backgroundColor: '#222222',
            color: '#ffffff',
            fontSize: '1rem'
        }
    },
    form:{
        width: '35%',
        minWidth: '25rem',
        margin: '30px auto auto',
        '& > *':{
            marginBottom: '10px'
        }
    },
    button:{
        backgroundColor:'#222222', 
        color:'#ffffff',
        width: '12rem',
        alignSelf: 'center',
        '&:hover':{
            backgroundColor: '#000000'
        }
    },
    icon:{
        color: '#222222'
    },
    notFound: {
        margin: '50px 25% auto 25%',
        width: '50%'
        
    },
})

export default useStyle;