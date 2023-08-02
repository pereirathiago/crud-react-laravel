import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Signup() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()

  const {setUser, setToken} = useStateContext()

  const onSubmit = e => {
    e.preventDefault()
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value
    }

    axiosClient.post('/signup', payload)
    .then(({data}) => {
      setUser(data.user)
      setToken(data.token)
    })
    .catch(err => {
      const response = err.response
      if(response && response.status === 422) {
        rconsole.log(response.data.errors)
      }
    })
  }

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Cadastre-se de graça</h1>
          <input ref={nameRef} type="text" placeholder="Nome completo"/>
          <input ref={emailRef} type="email" placeholder="Email"/>
          <input ref={passwordRef} type="password" placeholder="Senha"/>
          <input ref={passwordConfirmationRef} type="password" placeholder="Confirmar senha "/>
          <button className="btn btn-block">Signup</button>
          <p className="message">
            Já tem uma conta? 
            <br />
            <Link to="/login">Entrar</Link>
          </p>
        </form>
      </div>
    </div>
  )
}