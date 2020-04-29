
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

class Home extends React.Component {

    constructor(props){

        super(props);
        this.state={
            home: true,
            ourMission: false,
            people: false,
            donate: false,
            issue: false,
            approach: false,
            progress: false,
            story: false,
            request: false,
            volunteer: false,
            contact: false
        }

    }


    home(){
        window.scrollTo(0, 0);
        this.setState({
            home: true,
            ourMission: false,
            people: false,
            donate: false,
            issue: false,
            approach: false,
            progress: false,
            story: false,
            request: false,
            volunteer: false,
            contact: false
        })
    }
    ourMission(){
        window.scrollTo(0, 0);
        this.setState({
            home: false,
            ourMission: true,
            people: false,
            donate: false,
            issue: false,
            approach: false,
            progress: false,
            story: false,
            request: false,
            volunteer: false,
            contact: false
        })
    }

    people(){
        window.scrollTo(0, 0);
        this.setState({
            home: false,
            ourMission: false,
            people: true,
            donate: false,
            issue: false,
            approach: false,
            progress: false,
            story: false,
            request: false,
            volunteer: false,
            contact: false
        })
    }



    donateMoney(){
        var new_url = "http://127.0.0.1:5000/Donate"
        // window.history.pushState({"html": "index.html"},"Donate - Runners 4 Readers", new_url)
        window.scrollTo(0, 0);
        this.setState({
            home: false,
            ourMission: false,
            people: false,
            donate: true,
            issue: false,
            approach: false,
            progress: false,
            story: false,
            request: false,
            volunteer: false,
            contact: false
        })
    }


    issue(){
        window.scrollTo(0, 0);
        this.setState({
            home: false,
            ourMission: false,
            people: false,
            donate: false,
            issue: true,
            approach: false,
            progress: false,
            story: false,
            request: false,
            volunteer: false,
            contact: false
        })
    }
    approach(){
        window.scrollTo(0, 0);
        this.setState({
            home: false,
            ourMission: false,
            people: false,
            donate: false,
            issue: false,
            approach: true,
            progress: false,
            story: false,
            request: false,
            volunteer: false,
            contact: false
        })
    }
    progress(){
        window.scrollTo(0, 0);
        this.setState({
            home: false,
            ourMission: false,
            people: false,
            donate: false,
            issue: false,
            approach: false,
            progress: true,
            story: false,
            request: false,
            volunteer: false,
            contact: false
        })
    }
    story(){
        window.scrollTo(0, 0);
        this.setState({
            home: false,
            ourMission: false,
            people: false,
            donate: false,
            issue: false,
            approach: false,
            progress: false,
            story: true,
            request: false,
            volunteer: false,
            contact: false
        })
    }

    request(){
        window.scrollTo(0, 0);
        this.setState({
            home: false,
            ourMission: false,
            people: false,
            donate: false,
            issue: false,
            approach: false,
            progress: false,
            story: false,
            request: true,
            volunteer: false,
            contact: false
        })
    }
    volunteer(){
        window.scrollTo(0, 0);
        this.setState({
            home: false,
            ourMission: false,
            people: false,
            donate: false,
            issue: false,
            approach: false,
            progress: false,
            story: false,
            request: false,
            volunteer: true,
            contact: false
        })
    }
    contact(){
        window.scrollTo(0, 0);
        this.setState({
            home: false,
            ourMission: false,
            people: false,
            donate: false,
            issue: false,
            approach: false,
            progress: false,
            story: false,
            request: false,
            volunteer: false,
            contact: true
        })
    }




  render() {
        if (this.state.home === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Hero />
                <Mission />
                <GetInvolved/>
                <HomeStats donateMoney = {this.donateMoney.bind(this)}
                            issue = {this.issue.bind(this)}/>
            </div>
        );
        }
        if (this.state.ourMission === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <OurMission />
            </div>
        );
        }
        if (this.state.people === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <People/>
            </div>
        );
        }
        if (this.state.issue === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Issue/>
            </div>
        );
        }
        if (this.state.donate === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Donate />
            </div>
        );
        }
        if (this.state.approach === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Approach />
            </div>
        );
        }
        if (this.state.progress === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Progress/>
            </div>
        );
        }
        if (this.state.story === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Story/>
            </div>
        );
        }
        if (this.state.request === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Request/>
            </div>
        );
        }
        if (this.state.volunteer === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Volunteer />
            </div>
        );
        }
        if (this.state.contact === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Contact />
            </div>
        );
        }


      else{
      return(
            <div className="home">
                <Logo home = {this.home.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
            </div>
        );

      }


  }
}

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }


  render() {
        return(
            <div className="menu-container">
            <ul className= "menu">
                <NavElement name= "OUR WORK"  approach = {this.props.approach} issue = {this.props.issue} progress = {this.props.progress} subl = {["The Issue", "The Approach", "Progress"]}/>
                <NavElement name= "ABOUT US" ourMission= {this.props.ourMission} people= {this.props.people} story = {this.props.story} subl = {["Our People", "Our Mission", "Our Story"]} />
                <NavElement name= "GET INVOLVED" volunteer = {this.props.volunteer} request = {this.props.request} subl = {["Request A Medal", "Volunteer Opportunities"]}/>
            </ul>
                <ul className="menu2">
                    <NavElement name= "CONTACT US" contact = {this.props.contact}/>
                <NavElement name= "DONATE" donateMoney = {this.props.donateMoney} />
                </ul>
        </div>
        );
  }
}
class NavElement extends React.Component {

