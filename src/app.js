import styles from './app.module.css'
import { ScoreBoard } from './components/scoreboard'

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <ScoreBoard />
    </div>
  )
}
