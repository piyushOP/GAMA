import styles from './CourseCard.module.css';


export default function CourseCard({title, icon}) {
  return (
    <div className={styles.course_card}>
      <div className={styles.image}>
        <img height='auto' width='auto' src={icon} />
      </div>
      <div className={styles.card_title}>
        {title}
      </div>
      <div className={styles.circle}></div>
    </div>
  )
}