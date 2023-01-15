import styles from './LatestUpdateCard.module.css';

const LatestUpdateCard = ({ image, text, subText }) => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.card_img} src={image} />
      </div>
      <div className={styles.card_info_div}>
          <div className={styles.card_text}>
            {text}
          </div>
          <div className={styles.card_subtext}>
            {subText}
          </div>
      </div>
    </div>
  );
}

export default LatestUpdateCard