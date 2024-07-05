import BoxImportant from '../../public/Box-Important.png';
import VetorX from '../../public/X.svg';

function CardSucessoRedefinir() {

  const closeCard = () => {
    const sucessoCardRedefinir = document.querySelector<HTMLDivElement>('.card-sucesso-redefinir');
    if (sucessoCardRedefinir) {
      sucessoCardRedefinir.style.display = "none"
    }
  }
  return (
    <div className='card-inativo cards' id='card-sucesso-redefinir'>
      <img src={BoxImportant} alt="Exclamação verde" />
      <p>Senha redefinida com sucesso!</p>
      <button onClick={closeCard}><img src={VetorX} alt="X" /></button>
    </div>
  )
}

export default CardSucessoRedefinir;