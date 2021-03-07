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

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    // armazena o estilo pra poder ser usado na div
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
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

                        <div className={classes.buttons}>
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

                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>

                        {card.map(() => (

                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image='https://source.unsplash.com/random'
                                        title='Image title'
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant='h3'>
                                            Heading
                                </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste nihil voluptatum eius possimus? Quidem assumenda minus nulla nisi! Ipsum dolorem corrupti velit eius fuga blanditiis iste nostrum reiciendis facilis!
                                </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>View</Button>
                                        <Button size='small' color='primary'>Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        ))}

                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    Footer description
                </Typography>
            </footer>
        </>
    )
}

export default App;
