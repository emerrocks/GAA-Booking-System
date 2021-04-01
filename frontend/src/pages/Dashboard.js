import React, { Component } from 'react'

class DashboardPage extends Component {
  render() {
    return (
      <body>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <link rel="stylesheet" href="/slick-slide/style.css" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="/slick-slide/slick-slide.js"></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        ></script>

        <div class="container">
          <section class="club-news">
            <div class="title-section">
              <span class="span-title"> CLUB NEWS </span>
              <div class="btn-view">
                <a class="" href="/">
                  <span> ALL NEWS </span>
                </a>
              </div>
            </div>
            <div class="slide">
              <div class="my-slick-slide">
                <div class="div-slide">
                  <div class="image-slide"></div>
                  <div class="div-title">
                    <span>Golden Gloves Handball</span>
                  </div>
                </div>
                <div class="div-slide">
                  <div class="image-slide"></div>
                  <div class="div-title">
                    <span>All-Ireland Final 2019</span>
                  </div>
                </div>
                <div class="div-slide">
                  <div class="image-slide"></div>
                  <div class="div-title">
                    <span>Presentation Day</span>
                  </div>
                </div>
                <div class="div-slide">
                  <div class="image-slide"></div>
                  <div class="div-title">
                    <span>O'Neills Gear Collection</span>
                  </div>
                </div>
                <div class="div-slide">
                  <div class="image-slide"></div>
                  <div class="div-title">
                    <span>Ulster Minor Tournament</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="fixtures-and-results">
            <div class="title-section">
              <span class="span-title"> FIXTURES </span>
              <div class="btn-view">
                <a class="" href="/">
                  <span> CLUB FIXTURES </span>
                </a>
              </div>
            </div>
            <div class="slide">
              <div class="my-slick-slide">
                <div class="div-slide">
                  <div class="image-slide"></div>
                  <div class="div-title">
                    <span>U12 FIXTURES</span>
                  </div>
                </div>
                <div class="div-slide">
                  <div class="image-slide"></div>
                  <div class="div-title">
                    <span>U14 FIXTURES</span>
                  </div>
                </div>
                <div class="div-slide">
                  <div class="image-slide"></div>
                  <div class="div-title">
                    <span>U16 FIXTURES</span>
                  </div>
                </div>
                <div class="div-slide">
                  <div class="image-slide"></div>
                  <div class="div-title">
                    <span>MINOR FIXTURES</span>
                  </div>
                </div>
                <div class="div-slide">
                  <div class="image-slide"></div>
                  <div class="div-title">
                    <span>SENIOR FIXTURES</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="facilities">
            <div class="title-section">
              <span class="span-title"> FACILITIES </span>
              <div class="btn-view">
                <a class="" href="/">
                  <span> ALL FACILITIES </span>
                </a>
              </div>
            </div>
            <div class="slide">
              <div class="my-slick-slide">
                <div class="div-slide">
                  <img src="/images/naomh-pol.jpg" alt="grass-pitch" />
                  <div class="div-title">
                    <span>Grass Pitch</span>
                  </div>
                </div>
                <div class="div-slide">
                  <img src="/images/naomh-pol.jpg" alt="3g-pitch" />
                  <div class="div-title">
                    <span>3G Pitch</span>
                  </div>
                </div>
                <div class="div-slide">
                  <img src="/images/naomh-pol.jpg" alt="handball-courts" />
                  <div class="div-title">
                    <span>Handball Courts</span>
                  </div>
                </div>
                <div class="div-slide">
                  <img src="/images/naomh-pol.jpg" alt="gymnasium" />
                  <div class="div-title">
                    <span>Gymnasium</span>
                  </div>
                </div>
                <div class="div-slide">
                  <img src="/images/naomh-pol.jpg" alt="mini-bus" />
                  <div class="div-title">
                    <span>Mini Bus</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="contact">
            <div class="left-side">
              <span class="title">For Admin</span>
              <span class="second-title">
                Building credibility and GAA brand
              </span>
              <span class="third-title">Increasing the number of members</span>
            </div>
            <div class="right-side">
              <span></span>
            </div>
          </section>
          <footer>
            <span>Emer Rocks</span>
          </footer>
        </div>
      </body>
    )
  }
}

export default DashboardPage