    constructor(props){
        super(props);

    }

  render() {
            if (this.props.name === "GET INVOLVED") {
                return (
                    <li className="navbar-element-sub" id = "f">
                        {this.props.name}
                        <ul className="sub" id="c">
                            <li onClick = {this.props.request}>{this.props.subl[0]} </li>
                            <li onClick = {this.props.volunteer} >{this.props.subl[1]}</li>
                        </ul>
                    </li>
                )
            }

            if (this.props.name === "ABOUT US") {
                return (
                    <li className="navbar-element-sub">
                        {this.props.name}
                        <ul className="sub" id="b">
                            <li onClick={this.props.people} >{this.props.subl[0]}</li>
                            <li onClick = {this.props.ourMission} >{this.props.subl[1]}</li>
                            <li onClick = {this.props.story} >{this.props.subl[2]}</li>
                        </ul>
                    </li>
                )
            }

            if (this.props.name === "DONATE") {
                return (
                    <li onClick = {this.props.donateMoney} className="navbar-element" id= "e">
                        {this.props.name}
                    </li>
                )
            }

            if (this.props.name === "OUR WORK") {
                return (
                    <li className="navbar-element-sub" >
                        <span>{this.props.name}</span>
                        <ul className="sub" id="a">
                            <li onClick={this.props.issue}>{this.props.subl[0]}</li>
                            <li onClick={this.props.approach}>{this.props.subl[1]}</li>
                            <li onClick={this.props.progress}>{this.props.subl[2]}</li>
                        </ul>
                    </li>
                )
            }

            else {

            return (
            <li onClick = {this.props.contact} className= "navbar-element" id = "d">
                {this.props.name}
            </li>
            )

            }

        }

}


class HomeStats extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "home-stats" >
                <h1>45 million Americans are functionally illiterate and cannot read above a fifth
grade level </h1>
                <h3>The ability to read and write is critical to success. Literacy decreases poverty,
                    lowers disease rates and improves personal well being.
                </h3>
                <div className = "button-div">
                <button onClick={this.props.donateMoney}>INSPIRE LITERACY</button>
                    <span onClick={this.props.issue}>LEARN MORE</span>
                </div>
            </div>
        )

  }
}

class HomeSolution extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "home-stats" >
                <h1>45 million Americans are functionally illiterate and cannot read above a fifth
grade level </h1>
                <h3>The ability to read and write is critical to success. Literacy decreases poverty,
                    lowers disease rates and improves personal well being.
                </h3>
                <div className = "button-div">
                <button onClick={this.props.donateMoney}>INSPIRE LITERACY</button>
                    <span onClick={this.props.issue}>LEARN MORE</span>
                </div>
            </div>
        )

  }
}

class HomeProgress extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "home-progress" >
                <h1>Our Progress </h1>
                <div className="progress-container">
                    <div className="medals">
                        <h3>650</h3>
                        <h4>MEDALS DONATED</h4>
                    </div>
                    <div className="children">
                        <h3>300</h3>
                        <h4>MOTIVATED STUDENTS</h4>
                    </div>

                </div>
            </div>
        )

  }
}

class GetInvolved extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "get-involved" >
                <h1>Get Involved </h1>
                <h3>Help motivate a young reader today</h3>
                <div className="involved-container">
                    <div className="donate-medals">
                        <h4>Have medals to donate? </h4>
                        <button onClick={this.props.donateMedals}>DONATE MEDALS</button>
                    </div>

                   <div className="donate-money">
                           <h4>Make a monetary donation</h4>
                            <button onClick={this.props.donateMoney}>DONATE MONEY</button>
                    </div>
                    <div className="donate-time">
                            <h4>Donate your time</h4>
                            <button onClick={this.props.donateMoney}>VOLUNTEER</button>
                    </div>

                    <div className="request-medal">
                        <h4>Know young readers to inspire?</h4>
                            <button onClick={this.props.donateMoney}>REQUEST A MEDAL</button>
                    </div>





                </div>
            </div>
        )

  }
}

