import styles from './guest-table.module.css'

export const GuestTable = ({ setGuestScore, homeScore, guestScore }) => {
  return (
    <div>
      <h2 className={styles.title}>GUEST</h2>
      <div
        className={guestScore > homeScore ? styles.tableActive : styles.table}
      >
        <h3 className={styles.counter}>{guestScore}</h3>
      </div>
      <div className={styles.controls}>
        <div
          className={styles.button}
          onClick={() => {
            setGuestScore(guestScore + 1)
          }}
        >
          +1
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setGuestScore(guestScore + 2)
          }}
        >
          +2
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setGuestScore(guestScore + 3)
          }}
        >
          +3
        </div>
      </div>
    </div>
  )
}
