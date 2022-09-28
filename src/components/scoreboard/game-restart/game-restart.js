import styles from './game-restart.module.css'

export const GameRestart = ({ refreshCounter }) => {
  return (
    <div className={styles.newGame} onClick={refreshCounter}>
      NEW GAME
    </div>
  )
}
