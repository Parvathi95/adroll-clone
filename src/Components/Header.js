import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand pl-5" href="#"><img src="https://th.bing.com/th/id/OIP.jTeZ_MHOMNMROxzzYi6gMwHaGt?w=175&h=180&c=7&r=0&o=5&pid=1.7" className='logo' alt="logo" /> <b>AdRoll</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Why AdRoll?
          </a>
          <ul className="dropdown-menu part" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Why AdRoll</a></li>
            <li><a className="dropdown-item" href="#">Managed Services</a></li>
            <li><a className="dropdown-item" href="#">Case Studies</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marketing Platform
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <ul>
                <li><a className="dropdown-item" href="#">Marketing Platform</a></li>
                <li><a className="dropdown-item" href="#">Audience & Segmentation</a></li>
                <li><a className="dropdown-item" href="#">Customer Privacy Protection</a></li>
            </ul>
            <ul>
                <li><a className="dropdown-item" href="#">Campaigns</a></li>
                <li><a className="dropdown-item" href="#">Retargeting Ads</a></li>
                <li><a className="dropdown-item" href="#">Brand Awareness Ads</a></li>
            </ul>
            <ul>
                <li><a className="dropdown-item" href="#">Marketing Channels</a></li>
                <li><a className="dropdown-item" href="#">Display Advertising</a></li>
                <li><a className="dropdown-item" href="#">Video Advertising</a></li>
                <li><a className="dropdown-item" href="#">Native Advertising</a></li>
                <li><a className="dropdown-item" href="#">Email Marketing</a></li>
            </ul>
            <ul>
                <li><a className="dropdown-item" href="#">Connected Channels</a></li>
                <li><a className="dropdown-item" href="#">Facebook Advertising</a></li>
                <li><a className="dropdown-item" href="#">Instagram Advertising</a></li>
                <li><a className="dropdown-item" href="#">TikTok Advertising</a></li>
                <li><a className="dropdown-item" href="#">Pinterest Advertisting</a></li>
                <li><a className="dropdown-item" href="#">Google Advertisting</a></li>
            </ul>
            <ul>
                <li><a className="dropdown-item" href="#">Analytics</a></li>
                <li><a className="dropdown-item" href="#">Cross-Channel Performance</a></li>
                <li><a className="dropdown-item" href="#">Cross-Channel Attribution</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Ecommerce
          </a>
          <ul className="dropdown-menu part" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">AdRoll for ecommerce</a></li>
            <li><a className="dropdown-item" href="#">Shopify</a></li>
            <li><a className="dropdown-item" href="#">Shopify Plus</a></li>
            <li><a className="dropdown-item" href="#">WooCommerce</a></li>
            <li><a className="dropdown-item" href="#">Wix</a></li>
            <li><a className="dropdown-item" href="#">BigCommerce</a></li>
            <li><a className="dropdown-item" href="#">Magento</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pricing</a>
        </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <ul>
            <li><a className="dropdown-item" href="#">Marketing Resources</a></li>
            <li><a className="dropdown-item" href="#">Resource Library</a></li>
            <li><a className="dropdown-item" href="#">AdRoll Blog</a></li>
            <li><a className="dropdown-item" href="#">Holiday Marketing Resources</a></li>
            <li><a className="dropdown-item" href="#">What is Retargeting?</a></li>
            <li><a className="dropdown-item" href="#">Marketing Glossary</a></li>
            <li><a className="dropdown-item" href="#">State of Digital Marketing Report</a></li>
            </ul>
            <ul>
            <li><a className="dropdown-item" href="#">Free Tools</a></li>
            <li><a className="dropdown-item" href="#">Return On Ad Spend Calculator</a></li>
            <li><a className="dropdown-item" href="#">AdRoll UTM Link Builder</a></li>
            <li><a className="dropdown-item" href="#">Discount Profit Margin Calculator</a></li>
            </ul>
            <ul>
            <li><a className="dropdown-item" href="#">Community</a></li>
            <li><a className="dropdown-item" href="#">Growth Guerilla Collective</a></li>
            <li><a className="dropdown-item" href="#">Small Business Shopping <br/>List</a></li>
            <li><a className="dropdown-item" href="#">Events</a></li>
            </ul>
            <ul>
            <li><a className="dropdown-item" href="#">Customer Support</a></li>
            <li><a className="dropdown-item" href="#">Getting Started</a></li>
            <li><a className="dropdown-item" href="#">Help Center</a></li>
            <li><a className="dropdown-item" href="#">Research Panel</a></li>
            </ul>
          </div>
        </li>
      </ul>
        <div className="btns">
        <a  href="#" className='log'>Log in</a>
        <button className="get" type="submit">GET STARTED</button>
        </div>
    </div>
  </div>
</nav>
  )
}
export default Header