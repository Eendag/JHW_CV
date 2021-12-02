import React, { Component } from 'react'
import './Experience.css'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <div class='timeline-container'>
                    <div class='timeline-item'>
                        <div class='timeline-item-content'>
                            <span class='tag' style={{background:"purple"}}>Education</span>
                            <time>January 2019 - Current</time>
                            <p>BSc Information Technology<br/>
                            North-West University Potchefstroom</p>
                        </div>
                    </div>
                    <div class='timeline-item'>
                        <div class='timeline-item-content'>
                            <span class='tag' style={{background:"darkred"}}>Work</span>
                            <time>August 2019 - November 2019</time>
                            <p>Efundi Help Desk Assistant<br/>
                            North-West University Potchefstroom</p>
                        </div>
                    </div>
                    <div class='timeline-item'>
                        <div class='timeline-item-content'>
                            <span class='tag' style={{background:"darkred"}}>Work</span>
                            <time>January 2020 - Current</time>
                            <p>Freelance Events Photographer</p>
                        </div>
                    </div>
                    <div class='timeline-item'>
                        <div class='timeline-item-content'>
                            <span class='tag'style={{background:"darkred"}}>Work</span>
                            <time>January 2021 - Current</time>
                            <p>Tutor<br/>
                            Programming & Physics</p>
                        </div>
                        <span class="arrow"></span>
                    </div>
                </div>
                
            </div>
        )
    }
}
