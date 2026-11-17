<script>
    import { onMount } from 'svelte';

    onMount(() => {
        document.querySelectorAll('.cjr-header__hamburger').forEach(hamburger => {
            const nav = hamburger.closest('.js-nav-group')?.querySelector('.cjr-nav');
            if (nav) {
                hamburger.addEventListener('click', () => {
                    hamburger.classList.toggle('is-active');
                    hamburger.setAttribute('aria-expanded', String(nav.classList.toggle('is-open')));
                });
            }
        });
    });
</script>


<div class="container-fluid top-nav-box desktop-nav-container">  
    <div class="container-lg top-nav-1">     
      
        <div class="cjr-header-wrap">
          <header class="cjr-header">

            <span class="header-links">
              <a class="cjr-header-link" href="https://cjr.org/most-recent">Most Recent</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a class="cjr-header-link" href="https://cjr.org/issues">Special Issues</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a class="cjr-header-link" href="https://cjr.org/the-kicker">The Kicker Podcast</a>
            </span>
            
              <a class="cjr-header-donate" href="https://members.cjr.org/member/?a=nav-joinus&amp;utm_source=cjr-org&amp;utm_medium=cjr-homehead&amp;utm_campaign=m-land" target="_blank">
                <img src="https://cjr.org/wp-content/themes/cjr2017/_resources2022/images/join-us-orange-rounded-balto.png" alt="Join us" class="cjr-button-donate">
              </a>
                
              <div class="js-nav-group">

                  <button id="cjr-header__hamburger" class="cjr-header__hamburger" aria-label="Toggle CJR navigation" aria-expanded="false">
                    <span id="cjr-head-ham-lines" class="cjr-header__hamburger-lines"></span>
                  </button>
                    
                  <div id="navigation" class="cjr-nav">    

                      <div class="container-lg cjr-search-container">  
                          <form class="nav-search" id="search" action="https://www.cjr.org/search">
                              <input type="hidden" name="cx" value="002110349687880336610:9r4jniuv6ko">
                              <input type="hidden" name="cof" value="FORID:11">
                              <input type="hidden" name="ie" value="UTF-8">
                              <input type="search" name="q" placeholder="Search...">
                              <button type="submit">Search</button>
                          </form>
                      </div>    
                      
                      <div class="container-lg cjr-main-container">   
                      
                        <nav class="cjr-main-menu">
                            <ul class="cjr-main-menu__list">
                                  <li class="cjr-main-menu__item">
                                    <a class="cjr-main-menu__link" href="https://cjr.org/most-recent">Recent Stories</a>
                                  </li>
                                  <li class="cjr-main-menu__item">
                                    <a class="cjr-main-menu__link" href="https://cjr.org/issues">Special Issues</a>
                                  </li>
                                  <li class="cjr-main-menu__item">
                                    <a class="cjr-main-menu__link" href="https://cjr.org/the-kicker">The Kicker Podcast</a>
                                  </li>
                                  <li class="cjr-main-menu__item">
                                    <a class="cjr-main-menu__link" href="https://cjr.org/tow-center">Tow Center</a>
                                  </li>
                              </ul>
                          </nav>

                          <div class="cjr-nav__second">
                              <ul class="cjr-nav__second-menu cjr-menu-inline">
                                  <li class="cjr-menu-inline__item">
                                  <a class="cjr-menu-inline__link" href="https://cjr.org/about_us/mission_statement.php" title="">About</a>
                                  </li>
                                  <li class="cjr-menu-inline__item">
                                  <a class="cjr-menu-inline__link" href="https://members.cjr.org/member/?a=nav-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land" title="Membership">Memberships</a>
                                  </li> 
                                  <li class="cjr-menu-inline__item">
                                  <a class="cjr-menu-inline__link" href="https://cjr.org/about_us/donate.php" title="Donate">Donate</a>
                                  </li>
                                  <li class="cjr-menu-inline__item">
                                  <a class="cjr-menu-inline__link" href="https://cjr.org/about_us/advertise.php" title="Advertise">Advertise</a>
                                  </li>  
                                  <li class="cjr-menu-inline__item">
                                  <a class="cjr-menu-inline__link" href="https://cjr.org/about_us/contact.php" title="Contact">Contact</a>
                                  </li>
                              </ul>
                          </div>

                      </div>    

                  </div>

              </div> 
          </header>
      </div>
      <div class="cjr-header-logo-wrap">
        <a href="https://www.cjr.org/" rel="home">
          <img src={import.meta.env.BASE_URL + 'graphics/cjr/cjr-logo-2x-b.png'} alt="Columbia Journalism Review" class="cjr-header-logo-image" width="1200" height="65" />
        </a>
      </div>

    </div>  
  </div>
