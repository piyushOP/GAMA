import CircularProgressbar from "./CircularProgressBar";
import styles from './CourseProgressCard.module.css';


export default function CourseProgressCard({title, subText}) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        {title}<br/>
        <span>{subText}</span>  
      </div>
      <CircularProgressbar width={38} height={38} value={70} text='70%' textColor='#101828' fontSize='2.5rem' progressColor='#FF754C'/>
    </div>
  )
}