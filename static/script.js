
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
            volunteer: false
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

    showNav(){

        if ($(".menu-container-visible")[0]){
            $('.menu-container').removeClass('menu-container-visible');

        }
        else{
            $('.menu-container').addClass('menu-container-visible');

        }
        // nav.style.display="flex";
    }

    hideNav(){
        ;
    }


  render() {
        if (this.state.home === true){
        return(
            <div className="home">

                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} />

                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        show={this.showNav.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Hero />
                <Mission />
                <GetInvolved  donateMoney = {this.donateMoney.bind(this)}
                              volunteer = {this.volunteer.bind(this)}
                              request = {this.request.bind(this)}
                />
                <HomeStats donateMoney = {this.donateMoney.bind(this)}
                            issue = {this.issue.bind(this)}/>
                <Footer></Footer>
            </div>
        );
        }
        if (this.state.ourMission === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} hide={this.hideNav.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        show={this.showNav.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <OurMission donateMoney = {this.donateMoney.bind(this)} />
                <Footer></Footer>

            </div>
        );
        }
        if (this.state.people === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} hide={this.hideNav.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        show={this.showNav.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <People donateMoney = {this.donateMoney.bind(this)}/>
                <Footer></Footer>

            </div>
        );
        }
        if (this.state.issue === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} hide={this.hideNav.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        show={this.showNav.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Issue/>
                <Footer></Footer>

            </div>
        );
        }
        if (this.state.donate === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} hide={this.hideNav.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        show={this.showNav.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Donate />
                  <Footer></Footer>

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
                        show={this.showNav.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
            <Approach donateMoney = {this.donateMoney.bind(this)} />
            <Footer></Footer>

            </div>
        );
        }
        if (this.state.progress === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} hide={this.hideNav.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        show={this.showNav.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Progress donateMoney = {this.donateMoney.bind(this)}/>
                <Footer></Footer>

            </div>
        );
        }
        if (this.state.story === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} hide={this.hideNav.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        show={this.showNav.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Story donateMoney = {this.donateMoney.bind(this)}/>
                <Footer></Footer>

            </div>
        );
        }
        if (this.state.request === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} hide={this.hideNav.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        show={this.showNav.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Request donateMoney = {this.donateMoney.bind(this)}/>
                <Footer></Footer>

            </div>
        );
        }
        if (this.state.volunteer === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} hide={this.hideNav.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        show={this.showNav.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Volunteer />
                <Footer></Footer>

            </div>
        );
        }
        if (this.state.contact === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} hide={this.hideNav.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        show={this.showNav.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Contact />
                <Footer></Footer>

            </div>
        );
        }


      else{
      return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}
                show={this.showNav.bind(this)} hide={this.hideNav.bind(this)}/>
                <Navbar people = {this.people.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        approach = {this.approach.bind(this)}
                        progress = {this.progress.bind(this)}
                        story = {this.story.bind(this)}
                        request = {this.request.bind(this)}
                        volunteer = {this.volunteer.bind(this)}
                        contact = {this.contact.bind(this)}
                        show={this.showNav.bind(this)}
                        issue = {this.issue.bind(this)}/>
                        <Footer></Footer>

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
                <span id = "arrow" onClick={this.props.show}> > </span>
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
    showA = () => {
        console.log("SHOW")
        var plus = document.getElementById("plus-a")

        console.log(plus)
        if (plus.innerHTML === "+"){
            plus.innerHTML = "-";
            var a = document.getElementById("a")
            a.style.display = "block"
        }
        else{
            plus.innerHTML = "+";
            var a = document.getElementById("a")
            a.style.display = "none"
        }
    }

    showB = () => {
        console.log("SHOW")
        var plus = document.getElementById("plus-b")

        console.log(plus)
        if (plus.innerHTML === "+"){
            plus.innerHTML = "-";
            var b = document.getElementById("b")
            b.style.display = "block"
        }
        else{
            plus.innerHTML = "+";
            var b = document.getElementById("b")
            b.style.display = "none"
        }
    }

    showC = () => {
        console.log("SHOW")
        var plus = document.getElementById("plus-c")

        console.log(plus)
        if (plus.innerHTML === "+"){
            plus.innerHTML = "-";
            var c = document.getElementById("c")
            c.style.display = "block"
        }
        else{
            plus.innerHTML = "+";
            var c = document.getElementById("c")
            c.style.display = "none"
        }
    }

  render() {
            if (this.props.name === "GET INVOLVED") {
                return (
                    <li className="navbar-element-sub" id = "f">
                        {this.props.name} <span onClick={this.showC} id= "plus-c">+</span>
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
                        {this.props.name} <span onClick={this.showB} id= "plus-b">+</span>
                        <ul className="sub" id="b" >
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
                        <span id = "our">{this.props.name}</span> <span onClick={this.showA} id= "plus-a">+</span>
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
                        <button onClick={this.props.donateMoney}>DONATE MEDALS</button>
                    </div>

                   <div className="donate-money">
                           <h4>Make a monetary donation</h4>
                            <button onClick={this.props.donateMoney}>DONATE MONEY</button>
                    </div>
                    <div className="donate-time">
                            <h4>Donate your time</h4>
                            <button onClick={this.props.volunteer}>VOLUNTEER</button>
                    </div>

                    <div className="request-medal">
                        <h4>Know young readers to inspire?</h4>
                            <button onClick={this.props.request}>REQUEST A MEDAL</button>
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
                <h1 onClick={this.props.home}>RUNNERS-4-READERS  </h1>
                <div id="line"></div>
                <img onClick={this.props.home} src = "/static/logo_green.png" alt="/static/logo_green.jpeg"/>
                <NavButton show={this.props.show} hide={this.props.hide} > </NavButton>

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
            <div className= "donate-money-2" >

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
            <div className= "our-story" >
                <div id= "banner">
              <img  src="/static/group.jpg"></img>
                <img  src="/static/trio.jpg"></img>
                <img   src="/static/paczki.jpeg"></img>
                <img  src="/static/group_tree.jpg"></img>
                <img   src="/static/tt2019.jpg"></img>
                <img   src="/static/B10_2019.jpg"></img>

                </div>


                <h1>Our Story</h1>
                <div id="underline-5" ></div>

                <div className="story-container">
                    <div className= "story-box-1">
                    <img  src="/static/boad.JPG"></img>
                        <div className= "story-text">
                    Like so many runners, over the years, we have accumulated a pile of medals. Displaying them is a reminder of the training and pride in finishing a race. They carry with them distinct memories - a run with close family and friends that warrants a friendly competition resulting in everyone running just a little bit faster; or a run in the late fall/early spring with freezing rain or snow causing you to make fast friends with other runners huddling together to stay warm; or an annual Thanksgiving Day race.
                        </div>

                    </div>
                    <div className = "story-box-2">
                        <div className= "story-text">
                    The medals also serve to remind us of injuries and setbacks; a pulled hamstrings or sprained ankle, the need to walk and not run. But mostly they exemplify the determination needed to go the distance.Runners-4-Readers was born from a desire to regift our medals to a worthy cause. We know that literacy is a serious issue in our country and throughout the world.                      </div>
                <img  src="/static/b10race.jpeg"></img>

                    </div>
                    <div className= "story-box-3">
                    <img  src="/static/paczki.jpeg"></img>

                        <div className= "story-text">
 The statistics are staggering. Once a child has fallen behind in reading, it takes hard work and determination to achieve the necessary stages to succeed. The idea to partner with school districts, community outreach and libraries to celebrate a child’s achievement in reading, immediately resonated with us. It allows us an opportunity to repurpose used medals and reward a child’s hard work – putting into play exactly what it takes to train for races.
                        </div>
                    </div>


                    <div className= "story-box-4">
                        <div className= "story-text">
Discipline. Courage. Determination. Achieving reading readiness opens the door to a brighter future and Runners-4-Readers is excited to be a part of that journey. Because readers make leaders.

                        </div>
                    <img  src="/static/B10_2019.jpg"></img>

                    </div>

                </div>



            <div className="donate-banner" >
                    <div className = "button-div">
                <button onClick={this.props.donateMoney}>CONTRIBUTE</button>
                    <h4>Together we’re creating a brighter future where all children have a chance to succeed
</h4>
                </div>
                </div>
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
                <div id ="underline-4"></div>
                <div className= "payment-container">
                    <h4>Make a Donation</h4>
                    <h5>Literacy changes lives. <br/> You can help.</h5>
                    <h5 className="pay-text">
                        Give by Check made payable to Runners-4-Readers:
                        <br></br><br></br>
                        Attention: Curtis Leszczynski <br></br>
                        2639 Brush Street
                        Detroit, Michigan 48201
                        <br></br><br></br>  <br></br><br></br><br></br><br></br>

                        Payment by card coming soon!

                    </h5>
                    {/*<div className="amount">*/}
                    {/*    <label htmlFor="">I'm giving</label>*/}
                    {/*    <div className ="input-div">*/}
                    {/*        <input type="text" value = "$25"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className = "amounts">*/}
                    {/*    <div> $35 </div>*/}
                    {/*    <div> $50 </div>*/}
                    {/*    <div> $75 </div>*/}
                    {/*    <div> Other </div>*/}
                    {/*</div>*/}
                    {/*    <button>DONATE NOW </button>*/}
                </div>
                <div className= "medal-container">
                    <h4>Donate your Medals</h4>
                    <h5>Thank you for helping us celebrate literacy! We are looking forward to accepting your  medals! We have two easy option: drop your medals in the donation boxes available at racing events or you can send them to us. Please package your medal(s) in a large envelope with cardboard or bubble wrap to prevent the envelop from becoming torn or destroyed.
                        <br></br> <br></br>
Also we’re not picky! If you’re cleaning out your closet and found a dusty box of medals won in high school or college in other sports – soccer, baseball, softball, lacrosse, etc. – we’ll take those too!
</h5>

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
                        <li className="js-slidein">Inability to find work leads to <span> welfare </span> and <span>unemployment</span>
 </li>
                        <li className="js-slidein"><span>Juvenile delinquency </span>which leads to <span>incarceration</span></li>
                    <li className="js-slidein">Gender and racial <span>inequality</span></li>
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
                         <img src = "/static/child_parent_crop.jpg"></img>
                    </div>
                    <div className= "approach-box-3">
                        <img src = "/static/child_with_medal_crop.jpg"></img>
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
            <div className= "progress-page" >
                <div className="bg-image-progress"></div>
                <h1>Progress</h1>
                <div id="underline-5" ></div>
                <div className="progress-text">Our collection is growing! Through the generosity of race organizers, we place donation bins on race day at events to collect old medals that runners would like to gift and help promote literacy in children. By word of mouth we’ve received medals from individuals as well as running stores that have been repurposed into medals for readers.
                    <br></br> <br></br>
We cannot wait to give them away! To date, we’ve contacted local schools, libraries and community outreach facilities to partner with and distribute our medals. Check back regularly to see the smiling faces of the recipients!
</div>
            <div className="donate-banner" >
                    <div className = "button-div">
                <button onClick={this.props.donateMoney}>CONTRIBUTE</button>
                    <h4>Together we’re creating a brighter future where all children have a chance to succeed
</h4>
                </div>
                </div>
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
                <div className = "bg-image-volunteer">
                    <h2>Volunteer Opportunities</h2>
                    <div id="underline-7"></div>
                                    “Life’s most persistent and urgent question is, what are you doing for others” <br></br>
                                    -Martin Luther King, Jr.

                </div>
                <div className="volunteer-text">
            We love help! We have several great opportunities to help Runners-4-Readers that range from assisting at races collecting donated medals to establishing educational partners to celebrate reading achievements. To learn more about you can best assist us, please complete the following form and we will be happy to see where you can be beneficial.
                </div>

                <InfoForm> </InfoForm>

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
                <div className = "bg-image-request">
                    <h2>Request a Medal</h2>
                    <div id="underline-6"></div>
                    We are excited to work with you in honoring a child’s achievements! If you would like to request a medal on behalf of your organization, please fill out the following form and we will be happy to contact you to gather your information and process your request.
                </div>
                <br></br>

                <InfoForm> </InfoForm>


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
                <h1>Contact Us</h1>
                <div id="underline-8" ></div>



                <div className="contact-text">
                Have a question about our work? Want to get involved?
                    <br></br><br></br>
                    We’d love to hear from you. Email us at team@runners4readers.org.

                </div>

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


                <h1>Leadership</h1>
                <div id = "underline-4"></div>
                <div className= "people-container">
                    <div className= "person" id = "Tami">

                        <div className="person-info">
                            <img src = "/static/tami_medal.jpeg"></img>
                            <span>    <h2>Tami Christan</h2>
                        <h3>President</h3>I love reading; books are like old friends I can revisit. I love how the story unfolds and when it’s really good, I can read it over and over again. Truly a great escape, but’s also essential to everything we do. An avid runner, I’ve trained and run a handful of half marathon races; various trail runs and 5k/10k races. My favorite run was my first half marathon; I ran to raise money for clean wells in Africa for the Pokot Tribe with my church. It was a huge accomplishment to run a half marathon and I was terrified. The feeling of joy that I carry today, knowing that long after I am gone, someone will have clean water was worth all the hard work that went into training. A proud mother of two daughters; they are the first in my family to attend college.
                            </span>

                        </div>
                    </div>
                    <div className= "person" id = "Brian">


                        <div className="person-info">
                        <img src = "/static/Crowe_Outdoors_2019.jpg"></img>
        <span>                        <h2>Brian Crowe</h2>
                        <h3>Vice President</h3> Howdy...I'm Brian, a single dad to an awesome teenage daughter.  I love to be outdoors (hiking, kayaking, etc.) and when I cannot get out in the wild I will opt to run barefoot in the grass and camp in the backyard.  I'm no speed reader but definitely believe reading can open up the world, initiate a spark and stretch your imagination.  A great quick read, with a few pictures in there too, is Jonathan Livingston Seagull by Richard Bach.
Believe in yourself and you will soar!</span>

                        </div>
                    </div>
                    <div className= "person" id = "Elizabeth">


                        <div className="person-info">
                            <img src = "/static/elizabeth.jpeg"></img>

                            <span>                     <h2>Elizabeth Parra</h2>
                        <h3>Secretary</h3>I am an outdoor enthusiast that doesn’t see a challenge that can’t be overcome. An avid runner and hiker, I am training for my first half marathon. Besides loving the outdoors and trying to spend as much time as possible on trails, I also love to read. Some of my favorite authors are John Steinbeck, Harold Bell Wright, Augusta Jane Evans and many others. I tried to instill the love of reading in all three of my children who are now in college. I believe reading provides a good foundation to your future and would like to add encouragement to children who are trying to reach their next reading milestone. I believe rewarding children with the progress of their efforts encourages them to keep going to reach even higher goals.
                            </span></div>
                    </div>
                    <div className= "person" id = "Curtis">

                        <div className="person-info">
                              <img src = "/static/curtis.jpg"></img>
                            <span>                        <h2>Curtis Leszczynski</h2>
                        <h3>Treasurer</h3>I was born in the City of Detroit and has a love of sports, running, biking and our city. Being from the inner city, I was the first in my family to graduate from college and reading was a big part of it. I graduated from Michigan State University and saw first-hand that education was the ticket to a better career. Since then, I’ve sent my 3 sons to Michigan State and encouraged other family members to go to college. We participate in many running events, work out on a regular basis and of course, reading.  Reading for knowledge never stops.</span>
                        </div>
                    </div>
                                    <h1>Team Members</h1>
                <div id = "underline-4"></div>
                    <div className= "person" id = "olivia">

                        <div className="person-info">
                              <img src = "/static/olivia.jpg"></img>
                            <span>                        <h2>Olivia Parra</h2>
                        <h3>Social Media Coordinator </h3></span>
                        </div>
                    </div>


                </div>
                <div className="donate-banner" >
                    <div className = "button-div">
                <button onClick={this.props.donateMoney}>DONATE NOW</button>
                    <h4>We inspire young readers with achievement medals with the goal of
                            literacy for all</h4>
                </div>
                </div>

            </div>
        )

  }

}

class NavButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <div onClick= {this.props.show} className = "nav-button">

                    <div id="burger"></div>
                     <div id="burger"></div>
                     <div id="burger"></div>
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
                <div className="bg-image-mission"></div>
                <h1>Our Mission</h1>
                <div id="underline-4" ></div>
                <div className="mission-text">
                    Runners-4-Readers (R4R) is a pay it forward charity that receives donations of goodwill and support and does not require the donor to be of substantial needs, yet allows them to pay it forward to another individual. R4R offers people of diverse ethnicity, religions, nationalities, and cultures the opportunity to demonstrate a shared human compassion anonymously or personally. Our three year plan is to acquire a dedicated office and location; hire at least one full-time employee; further develop medal gifting programs with school districts, community and community outreach centers in the United States; expand our successful programs within elementary programs to reach the goals of No Child Left Behind and Every Student Succeeds Act; and continue to research and publish and verify scientific data about the benefit of R4R for recipients, students, and volunteers

</div>
            <div className="donate-banner" >
                    <div className = "button-div">
                <button onClick={this.props.donateMoney}>CONTRIBUTE</button>
                    <h4>Together we’re creating a brighter future where all children have a chance to succeed
</h4>
                </div>
                </div>
            </div>
        )

  }
}


class InfoForm extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="col-md-8 order-md-1">
                    <form className="needs-validation" noValidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                ></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                ></input>

                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Organization">Organization</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="organization"
                                ></input>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="phone" className="form-control" id="phone"></input>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email </label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                            ></input>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"></input>
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="City">City</label>
                                <input type="text" className="form-control" id="zip" placeholder="" ></input>

                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <select className="custom-select d-block w-100" id="state" >
                                    <option value="">Choose...</option>
                                    	<option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                </select>

                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" ></input>
                            </div>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="comment">Comments</label>
                            <textarea type="text" className="form-control" rows="3"id="comments" placeholder="Enter your message..."></textarea>
                             <button type="button">Submit
                            </button>
                        </div>

                    </form>
                </div>



        )



    }


}

class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="footer">
                <div className="LOGO-2">
                <h1 onClick={this.props.home}>RUNNERS-4-READERS  </h1>
                <div id="line"></div>
                <img onClick={this.props.home} src = "/static/logo_green_copy.png" alt="/static/logo_green.jpeg"/>

                </div>
            </div>


            )

    }
}


ReactDOM.render(
  React.createElement(Home),
  document.getElementById('root')
);
