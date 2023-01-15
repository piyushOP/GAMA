import styles from './index.module.css'
import CircularProgressbar from '../../src/Components/Dashboard/CircularProgressBar'
import CourseProgressCard from '../../src/Components/Dashboard/CourseProgressCard';
import CourseCard from '../../src/Components/Dashboard/CourseCard';
import Carousel from '../../src/Components/Dashboard/Carousel';
import LeaderBoardNameCard from '../../src/Components/Dashboard/LeaderBoardNameCard';

export default function Dashboard() {
  return (
    <>
      <div className={styles.welcome_div}>
        <div className={styles.user_image}>
          <div className={styles.image}>
            <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'></img>
          </div>

          <div className={styles.user_welcome}>
            <div className={styles.welcome}>
              Welcome, Piyush<br/>
              <span>to your Dashboard</span>
            </div>

            <div className={styles.batches}>
              <div>
                50<br/>
                <span>Badge</span>
              </div>
              <div>
                250<br/>
                <span>Points</span>
              </div>
              <div>
                18<br/>
                <span>Level</span>
              </div>

            </div>
          </div>
        </div>

        <div className={styles.profile_progress}>
          <CircularProgressbar width={96} height={96} value={70} text='70%' textColor='#000000' fontSize='2.2rem' progressColor='#1CD991'/>
          <div className={styles.complete_profile_btn}>
            Complete Profile
          </div>
        </div>
      </div>

      <div className={styles.progress}>
        <CourseProgressCard title='Courses' subText='1 of 5 Completed'/>
        <CourseProgressCard title='Problems' subText='10 of 50 Completed'/>
        <CourseProgressCard title='Assignment' subText='10 of 20 Completed'/>
      </div>

      <div className={styles.cards}>
        <CourseCard title='Courses' icon='images/dashboard/course.svg'/>
        <CourseCard title='Discussion Fourms' icon='images/dashboard/discussion.svg'/>
        <CourseCard title='Social Groups' icon='images/dashboard/social.svg' />
        <CourseCard title='Activity' icon='images/dashboard/activity.svg'/>
      </div>

      <div className={styles.pending}>
        <div className={styles.pending_courses_div}>
          <div className={styles.heading_div}>
            <div>
              Pick up where you left off
            </div>
            <div className={styles.left_courses_btn}>
              View My courses
            </div>
          </div>
          <div className={styles.carousel}>
            <Carousel />
          </div>
        </div>
        
        <div className={styles.leaderboard_div}>
          <div className={styles.leaderboard_div_heading}>
            <div>
              Leaderboard
            </div>
            <div style={{ color: 'var(--primary-color)', cursor: 'pointer'}}>
              View All
            </div>
          </div>
          
          <div style={{ padding: '0rem 1rem' }}>
            <LeaderBoardNameCard no={1} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' name={'Piyush Kumar'}/>
            <LeaderBoardNameCard no={2} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' name={'Piyush Kumar'}/>
            <LeaderBoardNameCard no={3} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' name={'Piyush Kumar'}/>
            <LeaderBoardNameCard no={4} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' name={'Piyush Kumar'}/>
            <LeaderBoardNameCard no={5} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' name={'Piyush Kumar'}/>
            <LeaderBoardNameCard no={7} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' name={'Piyush Kumar'}/>
            <LeaderBoardNameCard no={8} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' name={'Piyush Kumar'}/>
            <LeaderBoardNameCard no={9} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' name={'Piyush Kumar'}/>
            <LeaderBoardNameCard no={10} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' name={'Piyush Kumar'}/>
          </div>
        </div>
      </div>
    </>
  )
}