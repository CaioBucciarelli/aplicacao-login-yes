import BoxImportant from '../../public/Box-Important.png';
import VetorX from '../../public/X.svg';

function CardSucessoLogin() {

  const closeCard = () => {
    const sucessoCardLogin = document.querySelector<HTMLDivElement>('.card-sucesso-login');
    if (sucessoCardLogin) {
      sucessoCardLogin.style.display = "none"
    }
  }

  return (
    <div className='card-sucesso-login cards'>
      <img src={BoxImportant} alt="Exclamação verde" />
      <p>Login feito com sucesso!</p>
      <button onClick={closeCard}><img src={VetorX} alt="X" /></button>
  </div>
  )
}

export default CardSucessoLogin;
