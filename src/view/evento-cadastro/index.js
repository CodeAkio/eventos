import React, { useState } from 'react'
import './evento-cadastro.css'
import {Link, Redirect} from 'react-router-dom'

import firebase from '../../config/firebase'

import { useSelector } from 'react-redux'
import NavBar from '../../components/navbar'


function EventoCadastro() {
    const [msgTipo, setMsgTipo] = useState()
    const [titulo, setTitulo] = useState()
    const [tipo, setTipo] = useState()
    const [detalhes, setDetalhes] = useState()
    const [data, setData] = useState()
    const [hora, setHora] = useState()
    const [foto, setFoto] = useState()
    const [usuarioEmail, setUsuarioEmail] = useState()

    const storage = firebase.storage()
    const db = firebase.firestore()

    setUsuarioEmail(useSelector(state => state.usuarioEmail))

    function cadastrar() {
        setMsgTipo(null)

        storage.ref(`imagens/${foto.name}`).put(foto).then(() => {
            db.collection('eventos').add({
                titulo: titulo,
                tipo: tipo,
                detalhes: detalhes,
                data: data,
                hora: hora,
                usuario: usuarioEmail,
                visualizacoes: 0,
                foto: foto,
                publico: 1,
                criacao: new Date()
            })

            setMsgTipo('sucesso')
        }).catch(erro => {
            setMsgTipo('erro')
        })
    }

    return (
        <>
            <NavBar/>
            <div className="col-12 mt-5">
                <div className="row">
                    <h3 className="mx-auto font-wight-bold">Novo Evento</h3>
                </div>
            </div>

            <form>
                <div className="form-group">
                    <label>Título</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Tipo de Evento</label>
                    <select className="form-control" >
                        <option disabled selected value>-- Selecione um tipo --</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Evento</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Descrição do Evento</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>

                <div className="form-group row">
                    <div className="col-6">
                        <label>Data</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-6">
                        <label>Hora</label>
                        <input type="time" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Upload de Imagem</label>
                    <input type="file" className="form-control" />
                </div>

                <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</button>
            </form>

            <div className="msg-login text-center mt-2">
                {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Evento Publicado! &#128526;</span>}
                {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possível publicar o evento! &#128546;</span>}
            </div>
        </>
    )
}

export default EventoCadastro