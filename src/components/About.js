import React from 'react';
import './css/About.css';

export default function About() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src="./images/mbk.jpg" alt="" className="img-mbk" />
                <div>
                    <p>
                        My name is Klaus Mistlberger.
                    </p>
                    <p>
                        I'm seeking a career change to a software development position with focus on JavaScript, Node JS and React.
                    </p>
                    
                    <p>
                        I'm a deeply focused software engineer with a keen perception, on the lookout for the slickest solution.
                        Driven self-starter and fast learner who has experience in training new employees. Highly stress-resistant and always delivering on time.
                    </p>
                    <p>
                        After years of experience in post-production and advertising, I know what it means to spare no effort for achieving goals in time. I've been working with my clients on several award-winning ad-campaigns for e.g. Erste Bank, Opel and Coca Cola and also supervising international, multilingual projects for e.g. Gardena, Parship and DM.
                    </p>
                    <p>
                        For more details on my skillset check out my <a href="https://drive.proton.me/urls/0VC6383VVG#LkccBQNv7VOM" target="_blank" rel="noreferrer">Resumé</a>.
                    </p>
                </div>
            </div>
            
        </div>
    );
};