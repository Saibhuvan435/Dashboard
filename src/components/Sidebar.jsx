import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
          <li className='h123'><img src="../home.png" alt="" /> Home</li>
          <li className='h123'><img src="../explore.png" alt="" /> Explore</li>
          <li className='h123'><img src="../learn.png" alt="" /> Learn</li>
          <li className='h123'><img src="../degree.png" alt="" /> Achieve</li>
          <li className='h123'><img src="../practice.png" alt="" /> Practice</li>
          <li className='h123'><img src="../project.png" alt="" /> Projects</li>
          <li className='h123'><img src="../career.png" alt="" /> Career</li>
          <li className='h123'><img src="../mentor.png" alt="" /> Mentorship</li>
          <li className='h123'><img src="../blogs.png" alt="" /> Blogs</li>
          <li className='h123'><img src="../community.png" alt="" /> Community</li>
        </ul>
      <div className="social-links">
        <div className="link-text">Connect with us</div>
        <div className="links">
            <a href="#"><img className="link" src="../whatsapp.png" alt="" /></a>
            <a href="#"><img className="link" src="../linkedin.png" alt="" /></a>
            <a href="#"><img className="link" src="../instagram.png" alt="" /></a>
            <a href="#"><img className="link" src="../discord.png" alt="" /></a>
            <a href="#"><img className="link" src="../youtube.png" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;