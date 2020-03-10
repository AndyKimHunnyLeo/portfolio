import React from 'react'
import "./home.css"

class home extends React.Component {
    componentDidMount() {
        document.title = "Home | Andy Kim"
    }
    render() {
        return < div class="home_comp" >

            <div class="home_comp1">
                <div class="home_bg"></div>
                {/* <div class="home_title"> */}
                <p class="home_name">Andy Kim</p>
                <p class="home_jobtitle">Software Enginner</p>
                {/* </div> */}

            </div>


            <div class="intro">
                <p class="intro_comps">
                    <h2 class="qw">Hi! I'm Andy Kim. I'm a Software Engineer based in the New Zealand.</h2>
                    <h4 class="content">I'm interested in all aspects of software development. Recently, my passion lies in the web application development including both the front end and the back end. I fell in love with the modern JavaScript.
                <br></br><br></br>Since I was a senior in college, I've liked mobile wireless networks as well. Therefore, I have read new telecommunication technologies such as next generation wireless networks.
                <br></br><br></br>Outside the realm of computers, I enjoy car detailing as a car enthusiast. I research how to make the car cleaner. I also like traveling all over the world. One of my dreams is to visit all the national parks in the United States.
                <br></br><br></br>Previously, I taught code to undergraduate students in college, worked as a software test engineer for LG and developed web applications as a software engineer intern. I also hold a Bachelor's and Master's Degree in computer science.</h4>
                </p>

            </div>
        </div >
    }
}

export default home;