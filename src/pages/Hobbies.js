import React, { Component } from 'react'
import './Hobbies.css'
import { Timeline } from 'react-twitter-widgets'
import bloom from '../images/gallery/bloom.jpg'
import butterfly from '../images/gallery/butterfly.jpg'
import grass from '../images/gallery/grass.jpg'
import leaf from '../images/gallery/leaf.jpg'
import pengoo from '../images/gallery/pengooo.jpg'
import ship from '../images/gallery/ship.jpg'

export default class Hobbies extends Component {
    render() {
        return (
            <div>
                <div class='gallery-container'>
                <h1>My Gallery</h1>
                <div class='gallery'>
                    <img
                        src={bloom}
                        alt="Bloom"
                        loading="eager"
                        class="gallery-img" />
                    <img
                        src={butterfly}
                        alt="butterfly"
                        loading="eager"
                        class="gallery-img" />
                    <img
                        src={grass}
                        alt="grass"
                        loading="eager"
                        class="gallery-img" />
                </div>
                <div class='gallery'>
                    <img
                        src={leaf}
                        alt="leaf"
                        loading="eager"
                        class="gallery-img" />
                    <img
                        src={pengoo}
                        alt="pengoo"
                        loading="eager"
                        class="gallery-img" />
                    <img
                        src={ship}
                        alt="ship"
                        loading="eager"
                        class="gallery-img" />
                </div>
                </div>
                <div class="twitter-container">
                    <h1>Photography feed</h1>
                    <Timeline
                        dataSource={{ sourceType: "profile", screenName: "photography" }}
                        options={{ theme: "dark", width: "400", height: "800" }}
                    />
                </div>
            </div>
        )
    }
}
