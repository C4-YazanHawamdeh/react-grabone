
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';
import { BsYoutube } from 'react-icons/bs';


const Footer=()=>{

    return(
<>
<div className='footer'>
<div className="row ">
    <div className="col-lg-3">
        <h6>Follow us on</h6>
        <div>
        <BsFacebook className='icon' size={27}/>
        <AiFillTwitterCircle className='icon' size={29}/>
        <TiSocialInstagram className='icon' size={32}/>
        <BsYoutube className='icon' size={32}/>

        </div>
        <h6 style={{marginTop:'10px'}}>Get app exclusive deals</h6>
        <button style={{marginTop:'10px'}} class="btn btn-primary " type="button">Download our App</button>

    </div>
    <div className="col-lg-2">
    <h6>GrabOne</h6>
    <div className="grabOneDetails">
                                <p>Contact Us</p>
                                <p>About Us</p>
                                <p>Terms & Returns</p>
                                <p>Blog</p>
                                <p>Gift Cards</p>
                               
                                </div>

    </div>
    <div className="col-lg-2">
    <h6>My Account</h6>
    <div className="grabOneDetails">
                                <p>My Account</p>
                                <p>My Cart</p>
                                <p>My Coupons</p>
                                <p>FQA</p>
                               
                                </div>

    </div>
    <div className="col-lg-2">
    <h6>Merchants</h6>
    <div className="grabOneDetails">
                                <p>Run a Deal</p>
                                <p>Merchant Center</p>
                                
                               
                                </div>
    </div>
    <div className="col-lg-3">
    <h6>Newsletter Signup</h6>
    
        <p className='news'>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
        <div class="input-group col-sm-12 col-lg-6  ">
  <input type="text" class="form-control" placeholder="Enter Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-primary btn1" type="button">Subscribe</button>
  </div>
</div>
    </div>
</div></div>
</>
    )
}
export default Footer