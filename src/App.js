import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from '../src/store'
import { Provider } from 'react-redux'

import Login from './view/login'
import NovoUsuario from './view/usuario-novo'
import Home from './view/home'
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha'
import EventoCadastro from './view/evento-cadastro';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/novousuario' component={NovoUsuario} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />
          <Route exact path='/eventocadastro' component={EventoCadastro} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