<div class="container-fluid top-nav-box mobile-nav-container">
    <div class="container-lg top-nav-1">
    <header class="cjr-header">
      <a class="cjr-header__logo" href="https://www.cjr.org/" rel="home">
        <img src={import.meta.env.BASE_URL + 'graphics/cjr/cjr-logo-mobile-2x.png'} alt="Columbia Journalism Review" class="cjr-logo-mobile" width="600" height="278" />
      </a>

      <a class="cjr-header-donate" href="https://members.cjr.org/member/?a=nav-joinus&amp;utm_source=cjr-org&amp;utm_medium=cjr-homehead&amp;utm_campaign=m-land" target="_blank">
        <img src="https://cjr.org/wp-content/themes/cjr2017/_resources2022/images/join-us-orange-rounded-balto.png" alt="Join us" class="cjr-button-donate">
      </a>

        <div class="js-nav-group">

          <button class="cjr-header__hamburger" aria-label="Toggle CJR navigation" aria-expanded="false">
            <span class="cjr-header__hamburger-lines"></span>
          </button>

          <div class="cjr-nav">    
            <div class="container-lg cjr-search-container">
                <form class="nav-search" action="https://www.cjr.org/search">
                    <input type="hidden" name="cx" value="002110349687880336610:9r4jniuv6ko">
                    <input type="hidden" name="cof" value="FORID:11">
                    <input type="hidden" name="ie" value="UTF-8">
                    <input type="search" name="q" placeholder="Search...">
                    <button type="submit">Search</button>
                </form>
            </div>

            <div class="container-lg cjr-main-container">
              <nav class="cjr-main-menu">
                  <ul class="cjr-main-menu__list">
                      <li class="cjr-main-menu__item">
                        <a class="cjr-main-menu__link" href="https://cjr.org/most-recent">Recent Stories</a>
                      </li>
                      <li class="cjr-main-menu__item">
                        <a class="cjr-main-menu__link" href="https://cjr.org/issues">Special Issues</a>
                      </li>
                      <li class="cjr-main-menu__item">
                        <a class="cjr-main-menu__link" href="https://cjr.org/the-kicker">The Kicker Podcast</a>
                      </li>
                      <li class="cjr-main-menu__item">
                        <a class="cjr-main-menu__link" href="https://cjr.org/tow-center">Tow Center</a>
                      </li>
                  </ul>
                </nav>

                <div class="cjr-nav__second">
                    <ul class="cjr-nav__second-menu cjr-menu-inline">
                        <li class="cjr-menu-inline__item">
                        <a class="cjr-menu-inline__link" href="https://cjr.org/about_us/mission_statement.php" title="">About</a>
                        </li>
                        <li class="cjr-menu-inline__item">
                        <a class="cjr-menu-inline__link" href="https://members.cjr.org/member/?a=nav-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land" title="Membership">Memberships</a>
                        </li>
                        <li class="cjr-menu-inline__item">
                        <a class="cjr-menu-inline__link" href="https://cjr.org/about_us/donate.php" title="Donate">Donate</a>
                        </li>
                        <li class="cjr-menu-inline__item">
                        <a class="cjr-menu-inline__link" href="https://cjr.org/about_us/advertise.php" title="Advertise">Advertise</a>
                        </li>
                        <li class="cjr-menu-inline__item">
                        <a class="cjr-menu-inline__link" href="https://cjr.org/about_us/contact.php" title="Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>    
          </div>

        </div>   

    </header>
    </div>  
    </div>
