import styles from './LeaderBoardNameCard.module.css';


export default function LeaderBoardNameCard({ no, img, name}) {
  return (
    <div className={styles.userCard}>
      <div>{`${no}.`}</div>
      <div className={styles.userCard_img}><img style={{ borderRadius: '5rem' }} height='40' width='40' src={img} /></div>
      <div className={styles.userCard_name}>{name}</div>
    </div>
  )
}