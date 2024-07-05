import Logo from '../../../public/yescolorido.png'
import imgFundo1 from '../../../public/img-fundo-1.png';
import imgFundo2 from '../../../public/img-fundo-2.png';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import {validarEmail} from '../../utils/validadores.tsx'
import './style.css';

function Recuperar() {
  const [form, setForm] = useState({ email: ''});

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const msg = document.querySelector<HTMLDivElement>('.msg-email')
    if (msg) {
      msg.style.display = "flex"
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email)
  }

  return (
    <section className='section-recuperacao container'>
      <div className='section-recuperacao-conteudo'>
        <h1>Recuperação de Senha</h1>
        <p>Informe o  E-mail do usuário do qual deseja recuperar a senha</p>
        <div className='single-input single-input-recuperacao'>
          <input required type="text" name="email" id="email" className='input' onChange={handleChange}/>
          <label htmlFor="email">E-mail</label>
        </div>
        <p>Será enviado um e-mail para o endereço cadastrado, contendo o link de redefinição de senha</p>
        <button type='submit' className='btn' id="btn" onClick={handleSubmit} disabled={!validadorInput()}>Enviar</button>
        <Link to="/">Cancelar</Link>
      </div>
      <div className='msg-email'>
        <div className='msg-email-logo'>
          <img src={Logo} alt="" />
        </div>
        <div className='msg-email-conteudo'>
          <h1>Olá, [Nome do usuário]</h1>
          <p>Recebemos um pedido de recuperação de acesso ao [Nome do Sistema]. Clique no botão abaixo para criar uma nova senha:</p>
          <Link to="/redefinir" className='link-cancelar'>Criar nova senha</Link>
          <span>[Dia/Mês/Ano] | [HH:MM]</span>
          <p>Se você não fez essa solicitação, desconsidere esta mensagem. Mas fique tranquilo, pois estamos aqui para manter sua conta segura. </p>
          <small>Você não precisa responder este e-mail, pois este é um e-mail automático</small>
        </div>
      </div>
      <img src={imgFundo1} alt="imagem de fundo transparente" className='img-fundo-1' />
      <img src={imgFundo2} alt="imagem de fundo transparente" className='img-fundo-2'/>
    </section>
  );
}

export default Recuperar;
