import React , {useEffect} from 'react'
import '../css/nav.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

    function animation(){
      var tabsNewAnim = $('#navbarSupportedContent');
      var activeItemNewAnim = tabsNewAnim.find('.active');
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
      $("#navbarSupportedContent").on("click","li",function(e){
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          "top":itemPosNewAnimTop.top + "px", 
          "left":itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
      });
    }
  
    useEffect(() => {
      
      animation();
      $(window).on('resize', function(){
        setTimeout(function(){ animation(); }, 500);
      });
      
    }, []);
  
    
  return (
 <>    

 <div className="demo">
   <div className="content">
      <div id = "large-header" className="large-header">
         <canvas id="demo-canvas"></canvas>
         <h1 className="main-title"><span className="thin">Explore</span> World</h1>
     
           </div>
   </div>
     </div>

    <div className="wrapper">
     <div className="typing-demo">
       Welcome To My World.....
     </div>
          </div>
      {/*    
        <nav className="navbar navbar-expand-lg navbar-mainbg" >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item active">
                    <a className="nav-link" href="javascript:void(0);"><i className="fas fa-tachometer-alt"></i>Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-address-book"></i>Address Book</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-clone"></i>Components</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-calendar-alt"></i>Calendar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-chart-bar"></i>Charts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i class="far fa-copy"></i>Documents</a>
                </li>
            </ul>
        </div>
    </nav> */}
      <nav className="navbar navbar-expand-lg navbar-mainbg">
    
    <NavLink className="navbar-brand navbar-logo" to="/" exact>
      HaCker
    </NavLink>
  
  
    <button 
      className="navbar-toggler"
      onClick={ function(){
        setTimeout(function(){ animation(); });
      }}
      type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars text-white"></i>
    </button>

    <div 
      className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
          
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i 
              className="fas fa-tachometer-alt">
              </i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              <i 
              className="far fa-address-book">
              </i>About
            </NavLink> 
          </li>

          <li className="nav-item">
              <NavLink className="nav-link" to="/Service" exact>
              <i 
              className="far fa-clone">
              </i>Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/testimonial" exact>
              <i 
              className="far fa-chart-bar">
              </i>Testimonial
            </NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="" exact>
              <i 
              className="far fa-copy">
              </i>LOGIN
            </NavLink>
          </li>
      </ul>
    </div>
</nav>
</>
  );
}

export default Navbar;

