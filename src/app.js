import { ScoreBoard } from './components/scoreboard'
import styles from './app.module.css'

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <ScoreBoard />
    </div>
  )
}
