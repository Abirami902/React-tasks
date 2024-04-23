import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Netflix() {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
  
    return (
        <div className='nbg1'>
            <h3 className='faq1'>Frequently Asked Questions</h3><br/> 
            <button type="button" className="btn btn-dark mb-2" onClick={toggleDetails}>What is Netflix?</button><br/>
            {showDetails && <p>Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>}
            
            <button type="button" className="btn btn-dark mb-2" onClick={toggleDetails}>How much does Netflix cost?</button><br/>
            {showDetails && <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>}
            
            <button type="button" className="btn btn-dark mb-2" onClick={toggleDetails}>Where can I watch?</button><br/>
            {showDetails && <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>}
            
            <button type="button" className="btn btn-dark mb-2" onClick={toggleDetails}>How do I cancel?</button><br/>
            {showDetails && <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>}
            
            <button type="button" className="btn btn-dark mb-2" onClick={toggleDetails}>What can i watch on Netflix?</button><br/>
            {showDetails && <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>}
           
            <button type="button" className="btn btn-dark mb-2" onClick={toggleDetails}> is Netflix good for kids?</button><br/>
            {showDetails && <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
             Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>}
            
            </div>
    );
}

export default Netflix;




