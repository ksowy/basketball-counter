import styles from './scoreboard.module.css'
import { useState } from 'react'
import { GuestTable } from './guest-table'
import { HomeTable } from './home-table'
import { GameRestart } from './game-restart'

export const ScoreBoard = () => {
  const [homeScore, setHomeScore] = useState(0)
  const [guestScore, setGuestScore] = useState(0)

  const refreshCounter = () => {
    setHomeScore(0)
    setGuestScore(0)
  }

  return (
    <div className={styles.scoreBoard}>
      <div className={styles.wrapper}>
        <HomeTable
          homeScore={homeScore}
          setHomeScore={setHomeScore}
          guestScore={guestScore}
        />

        <GuestTable
          homeScore={homeScore}
          guestScore={guestScore}
          setGuestScore={setGuestScore}
        />
      </div>

      <GameRestart refreshCounter={refreshCounter} />
    </div>
  )
}
