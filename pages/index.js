import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import GlobalStyle from '../components/GlobalStyle';
import appConfig from '../config.json';
import Titulo from '../components/Titulo';
import Head from 'next/head';

function Background(props) {
    return (
        <>
            <Box
                className='container'
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary.blue[500],
                    backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply',
                    height: '100%',
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

function App(props) {
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    },
                    width: '100%',
                    maxWidth: '700px',
                    borderRadius: '5px',
                    padding: '32px',
                    margin: '16px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

export default function HomePage() {
    const username = 'CaioSimioni';

    return (
        <>
            <Head>
                <title>{appConfig.name}</title>
            </Head>
            <GlobalStyle />
            <Background>
                <App>
                    {/* Formulário */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: {
                                xs: '100%',
                                sm: '50%'
                            },
                            textAlign: 'center',
                            marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Boas vindas de volta!</Titulo>
                        <Text variant="body3" styleSheet={{
                            marginBottom: '32px',
                            color: appConfig.theme.colors.neutrals[300]
                        }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary.blue[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                            placeholder="Nome/E-Mail"
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary.blue[500],
                                mainColorLight: appConfig.theme.colors.primary.blue[400],
                                mainColorStrong: appConfig.theme.colors.primary.blue[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </App>
            </Background>

            <style jsx>{``}</style>
        </>

    );
}