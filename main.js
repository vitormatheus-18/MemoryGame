import CardGame from "./src/components/CardGame"
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';

const $root = document.querySelector("#root") //O $ antes do nome da função, guarda um elemento da tela 
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
