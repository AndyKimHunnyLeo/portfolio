import React from 'react'
import './projects.css';
import movie from "../images/movie_app.png"
import momentum from "../images/Momentum.png"
import paintJS from "../images/paintJS.png"

class projects extends React.Component {
    componentDidMount() {
        document.title = "Projects | Andy Kim"
    }
    render() {
        return <div class="proj" >
            <div class="intro">
                <div class="proj_skills_list">
                    <h1 class="proj_skill">SKILLS</h1>
                    <span class="proj_title" >FRONT-END</span>
                    <div class="proj_icons" >
                        <div class="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/HTML.png" alt="HTML" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">HTML</span>
                        </div>
                        <div class="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/CSS.png" alt="CSS" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">CSS</span>
                        </div>
                        <div class="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/JavaScript.png" alt="JavaScript" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">JavaScript</span>
                        </div>
                        <div class="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/React.png" alt="React" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">React</span>
                        </div>
                    </div>
                    <span class="proj_title" >BACK-END</span>
                    <div class="proj_icons" >
                        <div class="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/Node.png" alt="Node.js" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">Node.js</span>
                        </div>
                        <div class="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/MySQL.png" alt="MySQL" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">MySQL</span>
                        </div>
                        <div class="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/MongoDB.png" alt="MongoDB" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">MongoDB</span>
                        </div>
                    </div>
                    <span class="proj_title" >OTHERS</span>
                    <div class="proj_icons" >
                        <div class="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/Java.png" alt="Node.js" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">Java</span>
                        </div>
                        <div class="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/C.png" alt="MySQL" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">C</span>
                        </div>
                        <div class="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/Cplusplus.png" alt="MongoDB" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">C++</span>
                        </div>
                        <div class="proj_align_icon">
                            <img src="https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png" alt="MongoDB" class="proj_fe_icon"></img>
                            <span class="proj_fe_name">Firebase</span>
                        </div>
                    </div>
                    <div class="proj_proj">
                        <span class="proj_proj_name">Projects</span>
                        <span class="proj_title">web projects</span>
                        <img src={movie} alt="MongoDB" class="proj_img"></img>
                        <div class="proj_proj_intro">
                            <div class="proj_proj_title">
                                MOVIE WORLD
                                <div>
                                    <a href="https://polarmushroom.github.io/movie_app/     " target="_blank" rel="noopener noreferrer" class="proj_button">DEMO</a>
                                    <a href="https://github.com/PolarMushroom/movie_app" target="_blank" rel="noopener noreferrer" class="proj_button">CODE</a>
                                </div>
                            </div>
                            <span class="proj_text">I developed a web application which offers Movie and TV show information using The MOVIE DB. The Movie page shows Now Playing, Upcoming Movies, and Popular movies. The TV show page offers Airing Today, Top Rated Shows, and Popular shows. Each Movie and each TV show has their own detail page, which offers program information.</span>
                            <div class="proj_proj_skills">
                                <span class="skill_name">react</span>
                                <span class="skill_name">react router</span>
                                <span class="skill_name">style components</span>
                                <span class="skill_name">axios</span>
                            </div>
                        </div>

                        <img src={momentum} alt="Momentum" class="proj_img"></img>
                        <div class="proj_proj_intro">
                            <div class="proj_proj_title">
                                Momentum
                                <div>
                                    <a href="https://polarmushroom.github.io/Momentum/" target="_blank" rel="noopener noreferrer" class="proj_button">DEMO</a>
                                    <a href="https://github.com/PolarMushroom/Momentum" target="_blank" rel="noopener noreferrer" class="proj_button">CODE</a>
                                </div>
                            </div>
                            <span class="proj_text">I developed Momentum replica, Google Chrome app, which allows users to input to-do list with locaiton. A basic gelocation setting with weather information is built by allowing users to convert temperature. All data written by users are saved on local storage.</span>
                            <div class="proj_proj_skills">
                                <span class="skill_name">HTML</span>
                                <span class="skill_name">CSS3</span>
                                <span class="skill_name">JavaScript</span>
                            </div>
                        </div>
                        <img src={paintJS} alt="Momentum" class="proj_img"></img>
                        <div class="proj_proj_intro">
                            <div class="proj_proj_title">
                                PaintJs
                                <div>
                                    <a href="https://polarmushroom.github.io/PaintBoard-Js/" target="_blank" rel="noopener noreferrer" class="proj_button">DEMO</a>
                                    <a href="https://github.com/PolarMushroom/PaintBoard-Js" target="_blank" rel="noopener noreferrer" class="proj_button">CODE</a>
                                </div>
                            </div>
                            <span class="proj_text">I developed PaintJs, use JavaScript canvas API, which allows user to create their own beautiful logo/picture for themself. User can change background-colours, adjust thickness of canvas and save to user's local storage.</span>
                            <div class="proj_proj_skills">
                                <span class="skill_name">HTML</span>
                                <span class="skill_name">CSS3</span>
                                <span class="skill_name">JavaScript</span>
                                <span class="skill_name">Canvas API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}

export default projects;