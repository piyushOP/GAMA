import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <div className={styles.live_feed_post}>
      <div className={styles.live_feed_post_title}>
        <img src={post.userImage} />
        <div>
          {post.title}<br/>{post.date}
        </div>
      </div>
      <div className={styles.live_feed_post_media}>
        <img src={post.media} />
      </div>
      <div className={styles.live_feed_post_likes_div}>
        <div className={styles.text}>{
          `${post.likesText} - ${post.commentCount} Comments`
        }
        </div>
        <div className={styles.btn_div}>
          <div className={styles.like_btn}>
            <img src='/images/timeline/likeBtn.svg'/>
            <span>Unlike</span>
          </div>
          <div className={styles.comment_btn}>
            <img src='/images/timeline/commentBtn.svg'/>
            <span>Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;