class Hero extends React.Component {

    constructor(props){
        super(props);

    }

  render() {
        return(
            <div className="hero">
                <h1>
                    Motivating young readers one medal at a time.
                </h1>

            </div>
        )

  }
}

class Mission extends React.Component {

    constructor(props){
        super(props);

    }

  render() {
        return(
            <div className="mission">
                <h1>
                    We Are Runners 4 Readers
                </h1>
                <h3>
                We provide a simple way for individuals to gift their medals.
                We work with schools, community outreach and literacy programs to honor student's
                reading achievements by repurposing medals into achievement awards to promote
                reading.
                </h3>
            </div>
        )

  }
}

class Logo extends React.Component {

    constructor(props){
        super(props);

    }

  render() {
        return (
            <div className= "LOGO" >
                <img onClick={this.props.home} src = "/static/logo_green.png" alt="/static/logo_green.jpeg"/>
                <h1 onClick={this.props.home}>RUNNERS 4 READERS  </h1>
            </div>
        )

  }
}

class Donate extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "donate-money" >

                <Payment/>
            </div>
        )

  }
}

class Story extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "Story" >
                                <h1>Who We Are And What We Do:</h1>
                <h3>
Our dream came alive while participating in the Paczki 5K Race in Hamtramck,
Michigan. We are four active friends that enjoy the camaraderie that comes from
running, biking, kayaking and being outdoors, but understand that knowledge is power.
And that literacy is a serious problem in our community and our nation. You cannot
                    succeed if you can’t read.</h3>
            </div>
        )

  }
}

class Payment extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className = "payment">
                <div className="bg-image"></div>
                <div className= "payment-header">Give Inspiration</div>
                <div className= "payment-container">
                    <h4>Make a Donation</h4>
                    <h5>Literacy changes lives. <br/> You can help.</h5>
                    <div className="amount">
                        <label htmlFor="">I'm giving</label>
                        <div className ="input-div">
                            <input type="text" value = "$25"/>
                        </div>



                    </div>

                </div>

            </div>
        )

  }
}

class Issue extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "issue" >
                <div className = "paralax">
                    <h1>What fuels our mission? </h1>
                    <div id = "underline"> </div>
                    <div id = "info"> 45 million Americans cannot read above a fifth grade level</div>

                </div>
                <div>
                    <h2>The numbers</h2>
                    <div id = "underline-2"> </div>

                </div>
                <div className = "paralax-2">

                    <div id="stats-a" className="js-slidein" >
                        <span id = "span-a"> 32 million </span>  <span id = "normal"> adults cannot read – that represents </span> <span>14%</span>  <span id = "normal"> of the population</span>
                    </div>
                    <div id="stats-b" className="js-slidein" >
                        <span id = "span-a">1 in 4 </span> <span id = "normal"> children grow up not knowing how to read. The average child reads less than 3 hours per week</span>
                    </div>

                    <div id="stats-d" className="js-slidein" >
                        <span id = "span-a">85%</span><span id = "normal"> of juveniles who interact with the juvenile court system are considered functionally illiterate</span>
                    </div>
                    <div id="stats-e" className="js-slidein">
                        <span id = "normal"> The United Nations ranks the United States </span><span>26th</span> <span id = "normal"> in literacy</span>
                    </div>
                </div>
                <h2>Impact of illiteracy in the United States</h2>
                    <div id = "underline-3"> </div>
                <div className="paralax-3" id = "impact">
                    <ul id = "impact-list">
                    <li className="js-slidein">Welfare </li>
                    <li className="js-slidein">Prison</li>
                    <li className="js-slidein">Gender and Racial Inequality</li>
                    <li className="js-slidein">Unemployment</li>
                    </ul>

                </div>
            </div>
        )

  }
}

class Approach extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="approach">
                <div className="bg-image-approach"></div>
                <h1> Our Approach</h1>
                <div id = "underline-approach"> </div>

                <div className="approach-container">
                    <div className= "approach-box-1">
                        <img src = "/static/child_book_on_head_2.jpg"></img>
                        <div className= "approach-text">
                            <h2>Read</h2>
                            To develop enthusiasm for and a habit of reading, parents and teachers need to model being a reader, read to their children or students, and encourage reading. Just like running, reading takes discipline and hard work. Reading’s long-term effect on a student’s life is powerful. It opens the door to success.
                        </div>

                    </div>
                    <div className= "approach-box-2">



                        <div className= "approach-text">
                            <h2>Lead</h2>
                            Engaging reluctant readers is a challenge and in large part, depends on having positive role models. We can do our part by championing their achievement with a medal that symbolizes not only the hard work of the donor, but the hard work of the student.
                        </div>
                         <img src = "/static/child_book_on_head.jpg"></img>
                    </div>
                    <div className= "approach-box-3">
                        <img src = "/static/child_with_medal.jpg"></img>
                        <div className= "approach-text">
                            <h2>Succeed</h2>
                        Working together with school administrations, community outreach, libraries and literacy programs, our goal is to have a positive impact on a child’s success and celebrate their hard work. They WILL succeed when they can read.

                        </div>
                    </div>

                </div>

            </div>
        )

    }
}

