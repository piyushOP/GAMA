import styles from './index.module.css'
import BlogCard from '../../src/Components/Timeline/BlogCard'
import Link from 'next/link'
import CircularProgressbar from '../../src/Components/Dashboard/CircularProgressBar'
import CompletionSteps from '../../src/Components/Timeline/CompletionSteps'
import LatestUpdateCard from '../../src/Components/Timeline/LatestUpdateCard'


export default function Timeline() {
  return (
    <>
      <div className={styles.timeline}>
        <div className={styles.blog}>
          <div className={styles.blog_heading}>
            Blog
          </div>
          <div className={styles.blog_cards_div}>
            <BlogCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpOVm0xBWbWub9-KJXgfKUm-vbUoTRdroDA&usqp=CAU'} title='Tackle Your closest Spring cleaning' date='May 14, 2023'/>         
            <BlogCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpOVm0xBWbWub9-KJXgfKUm-vbUoTRdroDA&usqp=CAU'} title='The Truth About Business Blogging' date='May 14, 2023'/>         
            <BlogCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpOVm0xBWbWub9-KJXgfKUm-vbUoTRdroDA&usqp=CAU'} title='10 Tips to stay healthy when…' date='May 14, 2023'/>         
            <BlogCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpOVm0xBWbWub9-KJXgfKUm-vbUoTRdroDA&usqp=CAU'} title='Visiting Amsterdam on a Budget' date='May 14, 2023'/>         
            <BlogCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpOVm0xBWbWub9-KJXgfKUm-vbUoTRdroDA&usqp=CAU'} title='OMA completes renovation of Sothe..' date='May 14, 2023'/>
          </div>
          <div className={styles.blog_btn}>
            <Link className={styles.blog_btn_text} href='#'>
              SEE ALL
            </Link>
          </div>
        </div>


        <div className={styles.feed}>
          <div className={styles.feed_post_div}>
            <div className={styles.feed_heading}>
              Activity Feed
            </div>
            <div className={styles.feed_post}>
              <div className={styles.feed_input_div}>
                <img className={styles.feed_input_img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU'/>
                <input className={styles.feed_input} placeholder={`Share what's on your mind, John...`}/>
              </div>
              <div className={styles.feed_post_attach}>
                <div>
                  <img src='/images/timeline/cameraIcon.svg'/>
                </div>
                <div>
                  <img src='/images/timeline/videoIcon.svg'/>
                </div>
                <div>
                  <img src='/images/timeline/attachIcon.svg'/>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.live_feed}>
            <div className={styles.live_feed_nav}>
              <div className={styles.live_feed_options}>
                <ul>
                  <li>
                    <Link className={styles.live_feed_nav_link_1} href='#'>
                      All Updates
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.live_feed_nav_link_2} href='#'>
                      Likes
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.live_feed_search}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6829 17.6371C1.1057 14.0599 1.1057 8.2601 4.6829 4.6829C8.2601 1.1057 14.0599 1.1057 17.6371 4.6829C20.9069 7.95265 21.1879 13.0794 18.4802 16.6683L22.0943 20.2825C23.0371 21.2253 21.6229 22.6395 20.6801 21.6967L17.1092 18.1257C13.5103 21.2061 8.08905 21.0432 4.6829 17.6371ZM16.2229 6.09712C13.4267 3.30096 8.89327 3.30096 6.09712 6.09712C3.30096 8.89327 3.30096 13.4267 6.09712 16.2229C8.89327 19.019 13.4267 19.019 16.2229 16.2229C19.019 13.4267 19.019 8.89327 16.2229 6.09712Z" fill="#808191"/>
                </svg>
                <input type="text" placeholder="Search Posts" />
              </div>
            </div>
            <div className={styles.live_feed_post_div}>
              <div className={styles.live_feed_post}>
                <div className={styles.live_feed_post_title}>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU'/>
                  <div>
                    John posted an update<br/>a day ago
                  </div>
                </div>
                <div className={styles.live_feed_post_media}>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU'/>
                </div>
                <div className={styles.live_feed_post_likes_div}>
                  <div className={styles.text}>
                    You and Jennifer like this - 2 Comments
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
              <div className={styles.live_feed_post}>
                <div className={styles.live_feed_post_title}>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU'/>
                  <div>
                    John posted an update<br/>a day ago
                  </div>
                </div>
                <div className={styles.live_feed_post_media}>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU'/>
                </div>
                <div className={styles.live_feed_post_likes_div}>
                  <div className={styles.text}>
                    You and Jennifer like this - 2 Comments
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
              <div className={styles.live_feed_post}>
                <div className={styles.live_feed_post_title}>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU'/>
                  <div>
                    John posted an update<br/>a day ago
                  </div>
                </div>
                <div className={styles.live_feed_post_media}>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU'/>
                </div>
                <div className={styles.live_feed_post_likes_div}>
                  <div className={styles.text}>
                    You and Jennifer like this - 2 Comments
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
            </div>
          </div>
        </div>
        
        
        
        <div className={styles.profile}>
          <div className={styles.profile_heading}>
          Complete Your Profile          
          </div>
          <div className={styles.progress_div}>
            <div className={styles.progress}>
              <CircularProgressbar semi progressColor='#1CD991' height='14rem' width='14rem' value={73/2} />        
              <div className={styles.progress_percentage}>73%</div>
            </div>

            <div className={styles.progress_details}>
              <CompletionSteps text='General Information' outOf='5/6' isFirst/>
              <CompletionSteps text='Work Experience' outOf='1/3'/>
              <CompletionSteps text='Profile Photo' outOf='1/1' isCompleted />
              <CompletionSteps text='Cover Photo' outOf='1/1' isCompleted />
            </div>
          </div>
        </div>



        <div className={styles.following}>
          <div className={styles.following_heading}>
            I’m Following <span>16</span>
          </div>
          <div className={styles.following_img_div}>
            {
              [...Array(16).keys()].map(() => (
                <img className={styles.following_img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU'/>
              ))
            }
          </div>
        </div>
        
        
        
        <div className={styles.updates}>
          <div className={styles.updates_heading}>
            Latest updates
          </div>
          <div className={styles.updates_div}>
            <LatestUpdateCard image='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' text='John posted an update' subText='a day ago'/>
            <LatestUpdateCard image='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' text='Adele posted an update' subText='a day ago'/>
            <LatestUpdateCard image='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' text='John posted an update' subText='3 day ago'/>
            <LatestUpdateCard image='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' text='John posted an update in the group' subText='3 days ago'/>
            <LatestUpdateCard image='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' text='John posted an update' subText='3 days ago'/>
          </div>
        </div>
      </div>
    </>
  )
}