import React from 'react';

import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Button
} from '@material-ui/core';

import { PhotoCamera } from '@material-ui/icons';

import useStyles from './styles';

const App = () => {
    // armazena o estilo pra poder ser usado na div
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant='h6'>
                        Álbum de fotografias
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Álbum de fotos
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Ola a todos. Este é um álbum de fotos utilizando Material UI com React.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        Minhas fotos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Minhas fotos
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App;
