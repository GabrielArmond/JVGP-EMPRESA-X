import posicaoGanhador from './posicaoGanhador'

const victories = [448, 56, 7, 292, 146, 73, 273, 84]
const convertFont = letra => value => value == letra ? 1 : 0
const toBinario = (arr, verificaLetra) => arr.map(verificaLetra).join``
const haveWinner = valor => element => (element & valor) == element

const verificaSe = letra => {
  const nessa = partida => parseInt(toBinario(partida, convertFont(letra)), 2)
  return {
    ganhou: partida => ({
      ganhou: victories.some(haveWinner(nessa(partida))) && letra,
      posicaoVitoria: victories
        .filter(haveWinner(nessa(partida)))
        .map(i => posicaoGanhador[i])
    })
  }
}

const ganhador = partida => {
  const xResult = verificaSe`X`.ganhou(partida)
  const oResult = verificaSe`O`.ganhou(partida)
  if (xResult.ganhou) {
    return xResult
  } else {
    if (oResult) {
      return oResult
    }
  }
}

export default ganhador