class Progress extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "progress" >
                <h1>Progress</h1>
            </div>
        )

  }
}

class Volunteer extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "volunteer" >
                <h1>Volunteer</h1>
            </div>
        )

  }
}

class Request extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "request" >
                <h1>Request</h1>
            </div>
        )

  }
}


class Contact extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "contact" >
                <h1>Contact</h1>
            </div>
        )

  }
}



class People extends React.Component{

        constructor(props){
        super(props);

    }

  render() {
        return(
            <div className="people">
                <div className="hero-about">
                 </div>

                <div className="donate-banner" >
                    <div className = "button-div">
                <button onClick={this.props.donateMoney}>DONATE NOW</button>
                    <h4>We inspire young readers with achievement metals with the goal of
                            literacy for all</h4>
                </div>
                </div>

                <h1>Leadership</h1>
                <div id = "underline-4"></div>
                <div className= "people-container">
                    <div className= "person" id = "Tami">

                        <div className="person-info">
                            <img src = "/static/tami.jpeg"></img>
                            <span>                        <h2>Tami Christan</h2>
                        <h3>President</h3>I love reading; books are like old friends I can revisit. I love how the story unfolds and when it’s really good, I can read it over and over again. Truly a great escape, but’s also essential to everything we do. An avid runner, I’ve trained and run a handful of half marathon races; various trail runs and 5k/10k races. My favorite run was my first half marathon; I ran to raise money for clean wells in Africa for the Pokot Tribe with my church. It was a huge accomplishment to run a half marathon and I was terrified. The feeling of joy that I carry today, knowing that long after I am gone, someone will have clean water was worth all the hard work that went into training. A proud mother of two daughters; they are the first in my family to attend college.</span>
                        </div>
                    </div>
                    <div className= "person" id = "Brian">


                        <div className="person-info">
                        <img src = "/static/brian_suit.jpg"></img>
        <span>                        <h2>Brian Crowe</h2>
                        <h3>Vice President</h3> Brian Crowe is a single dad to an awesome 13 year old young lady.  He love's to be outdoors (hiking, kayaking, etc.) and when he cannot get out in the wild will opt to run barefoot in the grass and camp in the backyard.  He's no speed reader but definitely believes reading can open up the world, initiate a spark and stretch your imagination.  A great quick read, with a few pictures in there too, is Jonathan Livingston Seagull by Richard Bach.
Believe in yourself and you will soar!</span>

                        </div>
                    </div>
                    <div className= "person" id = "Elizabeth">


                        <div className="person-info">
                            <img src = "/static/elizabeth.jpeg"></img>

                            <span>                     <h2>Elizabeth Parra</h2>
                        <h3>Secretary</h3>An outdoor enthusiast that doesn’t see a challenge that can’t be overcome. An avid runner and hiker, I am training for my first half marathon. Besides loving the outdoors and trying to spend as much time as possible on trails, I also love to read. Some of my favorite authors are John Steinbeck, Harold Bell Wright, Augusta Jane Evans and many others. I tried to instill the love of reading in all three of my children who are now in college. I believe reading provides a good foundation to your future and would like to add encouragement to children who are trying to reach their next reading milestone. I believe rewarding children with the progress of their efforts encourages them to keep going to reach even higher goals. </span>
                        </div>
                    </div>
                    <div className= "person" id = "Curtis">



                        <div className="person-info">
                              <img src = "/static/curtis.jpg"></img>
                            <span>                        <h2>Curtis Leszczynski</h2>
                        <h3>Treasurer</h3>I was born in the City of Detroit and has a love of sports, running, biking and our city. Being from the inner city, I was the first in my family to graduate from college and reading was a big part of it. I graduated from Michigan State University and saw first-hand that education was the ticket to a better career. Since then, I’ve sent my 3 sons to Michigan State and encouraged other family members to go to college. We participate in many running events, work out on a regular basis and of course, reading.  Reading for knowledge never stops.</span>
                        </div>
                    </div>


                </div>

            </div>
        )

  }

}

class OurMission extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "our-mission" >
                <h1>OUR MISSION</h1>
            </div>
        )

  }
}

ReactDOM.render(
  React.createElement(Home),
  document.getElementById('root')
);
