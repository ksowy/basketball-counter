import JSConfetti from 'js-confetti'
import styles from './game-restart.module.css'

export const GameRestart = ({
  homeScore,
  guestScore,
  setHomeScore,
  setGuestScore,
}) => {
  const jsConfetti = new JSConfetti()

  const refreshCounter = () => {
    setHomeScore(0)
    setGuestScore(0)
    if (homeScore || guestScore) {
      jsConfetti.addConfetti({
        emojis: ['🏀'],
        emojiSize: 35,
      })
    } else {
      return
    }
  }
  return (
    <div className={styles.newGame}>
      <h3 className={styles.text} onClick={refreshCounter}>
        NEW GAME
      </h3>
    </div>
  )
}
