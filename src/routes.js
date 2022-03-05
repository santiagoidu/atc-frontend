import React from "react";

import { BrowserRouter, Switch, Route } from  "react-router-dom"

import Dashboard from "./pages/admin/dashboard";
import Produtos from "./pages/admin/produtos";
import ProdutosEditar from "./pages/admin/produtos/produtos.editar"
import ProdutosCadastrar from "./pages/admin/produtos/produtos.cadastrar";

import Touch from "./pages/admin/produtos/touch";
import Bateria from "./pages/admin/produtos/bateria";
import Camera from "./pages/admin/produtos/camera";
import Flex from "./pages/admin/produtos/flex";

import UsuariosListagem from "./pages/admin/usuarios";
import UsuarioEditar from "./pages/admin/usuarios/usuario.editar";
import UsuarioCadastrar from "./pages/admin/usuarios/usuario.cadastrar";

import Administador from "./pages/admin/administrador";

export default function Rotas(){
    return(
       <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/admin/produtos" exact component={Produtos} />
                <Route path="/admin/produtos/touchDisplay" exact component={Touch} />
                <Route path="/admin/produtos/bateria" exact component={Bateria} />
                <Route path="/admin/produtos/cameras" exact component={Camera} />
                <Route path="/admin/produtos/flexConectores" exact component={Flex} />

                <Route path="/admin/produtos/cadastrar" exact component={ProdutosCadastrar} />
                <Route path="/admin/produtos/editar/:idProduto" exact component={ProdutosEditar} />

                <Route path="/admin/usuarios/listagem" exact component={UsuariosListagem} />
                <Route path="/admin/usuario/cadastrar" exact component={UsuarioCadastrar} />
                <Route path="/admin/usuario/editar/:idProduto" exact component={UsuarioEditar} />
                <Route path="/admin/admin" exact component={Administador} />
            </Switch>
       </BrowserRouter> 
    )
}