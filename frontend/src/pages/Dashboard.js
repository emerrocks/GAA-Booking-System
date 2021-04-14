import React, { Component } from 'react'
import SlickSlide from '../components/slickSlide/slickSlide'
import { SliderData } from '../components/slickSlide/slideData'
import './Dashboard.css'

class DashboardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <section className="header">
            <div className="top-nav">
              <div className="logo">
                <i className="fas fa-bars"></i>
                <img src="../../images/gaa-logo.jpg" alt="gaa-logo" />
              </div>
              <div className="intro">
                <div className="intro-icon">
                  <h3 className="title">Pitch Booking</h3>
                  <span>Find a pitch to book</span>
                </div>
                <div className="intro-icon">
                  <h3 className="title"> Fixtures and Results </h3>
                  <span>View fixtures and results</span>
                </div>
                <div className="intro-icon">
                  <h3>GAA News</h3>
                  <span>Lastest news on GAA</span>
                </div>
                <div className="intro-icon">
                  <h3>Online Shop</h3>
                  <span>Shop our latest club gear</span>
                </div>
              </div>
              <div className="support">
                <span>
                  <i className="fas fa-question-circle"></i> Support
                </span>
              </div>
            </div>
            <div className="image-nav">
              <div className="title-image">GAA PITCH BOOKING PLATFORM</div>
            </div>
            <div className="bottom-nav">
              <div className="bottom-item">
                <i className="fas fa-check-square"></i>
                <span>Amazing pitch</span>
              </div>
              <div className="bottom-item">
                <i className="far fa-thumbs-up"></i>
                <span>Great facility</span>
              </div>
              <div className="bottom-item">
                <i className="fas fa-user-check"></i>
                <span>Priority Members</span>
              </div>
              <div className="bottom-item">
                <i className="far fa-smile"></i>
                <span>Pitch perfect quality</span>
              </div>
            </div>
          </section>
          <SlickSlide slides={SliderData} />

          <section className="contact">
            <div className="left-side">
              <span className="title">For Admin</span>
              <span className="second-title">
                Building credibility and GAA brand
              </span>
              <span className="third-title">
                Increasing the number of members
              </span>
            </div>
            <div className="right-side">
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
