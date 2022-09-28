import styles from './scoreboard.module.css'
import { useState } from 'react'
import { GuestTable } from './guest-table'
import { HomeTable } from './home-table'
import { GameRestart } from './game-restart'

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

  const refreshCounter = () => {
    setHomeScore(0)
    setGuestScore(0)
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <HomeTable
          plusOneHomePoint={plusOneHomePoint}
          plusTwoHomePoint={plusTwoHomePoint}
          plusTreeHomePoint={plusTreeHomePoint}
          homeScore={homeScore}
          guestScore={guestScore}
        />
        <GuestTable
          plusOneGuestPoint={plusOneGuestPoint}
          plusTwoGuestPoint={plusTwoGuestPoint}
          plusTreeGuestPoint={plusTreeGuestPoint}
          homeScore={homeScore}
          guestScore={guestScore}
        />
      </div>

      <GameRestart refreshCounter={refreshCounter} />
    </div>
  )
}
