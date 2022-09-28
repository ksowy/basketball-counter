import JSConfetti from 'js-confetti'
import styles from './game-restart.module.css'

export const GameRestart = ({ setHomeScore, setGuestScore }) => {
  const jsConfetti = new JSConfetti()

  const refreshCounter = () => {
    setHomeScore(0)
    setGuestScore(0)
    jsConfetti.addConfetti({
      emojis: ['🏀', 'CSS - 💩'],
      emojiSize: 40,
    })
  }
  return (
    <div className={styles.newGame}>
      <h3 className={styles.text} onClick={refreshCounter}>
        NEW GAME
      </h3>
    </div>
  )
}
