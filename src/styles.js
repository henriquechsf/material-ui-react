import { makeStyles } from '@material-ui/core/styles';

// adiciona estilo personalizado - evita inline style 
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    }
}));

export default useStyles;