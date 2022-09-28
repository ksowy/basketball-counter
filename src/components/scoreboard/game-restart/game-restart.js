import styles from './game-restart.module.css'

export const GameRestart = ({ refreshCounter }) => {
  return (
    <div className={styles.newGame} onClick={refreshCounter}>
      <h3 className={styles.text}>NEW GAME</h3>
    </div>
  )
}
