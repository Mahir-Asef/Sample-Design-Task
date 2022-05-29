import React from 'react';
import './Feedback.css'

const Feedback = () => {
    return (
        <div>
            <div className='feed'>
                <h2>FeedBack</h2>
            </div>
            <div style={{backgroundColor:'#14141F'}}>
                <div className="email">
                    <div>
                        <img src="https://i.ibb.co/LP0vCYj/1.png" alt="" />
                    </div>
                    <div >
                        <div className='inpu'>
                            <h1>Share Your FeedBack</h1>
                            <form >
                               
                                <input placeholder='Your Name' type="text" name="user_name" /> <br></br>
                                
                                <input placeholder='Your Email' type="email" name="user_email" /> <br></br>
                                <input placeholder='Subject' type="text" name="subject" /> <br></br>
                               
                                <textarea placeholder='FeedBack' name="message" /> <br></br>
                                <input style={{color:'white', borderRadius:'30px', fontWeight:'500'}} type="submit" value="Send Message" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;