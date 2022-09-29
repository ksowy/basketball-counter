import styles from './scoreboard.module.css'
import { useState } from 'react'
import { Table } from './table'
import { GameRestart } from './game-restart'

export const ScoreBoard = () => {
  const [homeScore, setHomeScore] = useState(0)
  const [guestScore, setGuestScore] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.scoreBoard}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>HOME</h2>

          <Table score={homeScore} setScore={setHomeScore} />
        </div>

        <div className={styles.wrapper}>
          <h2 className={styles.title}>GUEST</h2>

          <Table score={guestScore} setScore={setGuestScore} />
        </div>
      </div>
      <GameRestart
        homeScore={homeScore}
        guestScore={guestScore}
        setHomeScore={setHomeScore}
        setGuestScore={setGuestScore}
      />
    </div>
  )
}
