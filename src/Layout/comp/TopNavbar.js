import Link from "next/link";

const TopNavBar = () => {
  return (
    <nav class="top_nav">
      <header>
              <div>
                  <li class="search-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6829 17.6371C1.1057 14.0599 1.1057 8.2601 4.6829 4.6829C8.2601 1.1057 14.0599 1.1057 17.6371 4.6829C20.9069 7.95265 21.1879 13.0794 18.4802 16.6683L22.0943 20.2825C23.0371 21.2253 21.6229 22.6395 20.6801 21.6967L17.1092 18.1257C13.5103 21.2061 8.08905 21.0432 4.6829 17.6371ZM16.2229 6.09712C13.4267 3.30096 8.89327 3.30096 6.09712 6.09712C3.30096 8.89327 3.30096 13.4267 6.09712 16.2229C8.89327 19.019 13.4267 19.019 16.2229 16.2229C19.019 13.4267 19.019 8.89327 16.2229 6.09712Z" fill="#808191"/>
                    </svg>
                    <input type="text" placeholder="Search items, collections, and accounts" />
                  </li>
              </div>
              <div class="profile">
                  <ul class="">
                      <li class="icon">
                          <Link href="#">
                            <svg width="48" height="48" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="24" cy="24" r="24" fill="#F9F5FF"/>
                              <path d="M13.1667 24H34.8333" stroke="#7F56D9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M24 34.8334V13.1667" stroke="#7F56D9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </Link>
                      </li>
                      <li class="icon">
                          <Link href="#">
                            <svg width="48" height="48" viewBox="0 0 61 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle opacity="0.97" cx="25" cy="25" r="24" fill="white" stroke="#F7F7F7"/>
                              <path d="M25.0217 15.1525C21.4358 15.1525 18.5217 18.0667 18.5217 21.6525V24.7834C18.5217 25.4442 18.24 26.4517 17.9042 27.015L16.6583 29.0842C15.8892 30.3625 16.42 31.7817 17.8283 32.2584C22.4975 33.8184 27.535 33.8184 32.2042 32.2584C33.515 31.825 34.0892 30.2759 33.3742 29.0842L32.1283 27.015C31.8033 26.4517 31.5217 25.4442 31.5217 24.7834V21.6525C31.5217 18.0775 28.5967 15.1525 25.0217 15.1525Z" stroke="#808191" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                              <path d="M27.0258 15.4667C26.69 15.3692 26.3433 15.2934 25.9858 15.25C24.9458 15.12 23.9492 15.1959 23.0175 15.4667C23.3317 14.665 24.1117 14.1017 25.0217 14.1017C25.9317 14.1017 26.7117 14.665 27.0258 15.4667Z" stroke="#808191" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M28.2717 32.6483C28.2717 34.4358 26.8092 35.8983 25.0217 35.8983C24.1333 35.8983 23.31 35.53 22.725 34.945C22.14 34.36 21.7717 33.5366 21.7717 32.6483" stroke="#808191" stroke-width="2" stroke-miterlimit="10"/>
                              <ellipse cx="48.5" cy="12" rx="11.5" ry="11" fill="#FF754C"/>
                              <path d="M45.8701 17V15.7975C46.1778 15.5418 46.5309 15.245 46.9296 14.907C47.3283 14.5647 47.7334 14.2028 48.1451 13.8215C48.5568 13.4358 48.9359 13.0523 49.2826 12.671C49.6293 12.2853 49.9088 11.9213 50.1211 11.579C50.3378 11.2323 50.4461 10.9312 50.4461 10.6755C50.4461 10.3852 50.3746 10.1208 50.2316 9.8825C50.0929 9.63983 49.9044 9.447 49.6661 9.304C49.4278 9.15667 49.1634 9.083 48.8731 9.083C48.5828 9.083 48.3163 9.15667 48.0736 9.304C47.8353 9.447 47.6424 9.63983 47.4951 9.8825C47.3521 10.1208 47.2806 10.3852 47.2806 10.6755H45.9286C45.9286 10.1252 46.0629 9.629 46.3316 9.187C46.6046 8.74067 46.9621 8.3875 47.4041 8.1275C47.8504 7.86317 48.3401 7.731 48.8731 7.731C49.4104 7.731 49.9001 7.86317 50.3421 8.1275C50.7841 8.39183 51.1373 8.74717 51.4016 9.1935C51.6659 9.6355 51.7981 10.1295 51.7981 10.6755C51.7981 10.9788 51.7353 11.2908 51.6096 11.6115C51.4839 11.9322 51.3084 12.2593 51.0831 12.593C50.8621 12.9267 50.6043 13.2647 50.3096 13.607C50.0149 13.9493 49.6986 14.2917 49.3606 14.634C49.0226 14.9763 48.6781 15.3143 48.3271 15.648H51.8761V17H45.8701Z" fill="white"/>
                            </svg>
                          </Link>
                      </li>
                      <li class="icon">
                          <Link href="#">
                            <svg width="48" height="48" viewBox="0 0 50 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle opacity="0.97" cx="25" cy="25" r="24" fill="white" stroke="#F7F7F7"/>
                              <path d="M20.0167 18.8467L29.2142 15.7808C33.3417 14.405 35.5842 16.6583 34.2192 20.7858L31.1534 29.9833C29.095 36.1692 25.715 36.1692 23.6567 29.9833L22.7467 27.2533L20.0167 26.3433C13.8309 24.285 13.8309 20.9158 20.0167 18.8467Z" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M22.9525 26.7875L26.8308 22.8983" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </Link>
                      </li>
                      <li class="icon">
                          <Link href="#">
                              <img height="auto" width="auto" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                          </Link>
                      </li>
                  </ul>               
              </div>
      </header>
    </nav>
  )
}
export default TopNavBar;