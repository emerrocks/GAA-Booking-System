import React, { Component } from 'react'
import SlickSlide from '../components/slickSlide/slickSlide'
import { SliderData } from '../components/slickSlide/slideData'
import './Dashboard.css'

class DashboardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <section class="header">
            <div class="top-nav">
              <div class="logo">
                <i class="fas fa-bars"></i>
                <img src="../../images/gaa-logo.jpg" alt="gaa-logo" />
              </div>
              <div class="intro">
                <div class="intro-icon">
                  <h3 class="title">Pitch Booking</h3>
                  <span>Find a pitch to book</span>
                </div>
                <div class="intro-icon">
                  <h3 class="title"> Fixtures and Results </h3>
                  <span>View fixtures and results</span>
                </div>
                <div class="intro-icon">
                  <h3>GAA News</h3>
                  <span>Lastest news on GAA</span>
                </div>
                <div class="intro-icon">
                  <h3>Online Shop</h3>
                  <span>Shop our latest club gear</span>
                </div>
              </div>
              <div class="support">
                <span>
                  <i class="fas fa-question-circle"></i> Support
                </span>
              </div>
            </div>
            <div class="image-nav">
              <div class="title-image">
                GAA PITCH BOOKING PLATFORM
              </div>
              <div class="btn-search">
                <input
                  class="input-search"
                  type="text"
                  name="btnSearch"
                  placeholder="Search here ..."
                />
                <i class="fas fa-search"></i>
              </div>
            </div>
            <div class="bottom-nav">
              <div class="bottom-item">
                <i class="fas fa-check-square"></i>
                <span>Amazing pitch</span>
              </div>
              <div class="bottom-item">
                <i class="far fa-thumbs-up"></i>
                <span>Great facility</span>
              </div>
              <div class="bottom-item">
                <i class="fas fa-user-check"></i>
                <span>Priority Members</span>
              </div>
              <div class="bottom-item">
                <i class="far fa-smile"></i>
                <span>Pitch perfect quality</span>
              </div>
            </div>
          </section>
          <SlickSlide slides={SliderData} />

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
      </React.Fragment>
    )
  }
}

export default DashboardPage
