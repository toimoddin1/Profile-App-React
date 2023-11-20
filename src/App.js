import React from 'react';
import './App.css';
import logo from './logo.png';
import cover from './cover.jpg';
import profile from './profile.jpg';
import verify from './verified.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp,faEye, faHeart } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
         
          <img
            className="company-logo"
            src={logo} alt="Company Logo" />

            <span className="line">|</span>
            
          
          <h1 className="company-name">S T O R I E S</h1>
        </div>
        <div className="header-right">
         
          <button className="course-button">COURSE</button>
        </div>
      </header>
      <main>

  <section className="profile">
  
  <div className="cover-section">
    <img    
      src={cover} 
      alt="Cover Picture"
      className="cover-picture"
    />
  </div>
  <div className="profile-info">
    <img
      src={profile}
      alt="Profile Picture"
      className="profile-picture"
    />    
  </div>
</section>

<section className="profile-name">
<div className="user-details">
  <h3>
    Anuj Gosalia
    <img
      src={verify}
      alt="Verified Icon"
      className="verified-icon"
    />
    </h3>
  

      <div className="follower-box">
        <div className="follower-info">
        <p>100</p>
          <span>Followers</span>
        </div>
        <div className="follower-info">
        <p>100</p>
          <span>Following</span>
        </div>
      </div>
  </div>
  </section>

  <section className="bio-section">
  <p>Co-founder and CEO at Terribly Tiny Tales</p>
  <p className="insta">http://www.instagram.com/anujgosalia</p>
  <div className="reaction-icons">
    <FontAwesomeIcon icon={faStar} className="star"/><p>100</p>
    <FontAwesomeIcon icon={faThumbsUp} className="like" /><p>100</p>
    <FontAwesomeIcon icon={faEye} className="eye"/><p>100</p>

    <FontAwesomeIcon icon={faHeart} className="heart" /><p>100</p>
  </div>
</section>
<br></br>
<hr></hr>
<div className="post-info-box">
  <p>500 Post</p>
</div>


<section className="like-section">
<div className="reaction-icons">
  <div className="like-heading">
    <h2>A Changing World Order</h2>
    <FontAwesomeIcon icon={faThumbsUp} className="like" />
  </div>
  </div>
  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <div className="metadata">
    <div className="left-text"><span>Musing </span> by anujgosalia</div>
    <div className="right-text">August 15 • 2 mins read • 100 views</div>
  </div>
</section>

<hr></hr><br></br><br></br>
<section className="like-section">
<div className="reaction-icons">
  <div className="like-heading">
    <h2>A Changing World Order</h2>
    <FontAwesomeIcon icon={faThumbsUp} className="like" />
  </div>
  </div>
  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <div className="metadata">
    <div className="left-text"><span>Musing </span> by anujgosalia</div>
    <div className="right-text">January 21 • 2 mins read • 150 views</div>
  </div>
</section>

<hr></hr><br></br><br></br>
<section className="like-section">
<div className="reaction-icons">
  <div className="like-heading">
    <h2>A Changing World Order</h2>
    <FontAwesomeIcon icon={faThumbsUp} className="like" />
  </div>
  </div>
  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <div className="metadata">
    <div className="left-text"><span>Musing </span> by anujgosalia</div>
    <div className="right-text">November 18 • 2 mins read • 200 views</div>
  </div>
</section>
      </main>
    </div>

 );
}

export default App;