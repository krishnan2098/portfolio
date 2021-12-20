import React from 'react';
import * as AiIcons from 'react-icons/ai';
import './contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="c-left">
                <div className="form-wrapper">
                    <form action="" onSubmit="">
                        <div class="form">
                            <div className='fo-txt-item'><span>Let's talk!</span></div>
                            <div className='fo-desc'><span>To request a quote or want to meet up for coffee contact me directly or fill out the form and I will get back to you soon.</span></div>
                            <div className='fo-input-field'>
                                <input class="input100" type="text" name="fullName" placeholder='Name' required />
                            </div>
                            <div className='fo-input-field'>
                                <input class="input100" type="text" name="email" placeholder='Email Address' required />
                            </div>
                            <div className='fo-textarea-field'>
                                <textarea rows={3} name="message" placeholder='Type your message here ...' required></textarea>
                            </div>
                            <div>
                                <button>SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="c-right">
                <div className="socials-wrapper">
                    <div class="socials">
                        <div className='fo-txt-item'><span>Find me on</span></div>
                        {/* <div className='fo-desc'><span>To request a quote or want to meet up for coffee contact me directly or fill out the form and I will get back to you soon.</span></div> */}
                        <div className='row'>
                            <div className='fo-social-icon'><AiIcons.AiFillLinkedin size={40} /></div>
                            <div className='fo-social-col'></div>
                            <div className='fo-social-value'><span>/ sankararaman-k</span></div>
                        </div>
                        <div className='row'>
                            <div className='fo-social-icon'><AiIcons.AiFillGithub size={40} /></div>
                            <div className='fo-social-col'></div>
                            <div className='fo-social-value'><span>@ krishnan2098</span></div>
                        </div>
                        <div className='row'>
                            <div className='fo-social-icon'><AiIcons.AiFillTwitterCircle size={40} /></div>
                            <div className='fo-social-col'></div>
                            <div className='fo-social-value'><span>@ krishnan2098</span></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;
