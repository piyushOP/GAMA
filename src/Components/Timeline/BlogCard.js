import Link from 'next/link';
import styles from './BlogCard.module.css';

const BlogCard = ({ title, image, date }) => {
  return (
    <Link href='#'>
      <div className={styles.blog_card}>
        <div>
          <img className={styles.blog_img} src={image}/>
        </div>
        <div className={styles.blog_details}>
          <div className={styles.blog_title}>
          {title}
          </div>
          <div className={styles.blog_date}>
          {date}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;