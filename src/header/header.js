import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
          var NewComponent = React.createClass({
      <header className="s-header">
        <header id="home">
        <div className="row s-header__nav-wrap">
        <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <h3>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               </div>
          <nav className="s-header__nav">
            <ul>
              <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Say Hello</a></li>
            </ul>
          </nav>
          </div>
        </div> {/* end row */}
        <a className="s-header__menu-toggle" href="#0" title="Menu">
          <span className="s-header__menu-icon" />
        </a>

        
        </header>
         </header>
  }</React.Fragment>
    );
  
};
};
export default header;