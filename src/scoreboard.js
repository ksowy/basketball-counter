import styles from './scoreboard.module.css'
import { useState } from 'react'

export const ScoreBoard = () => {
  const [homeScore, setHomeScore] = useState(0)
  const [guestScore, setGuestScore] = useState(0)

  const plusOneHomePoint = () => {
    setHomeScore(homeScore + 1)
  }
  const plusTwoHomePoint = () => {
    setHomeScore(homeScore + 2)
  }
  const plusTreeHomePoint = () => {
    setHomeScore(homeScore + 3)
  }

  const plusOneGuestPoint = () => {
    setGuestScore(guestScore + 1)
  }
  const plusTwoGuestPoint = () => {
    setGuestScore(guestScore + 2)
  }
  const plusTreeGuestPoint = () => {
    setGuestScore(guestScore + 3)
  }

  const refreshCounter = (e) => {
    setHomeScore(0)
    setGuestScore(0)
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.homePoints}>
          <h2 className={styles.title}>HOME</h2>
          <div
            className={
              homeScore > guestScore ? styles.tableActive : styles.table
            }
          >
            <h3 className={styles.counter}>{homeScore}</h3>
          </div>
          <div className={styles.controls}>
            <div className={styles.button} onClick={plusOneHomePoint}>
              +1
            </div>
            <div className={styles.button} onClick={plusTwoHomePoint}>
              +2
            </div>
            <div className={styles.button} onClick={plusTreeHomePoint}>
              +3
            </div>
          </div>
        </div>

        <div className={styles.guestPoints}>
          <h2 className={styles.title}>GUEST</h2>
          <div
            className={
              guestScore > homeScore ? styles.tableActive : styles.table
            }
          >
            <h3 className={styles.counter}>{guestScore}</h3>
          </div>
          <div className={styles.controls}>
            <div className={styles.button} onClick={plusOneGuestPoint}>
              +1
            </div>
            <div className={styles.button} onClick={plusTwoGuestPoint}>
              +2
            </div>
            <div className={styles.button} onClick={plusTreeGuestPoint}>
              +3
            </div>
          </div>
        </div>
      </div>

      <div className={styles.newGame} onClick={refreshCounter}>
        NEW GAME
      </div>
    </div>
  )
}
