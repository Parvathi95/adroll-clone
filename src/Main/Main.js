import React from 'react'
import './Main.css'
import { Col,Row } from 'react-bootstrap'
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import {FaArrowRight} from 'react-icons/fa'


const Main = () => {
  return (
   <div>
    <section className='homepage'>
        <div className='home-div'>
       <p> Learn how to optimize your webpages and ad creative at our upcoming workshop 👀 <a href="#">Register link <FaArrowRight/></a> </p>
        </div>
    <div className="container">
    <div className="row">
        <div className="col-md-6 home">
            <h1>Smaller budgets need <br/> smarter dollars</h1>
            <p style={{padding:"3px"}}>Create, manage, and analyze your display, Facebook, Instagram, Pinterest, TikTok, and email campaigns from a single platform. Adroll helps marketers do more with less.</p>
            <div className="buttons">
            <button className='button' style={{backgroundColor:"blueviolet"}}>GET STARTED</button>
            <button className='button' style={{backgroundColor:"rgb(12, 174, 214)",marginLeft:"1rem"}}>GET IN TOUCH</button>
            </div>
        </div>
        <div className="col-md-6 home">
            <img src="https://www.adroll.com/assets/img/homepage/hero-machine.png?format=jpg&auto=webp&width=576" alt="home-img" className='home-img-1' />
        </div>
    </div>
    </div>
   </section>
   <section>
    <div className="container">
    <div className="row">
        <div className="col-md-6 middle-1">
          <h3>AdRoll works for the  
            <p><a href="#" className='one'>one-person marketing team.</a></p></h3>
          <p>Our industry-first automation builder gives you full control of campaigns across display, social, and email-- all from one place.</p>
          <a href="#" className='explore'>Explore automation builder <FaArrowRight/></a>
        </div>
        <div className="col-md-6 middle-1">
            <img src="https://www.adroll.com/assets/img/ecommerce-marketing/img-automation_studio.png?format=jpg&auto=webp&width=400" alt="img" className='home-img-2'/>
        </div>
    </div>
    </div>
    <div className='text-img'>
     <img src="https://www.adroll.com/assets/img/logos/lounge.png?format=png&auto=webp&width=209" alt="text" />
    <img src="https://www.adroll.com/assets/img/logos/topo-designs.png?format=png&auto=webp&width=209" alt="text" />
    <img src="https://www.adroll.com/assets/img/logos/peyton-jewelry.png?format=png&auto=webp&width=209" alt="text" />
    <img src="https://www.adroll.com/assets/img/logos/shady-rays.png?format=png&auto=webp&width=209" alt="text" />
    <img src="https://www.adroll.com/assets/img/logos/exploading-kittens.png?format=png&auto=webp&width=209" alt="text" />
    <img src="https://www.adroll.com/assets/img/logos/head-kandy.png?format=png&auto=webp&width=209" alt="text" />
    </div>
   </section>
   <section className='home-3'>
   <div className="container">
    <div className="row">
        <div className="col-md-6 middle-2">
            <img src="https://www.adroll.com/assets/img/homepage/customers-find.png?format=png&auto=webp&width=3980" alt="img" className='home-img-2'/>
        </div>
        <div className="col-md-6 middle-2">
          <h3>For 15 years, we've been the leader in helping our customers find their best customers</h3>
          <p>The AdRoll platform is powered by 15+ years of data from hundreds of thousands of brands and billions of shoppers. Let our expertise find the right customers for your business.</p>
          <a href="#" className='explore'>Learn more<FaArrowRight/></a>
        </div>
    </div>
    </div>
   </section>
   <section className='home-4'>
   <div className="container">
    <div className="row">
        <div className="col-md-6 middle-2">
          <h3>Save time and energy by running all your campaigns across millions of websites and mobile apps - from one place</h3>
          <p>When we say one-stop shop, we mean one-stop. Launch, pause, and edit ad campaigns across all the places you want to advertise, plus use that data to see your campaigns holistically and make improvements.</p>
          <a href="#" className='explore'>Explore social ads manager<FaArrowRight/></a>
        </div>
        <div className="col-md-6 middle-2">
            <img src="https://www.adroll.com/assets/img/homepage/save-time.png?format=png&auto=webp&width=398" alt="img" className='home-img-2'/>
        </div>
    </div>
    </div>
   </section>
   <section>
   <div className="container">
    <div className="row">
        <div className="col-md-6 middle-2">
            <img src="https://www.adroll.com/assets/img/homepage/correct-choices.png?format=png&auto=webp&width=398" alt="img" className='home-img-2'/>
        </div>
        <div className="col-md-6 middle-2">
          <h3>Our retargeting and brand awareness ads make billions of correct choices every day</h3>
          <p>Our AI does what even the most savvy marketer alone cannot. Our powerful machine learning makes more predictions per second than the NASDAQ to attract the right customers to your site and get them buying again and again.</p>
          <div className="btn-2">
          <p><a href="#" className='explore'>Explore retargeting ads<FaArrowRight/></a></p>
          <p><a href="#" className='explore'>Explore brand awareness ads<FaArrowRight/></a></p>
          </div>
        </div>
    </div>
    </div>
   </section>
   <section className='home-4'>
   <div className="container">
    <div className="row">
        <div className="col-md-6 middle-2">
          <h3>Experts to manage your advertising</h3>
          <p>Want to run effective campaigns but don’t have the bandwidth to manage different platforms? AdRoll managed services can be an extension of your marketing team, providing you with a dedicated platform expert to partner with, helping you and your team achieve your marketing goals and maximize return from your campaigns.</p>
          <a href="#" className='explore'>Get the support you deserve<FaArrowRight/></a>
        </div>
        <div className="col-md-6 middle-2">
            <img src="https://www.adroll.com/assets/img/homepage/experts.png?format=png&auto=webp&width=398" alt="img" className='home-img-2'/>
        </div>
    </div>
    </div>
   </section>
   <section className='home-6'>
   <div className="container">
    <div className="row">
        <div className="col-md-6 middle-4">
         <img src="https://www.adroll.com/assets/img/homepage/logo-volcanica.png?format=png&auto=webp&width=150" alt="box-img" />
          <p>"Since last year,<b> our revenue has increased 191%, our attributed conversions 177%</b>, and our <b>engagement 33%</b>. We’re reaching and converting customers higher in the funnel."</p>
        </div>
        <div className="col-md-6 middle-4">
            <h2>AdRoll customers make</h2>
            <h1>$165B</h1>
            <span>in sales <b>every year</b></span>
        </div>
    </div>
    </div>
   </section>
   <div className='files'>
    <img src="https://images.g2crowd.com/uploads/report_medal/image/1004323/medal.svg" alt="svg" />
    <img src="https://images.g2crowd.com/uploads/report_medal/image/1004325/medal.svg" alt="svg" />
    <img src="https://images.g2crowd.com/uploads/report_medal/image/1004342/medal.svg" alt="svg" />
    <img src="https://www.g2.com/shared-assets/product-badges/users-love-us.svg" alt="svg" />
   </div>
   <section className='home-5'>
    <div>
        <h1>Increase ROI. Learn from your data.<br/> Maximize sales.</h1>
    </div>
    <div className="buttons">
                <button className='button' style={{backgroundColor:"blueviolet"}}>GET STARTED</button>
                <button className='button' style={{backgroundColor:"rgb(12, 174, 214)",marginLeft:"1rem"}}>GET IN TOUCH</button>
            </div>
   </section>
   <section>
   <Row className="row ms-5">
    
    <Col>
        <ul>
            <li><b>Why AdRoll?</b></li>
            <li>Overview</li>
            <li>Pricing</li>
            <li><b>For E-commerce Stores</b></li>
            <li>Shopify</li>
            <li>WooCommerce</li>
            <li>BigCommerce</li>
            <li>Magento</li>
   
        </ul></Col>
        <Col>
        <ul>
        <li><b>Marketing Platform</b></li>
        <li>One platform, every need</li>
            <li>Find more customers</li>
            <li>Build profitable relationships</li>
            <li>Track and improve results</li>
            <li>Protect customer data</li>
        </ul>

        <ul>
        <li><b>Marketing Recipes</b></li>
        
            <li>What are marketing recipes?</li>
            <li>Abandoned cart recovery</li>
            <li>Customer loyalty</li>
            <li>Retargeting</li>
            <li>Brand awareness</li>
       
    
        </ul></Col>
<Col>
        <ul>
        <li><b>Resources</b></li>
                
                    <li>Resource library</li>
                    <li>Blog</li>
                    <li>Community</li>
                    <li>Events</li>
                    <li>Help Center</li>
                    <li>Third-Party Cookies</li>
                    <li>AdRoll UTM Link Builder</li>
                    <li>Digital Marketing Newsletter</li>
                
        
        </ul>
        </Col><Col>
        <ul><li><b>Partners</b></li>
        <li>Overview</li>
                    <li>Agencies</li>
                    <li>Agency Directory</li>
                    <li>Partner Directory</li>
                    <li>Referral Program</li>
                    <li>API docs</li>
                </ul>
            </Col>
               <Col>
                <ul>  
                    <li><b>Company</b></li>
                    <li>About</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>NextRoll Engineering</li>
                
            </ul></Col>
            <Col className='icons'>
            <ul>
                <li>
                <a href=""><AiFillFacebook/></a>
                <a href=''><AiFillLinkedin/></a>
                <a href=''><AiFillInstagram/></a>
                <a href=''><AiFillTwitterCircle/></a>
             </li>
             <li>
                <img src="https://www.g2.com/products/adroll/widgets/stars?color=white&type=read" alt="" className='icons-img'/>
             </li>
            </ul>
            </Col>

    
</Row>
   </section>
   </div>
  )
}

export default Main



                

