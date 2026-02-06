import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutRishi extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about rishabh" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="rishabh' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="rishabh' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="rishabh' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="rishabh's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutRishi;

export const displayAboutRishi = () => {
    return <AboutRishi />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Rishabh Singh Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">rishabh singh</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">CyberSecurity Researcher!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">UnderGraduate Student</span> currently pursuing Btech in EEE, and now I'm looking for full-time CyberSecurity roles! ( Hit me up <a className='text-underline' href='mailto:berishabhsingh@gmail.com'><u>berishabhsingh@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building">I enjoy delving into cybersecurity research and practicing ethical hacking techniques. </li>
                <li className=" mt-3 list-time">When I'm not immersed in cybersecurity, you'll find me diving into Movies, exploring CyberSecurity forums, or watching informative CyberSecurity channels like<a href="https://www.youtube.com/@davidbombal" target="_blank" rel="noreferrer"> David Bombal's videos.</a></li>
                <li className=" mt-3 list-star"> My interests extend to utilizing electronic components and designing web applications.</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Motihari College Of Engineering Motihari
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2025 - 2029</div>
                    <div className=" text-sm md:text-base">Bachelor in Electrical and Electronics Engineering</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup> (CBSE)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 – 2024</div>
                    <div className=" text-sm md:text-base">Physics, Chemistry, Mathematics (PCM)</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                Proficient in cybersecurity tools and techniques, including network security, threat detection, and vulnerability assessment.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> Skilled in ethical hacking methodologies, such as <strong className="text-ubt-gedit-orange">penetration testing, brute force attacks, and privilege escalation.!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center gap-2 items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-burp%20suite-%230D76B8?style=flat&logo=burpsuite&logoColor=FFFFFF&labelColor=%23EF7B42&color=%23EF7B42" alt="rishabh burpsuite" />  
                        <img className="m-1" src="https://img.shields.io/badge/-Metasploit-%230D76B8?style=flat&logo=metasploit&logoColor=000000&labelColor=%2318608C&color=%230D76B8" alt="rishabh metasploit" />  
                        <img className="m-1" src="https://img.shields.io/badge/-arduino-%23009D9C?style=flat&logo=arduino&logoColor=000000&labelColor=%23009D9C&color=%23009D9C" alt="rishabh arduino" />
                        <img className="m-1" src="https://img.shields.io/badge/-wireshark-%23FFFFFF?style=flat&logo=wireshark&logoColor=&labelColor=%23&color=%2311358E" alt="rishabh wireshark" />
                        <img className="m-1" src="https://img.shields.io/badge/-Splunk-%23FFFFFF?style=flat&logo=splunk&logoColor=&labelColor=%23&color=%23EF5130" alt="rishabh Splunk" />
                        <img src="https://img.shields.io/badge/-Github-%23000000?style=flat&logo=github&logoColor=%23ffffff" alt="rishabh github" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start gap-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="rishabh python" />
                        <img className=" m-1" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="rishabh HTML" />
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="rishabh Javascript" />
                        
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="rishabh linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
  return (
    <>
      <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <div className="border border-dashed border-gray-400 border-opacity-40 rounded-lg px-6 py-8 text-center max-w-md">
          <div className="text-xl md:text-2xl font-semibold text-gray-100">
            Projects will be updated soon
          </div>
          <div className="mt-2 text-sm md:text-base text-gray-300">
            Currently refining and adding new work.
          </div>
          <div className="mt-5 text-xs text-gray-400 font-mono">
            // under development
          </div>
        </div>
      </div>
    </>
  );
}

function Resume() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="border border-dashed border-gray-400 border-opacity-40 rounded-lg p-6 md:p-10 text-center max-w-lg mx-4">
        <div className="text-2xl md:text-3xl font-semibold text-gray-100">
          Resume not uploaded yet
        </div>
        <div className="mt-2 text-sm md:text-base text-gray-300">
          PDF will be uploaded soon.
        </div>

        <div className="mt-6 text-xs text-gray-400 font-mono">
          // TODO: add ./files/rishabh-singh-resume.pdf
        </div>
      </div>
    </div>
  );
}
