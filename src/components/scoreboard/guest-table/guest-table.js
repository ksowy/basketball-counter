import styles from './guest-table.module.css'

export const GuestTable = ({
  plusOneGuestPoint,
  plusTwoGuestPoint,
  plusTreeGuestPoint,
  homeScore,
  guestScore,
}) => {
  return (
    <div>
      <h2 className={styles.title}>GUEST</h2>
      <div
        className={guestScore > homeScore ? styles.tableActive : styles.table}
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
  )
}
