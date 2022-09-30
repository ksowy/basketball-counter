import styles from './table.module.css'

export const Table = ({ score, setScore }) => {
  return (
    <div>
      <div className={styles.table}>
        <p className={styles.counter}>{score}</p>
      </div>
      <div className={styles.controls}>
        <div
          className={styles.button}
          onClick={() => {
            setScore(score + 1)
          }}
        >
          +1
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setScore(score + 2)
          }}
        >
          +2
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setScore(score + 3)
          }}
        >
          +3
        </div>
      </div>
    </div>
  )
}
