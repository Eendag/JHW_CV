import React, { Component } from 'react'
import profilePhoto from '../images/ProfilePhoto.png'
import './About.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import VisibilitySensor from "react-visibility-sensor";

export default class About extends Component {
    render() {
        return (
            <>
                <section class="hero" id="about">
                    <img
                        src={profilePhoto}
                        alt="ProfilePhoto"
                        loading="lazy"
                        class="hero-img" />
                    <div class="bio">
                        <p class="bio-text">
                            I am a full time information technology student living in Potchefstroom.
                            I do photography for events on a freelance basis. 
                            I adapt easily to new environments and people.                        
                        </p>
                    </div>

                </section>
                <VisibilitySensor>{({ isVisible }) => {
                    const cperc = isVisible ? 80 : 0;
                    const pperc = isVisible ? 70 : 0;
                    const jperc = isVisible ? 65 : 0;
                    const rperc = isVisible ? 60 : 0;
                    return (
                        <><section class="hero" id="about">
                            <div style={{ width: 200, height: 200 }}>
                                <h1>Languages</h1>
                            </div>
                            <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar value={cperc} text='C#' styles={buildStyles({ textColor: '#fff', pathTransitionDuration: 1.5}) } />
                            </div>
                            <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar value={pperc} text='Python' styles={buildStyles({ textColor: '#fff', pathTransitionDuration: 1.5 })} />
                            </div>
                            <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar value={jperc} text='Java' styles={buildStyles({ textColor: '#fff', pathTransitionDuration: 1.5 })} />
                            </div>
                            <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar value={rperc} text='React' styles={buildStyles({ textColor: '#fff', pathTransitionDuration: 1.5 })} />
                            </div>
                        </section></>);
                }}
                </VisibilitySensor>
                <VisibilitySensor>{({ isVisible }) => {
                    const lperc = isVisible ? 95 : 0;
                    const vperc = isVisible ? 80 : 0;
                    const iperc = isVisible ? 75 : 0;
                    const aperc = isVisible ? 55 : 0;
                    return (
                        <><section class="hero" id="about">
                            <div style={{ width: 200, height: 200 }}>
                            <h1>Software</h1>
                            </div>
                            <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar value={lperc} text='Lightroom' styles={buildStyles({ textColor: '#fff', pathTransitionDuration: 1.5 })} />
                            </div>
                            <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar value={vperc} text='VS Code' styles={buildStyles({ textColor: '#fff', pathTransitionDuration: 1.5 })} />
                            </div>
                            <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar value={iperc} text='IntelliJ' styles={buildStyles({ textColor: '#fff', pathTransitionDuration: 1.5 })} />
                            </div>
                            <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar value={aperc} text='Azure' styles={buildStyles({ textColor: '#fff', pathTransitionDuration: 1.5 })} />
                            </div>
                        </section></>);
                }}
                </VisibilitySensor>
                </>
            )
    }
}
