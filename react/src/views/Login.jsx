import { Link } from "react-router-dom";

export default function Login() {

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="login-signup-form animated fadeInDown">
        <div className="form">
          <form onSubmit={onSubmit}>
            <h1 className="title">Entre na sua conta</h1>

            <input  type="email" placeholder="Email"/>
            <input  type="password" placeholder="Senha"/>
            <button className="btn btn-block">Entrar</button>
            <p className="message">
              Não possui uma conta?
              <br /> 
              <Link to="/signup">Criar uma conta</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}