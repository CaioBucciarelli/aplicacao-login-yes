import imgFundo1 from '../../../public/img-fundo-1.png';
import imgFundo2 from '../../../public/img-fundo-2.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CardSucessoRedefinir from '../../components/card-sucesso-redefinir';
import './style.css';

function Redefinir() {
  const [form, setForm] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const showPasswordNew = () => {
    const inputPassNew = document.getElementById('nova-senha') as HTMLInputElement;
    const btnShowPassNew = document.getElementById('btn-nova-senha');

    if (inputPassNew && btnShowPassNew) {
      if (inputPassNew.type === 'password') {
        inputPassNew.setAttribute('type', 'text');
        btnShowPassNew.classList.replace('bi-eye', 'bi-eye-slash');
      } else {
        inputPassNew.setAttribute('type', 'password');
        btnShowPassNew.classList.replace('bi-eye-slash', 'bi-eye');
      }
    }
  };

  const showPasswordConfirm = () => {
    const inputPassConfirm = document.getElementById('confirmar-senha') as HTMLInputElement;
    const btnShowPassConfirm = document.getElementById('btn-confirmar-senha');

    if (inputPassConfirm && btnShowPassConfirm) {
      if (inputPassConfirm.type === 'password') {
        inputPassConfirm.setAttribute('type', 'text');
        btnShowPassConfirm.classList.replace('bi-eye', 'bi-eye-slash');
      } else {
        inputPassConfirm.setAttribute('type', 'password');
        btnShowPassConfirm.classList.replace('bi-eye-slash', 'bi-eye');
      }
    }
  };

  const verificarInfos = () => {
    const senhaNova = document.getElementById('nova-senha') as HTMLInputElement;
    const senhaConfirmar = document.getElementById('confirmar-senha') as HTMLInputElement;
    const listaNova = document.querySelectorAll<HTMLDivElement>('.infos-senha-nova ul li div');
    const listaConfirmar = document.querySelectorAll<HTMLDivElement>('.infos-senha-confirmar ul li div');

    const maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minuscula = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const especiais = "@$%&!";

    const listaMaiusculo: number[] = [];
    const listaMinusculo: number[] = [];
    const listaNumeros: number[] = [];
    const listaEspeciais: number[] = [];
    let isValid = true;

    if (senhaNova.value === '') {
      for (let i = 0; i < listaNova.length; i++) {
        listaNova[i].style.backgroundColor = 'var(--vermelho)';
        listaConfirmar[i].style.backgroundColor = 'var(--vermelho)';
      }
      isValid = false;
    } else {
      if (senhaNova.value.length >= 8 && senhaNova.value.length <= 32) {
        listaNova[0].style.backgroundColor = 'var(--verde)';
        listaConfirmar[0].style.backgroundColor = 'var(--verde)';
        isValid = true;
      } else {
        listaNova[0].style.backgroundColor = 'var(--vermelho)';
        listaConfirmar[0].style.backgroundColor = 'var(--vermelho)';
        isValid = false;
      }
      for (let i = 0; i < senhaNova.value.length; i++) {
        listaMaiusculo.push(maiuscula.indexOf(senhaNova.value.charAt(i)));
        let letras = Math.max.apply(null, listaMaiusculo);
        if (letras >= 0) {
          listaNova[1].style.backgroundColor = 'var(--verde)';
          listaConfirmar[1].style.backgroundColor = 'var(--verde)';
          isValid = true;
        } else {
          listaNova[1].style.backgroundColor = 'var(--vermelho)';
          listaConfirmar[1].style.backgroundColor = 'var(--vermelho)';
          isValid = false;
        }
      }

      for (let i = 0; i < senhaNova.value.length; i++) {
        listaMinusculo.push(minuscula.indexOf(senhaNova.value.charAt(i)));
        let letras = Math.max.apply(null, listaMinusculo);
        if (letras >= 0) {
          listaNova[2].style.backgroundColor = 'var(--verde)';
          listaConfirmar[2].style.backgroundColor = 'var(--verde)';
          isValid = true;
        } else {
          listaNova[2].style.backgroundColor = 'var(--vermelho)';
          listaConfirmar[2].style.backgroundColor = 'var(--vermelho)';
          isValid = false;
        }
      }

      for (let i = 0; i < senhaNova.value.length; i++) {
        listaNumeros.push(numeros.indexOf(senhaNova.value.charAt(i)));
        let numero = Math.max.apply(null, listaNumeros);
        if (numero >= 0) {
          listaNova[3].style.backgroundColor = 'var(--verde)';
          listaConfirmar[3].style.backgroundColor = 'var(--verde)';
          isValid = true;
        } else {
          listaNova[3].style.backgroundColor = 'var(--vermelho)';
          listaConfirmar[3].style.backgroundColor = 'var(--vermelho)';
          isValid = false;
        }
      }

      for (let i = 0; i < senhaNova.value.length; i++) {
        listaEspeciais.push(especiais.indexOf(senhaNova.value.charAt(i)));
        let especial = Math.max.apply(null, listaEspeciais);
        if (especial >= 0) {
          listaNova[4].style.backgroundColor = 'var(--verde)';
          listaConfirmar[4].style.backgroundColor = 'var(--verde)';
          isValid = true;
        } else {
          listaNova[4].style.backgroundColor = 'var(--vermelho)';
          listaConfirmar[4].style.backgroundColor = 'var(--vermelho)';
          isValid = false;
        }
      }

      if (senhaNova.value === 'nome.sobrene@dominio.com.br') {
        listaNova[5].style.backgroundColor = 'var(--vermelho)';
        listaConfirmar[5].style.backgroundColor = 'var(--vermelho)';
        isValid = false;
      } else {
        listaNova[5].style.backgroundColor = 'var(--verde)';
        listaConfirmar[5].style.backgroundColor = 'var(--verde)';
        isValid = true;
      }

      if (senhaNova.value === senhaConfirmar.value) {
        listaNova[6].style.backgroundColor = 'var(--verde)';
        listaConfirmar[6].style.backgroundColor = 'var(--verde)';
        isValid = true;
      } else {
        listaNova[6].style.backgroundColor = 'var(--vermelho)';
        listaConfirmar[6].style.backgroundColor = 'var(--vermelho)';
        isValid = false;
      }
    }
    setIsFormValid(isValid);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    const sucessoCardRedefinir = document.getElementById('card-sucesso-redefinir') as HTMLInputElement;
    event.preventDefault();
    if (isFormValid) {
      navigate('/')
      if (sucessoCardRedefinir) {
        sucessoCardRedefinir.classList.replace('card-inativo', 'card-ativo');
      }
    }
  };

  return (
    <section className='section-redefinir container'>
      <div className='section-redefinir-conteudo'>
        <h1>Redefinição de Senha</h1>
        <form onSubmit={handleSubmit}>
          <div className='single-input-redefinir single-input-redefinir-nova-senha'>
            <div className='input-senha'>
              <div className='single-input'>
                <input required type="password" name="nova-senha" id="nova-senha" className='input' onChange={handleChange} onKeyUp={verificarInfos} />
                <label htmlFor="nova-senha">Nova senha*</label>
              </div>
              <i className="bi bi-eye" id='btn-nova-senha' onClick={showPasswordNew}></i>
            </div>
            <div className='infos-senha-nova'>
              <h2>Segurança da senha</h2>
              <ul>
                <li><div></div>Deve conter, ao menos, 8 e máximo de 32 caracteres</li>
                <li><div></div>Deve conter, ao menos, uma letra maiúscula</li>
                <li><div></div>Deve conter, ao menos, uma letra minúscula</li>
                <li><div></div>Deve conter, ao menos, um número</li>
                <li><div></div>Deve conter, ao menos, um caractere especiais</li>
                <li><div></div>Não utilizar o seu próprio login na senha</li>
                <li><div></div>As senhas digitadas devem ser idênticas</li>
              </ul>
            </div>
          </div>
          <div className='single-input-redefinir single-input-redefinir-confirmar-senha'>
            <div className='input-senha'>
              <div className='single-input'>
                <input required type="password" name="confirmar-senha" id="confirmar-senha" className='input' onChange={handleChange} onKeyUp={verificarInfos} />
                <label htmlFor="confirmar-senha">Confirmar senha*</label>
              </div>
              <i className="bi bi-eye" id='btn-confirmar-senha' onClick={showPasswordConfirm}></i>
            </div>
            <div className='infos-senha-confirmar'>
              <h2>Segurança da senha</h2>
              <ul>
                <li><div></div>Deve conter, ao menos, 8 e máximo de 32 caracteres</li>
                <li><div></div>Deve conter, ao menos, uma letra maiúscula</li>
                <li><div></div>Deve conter, ao menos, uma letra minúscula</li>
                <li><div></div>Deve conter, ao menos, um número</li>
                <li><div></div>Deve conter, ao menos, um caractere especiais</li>
                <li><div></div>Não utilizar o seu próprio login na senha</li>
                <li><div></div>As senhas digitadas devem ser idênticas</li>
              </ul>
            </div>
          </div>
          <button type='submit' className='btn btn-redefinir' id="btn" disabled={!isFormValid}>Enviar</button>
        </form>
        <Link to="/" className='link-cancelar'>Cancelar</Link>
      </div>
      <CardSucessoRedefinir/>
      <img src={imgFundo1} alt="imagem de fundo transparente" className='img-fundo-1' />
      <img src={imgFundo2} alt="imagem de fundo transparente" className='img-fundo-2' />
    </section>
  );
}

export default Redefinir;