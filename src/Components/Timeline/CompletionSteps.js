import styles from "./CompletionSteps.module.css"


const CompletionSteps = ({isFirst, isCompleted, text, outOf }) => {
  return (
    <div className={isFirst ? `${styles.info }`: `${styles.info} ${styles.first} ${isCompleted && styles.completed}`}>
      <div className={!isCompleted ? styles.dot: styles.dot_complete}></div>
      <div className={!isCompleted ? styles.text: styles.text_complete}>{text}</div>
      <div className={!isCompleted ? styles.out_of: styles.out_of_complete}>{outOf}</div>
    </div>
  );
}

export default CompletionSteps;