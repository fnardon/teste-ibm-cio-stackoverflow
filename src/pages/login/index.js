import React from 'react';
import { AreaLogin } from './styled';
import { BtnDefaultIcons, BtnDefault } from '../../components/styled'
import FacebookIcon from '@material-ui/icons/Facebook';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import GTranslateIcon from '@material-ui/icons/GTranslate';


export default () => {
    return (
        <div>
            <BrowserRouter>

                <Switch>
                    <Route exact path='/registrar'>
                        <AreaLogin>
                            <h1 className='organize'>
                                <Link to='/'><ArrowBackIosIcon /></Link>
                                Crie sua conta</h1>
                            <p>crie sua conta, é gratis!</p>

                            <form>

                                <div className='form-imput'>
                                    <label>E-mail</label>
                                    <input type="email" />

                                </div>

                                <div className='form-imput'>
                                    <label>Senha</label>
                                    <input type="password" />

                                </div>


                                <BtnDefault>Comece Agora!</BtnDefault>

                                <div className='footerLogin'>
                                    Não tem uma conta?
                                    <Link to="/">Fazer login</Link>
                                </div>


                            </form>

                        </AreaLogin>

                    </Route>

                    <Route exact path='*'>
                        <AreaLogin>
                            <h1>Faça login em sua conta</h1>
                            <BtnDefaultIcons>
                                <FacebookIcon />
                                <div className='align-center'>
                                    Fazer Login com o Facebook
                                </div>
                            </BtnDefaultIcons>

                            <BtnDefaultIcons >
                                <GTranslateIcon />
                                <div className='align-center'>
                                    Fazer Login com o Google
                                </div>
                            </BtnDefaultIcons>

                            <p>OU</p>

                            <form>

                                <div className='form-imput'>
                                    <label>E-mail</label>
                                    <input type="email" />

                                </div>

                                <div className='form-imput'>
                                    <label>Senha</label>
                                    <input type="password" />

                                </div>


                                <BtnDefault>Entrar</BtnDefault>

                                <div className='footerLogin'>
                                    Não tem uma conta?
                                    <Link to="/registrar">Registre-se</Link>
                                </div>


                            </form>

                        </AreaLogin>
                    </Route>
                </Switch>

            </BrowserRouter>
        </div>
    );

}



