import styles from './home-table.module.css'

export const HomeTable = ({ homeScore, guestScore, setHomeScore }) => {
  return (
    <div className={styles.homePoints}>
      <h2 className={styles.title}>HOME</h2>
      <div
        className={homeScore > guestScore ? styles.tableActive : styles.table}
      >
        <h3 className={styles.counter}>{homeScore}</h3>
      </div>
      <div className={styles.controls}>
        <div
          className={styles.button}
          onClick={() => {
            setHomeScore(homeScore + 1)
          }}
        >
          +1
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setHomeScore(homeScore + 2)
          }}
        >
          +2
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setHomeScore(homeScore + 3)
          }}
        >
          +3
        </div>
      </div>
    </div>
  )
}
