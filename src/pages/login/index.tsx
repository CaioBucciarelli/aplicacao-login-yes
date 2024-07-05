import Logo from '../../../public/yeslogoazul.png';
import BoxImportant from '../../../public/Box-Important.png';
import imgFundo1 from '../../../public/img-fundo-1.png';
import imgFundo2 from '../../../public/img-fundo-2.png';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import {validarEmail, validarSenha} from '../../utils/validadores.tsx'
import CardSucessoLogin from '../../components/card-sucesso-login.tsx'
import './style.css';

function Login() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ email: '', senha: '' });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const sucessoCard = document.querySelector<HTMLDivElement>('.card-sucesso-login');
    const email = document.getElementById('email') as HTMLInputElement;
    const senha = document.getElementById('senha') as HTMLInputElement;
    const msgErr = document.querySelector<HTMLDivElement>('.msg-erro');

    if (email && senha && msgErr) {
      if (email.value === 'nome.sobrene@dominio.com.br' && senha.value === '123456789') {
        setLoading(true);
        if (sucessoCard) {
          sucessoCard.style.display = 'flex';
        }
        email.className = 'input';
        senha.className = 'input';
        msgErr.style.display = 'none';
        setLoading(false);
      } else {
        email.className = 'input input-err';
        senha.className = 'input input-err';
        msgErr.style.display = 'flex';
      }
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.senha);
  };

  const showPassword = () => {
    const inputPass = document.getElementById('senha') as HTMLInputElement;
    const btnShowPass = document.getElementById('btn-senha');

    if (inputPass && btnShowPass) {
      if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash');
      } else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye');
      }
    }
  };

  return (
    <section className='section-login container'>
      <div className='section-login-conteudo'>
        <h1>Autenticação</h1>
        <form action="">
          <div className='single-input single-input-login'>
            <input required type="text" name="email" id="email" className='input' onChange={handleChange}/>
            <label htmlFor="email">E-mail</label>
          </div>
          <div className='single-input-login input-senha'>
            <div className='single-input'>
              <input required type="password" name="senha" id="senha" className='input' onChange={handleChange}/>
              <label htmlFor="senha">Senha</label>
            </div>
            <i className="bi bi-eye" id='btn-senha' onClick={showPassword}></i>
          </div>
          <div className='msg-erro'>
            <img src={BoxImportant} alt="Exclamação vermelha" />
            <p>Usuário ou senha incorretos!</p>
          </div>
          <button type='submit' className='btn' id="btn" onClick={handleSubmit} disabled={loading === true || !validadorInput()}>Entrar</button>
        </form>
        <Link to="/recuperar">Esqueci minha senha</Link>
        <p>Ao efetuar login, declaro estar de acordo com a <span>Política de Privacidade</span> e o <span>Termo de Uso</span> da Plataforma</p>
      </div>
      <div className='logo'>
        <img src={Logo} alt="Logo" /> 
      </div>
      <CardSucessoLogin/>
      <img src={imgFundo1} alt="imagem de fundo transparente" className='img-fundo-1' />
      <img src={imgFundo2} alt="imagem de fundo transparente" className='img-fundo-2'/>
    </section>
  );
}

export default Login;
