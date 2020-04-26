


class Home extends React.Component {

    constructor(props){
        super(props);
        this.state={
            home: true,
            who: false,
            ourMission: false,
            issue: false,
            money: false,
            medals: false,
            work: false
        }

    }

    home(){
        this.setState({
            home: true,
            ourMission: false,
            who: false,
            money: false,
            medals: false,
            issue: false,
             work: false
        })
    }

    who(){
        this.setState({
            home: false,
            ourMission: false,
            who: true,
            money: false,
            issue: false,
            medals: false,
             work: false
        })
    }

    ourMission(){
        this.setState({
            home: false,
            ourMission: true,
            who: false,
            money: false,
            issue: false,
            medals: false,
             work: false
        })
    }

    donateMoney(){
        var new_url = "http://127.0.0.1:5000/Donate"
        // window.history.pushState({"html": "index.html"},"Donate - Runners 4 Readers", new_url)

        this.setState({
            home: false,
            ourMission: false,
            who: false,
            money: true,
            issue: false,
            medals: false,
            work: false
        })
    }
    donateMedals(){
        this.setState({
            home: false,
            ourMission: false,
            who: false,
            money: false,
            issue: false,
            medals: true,
            work: false
        })
    }

    work(){
        this.setState({
            home: false,
            ourMission: false,
            who: false,
            money: false,
            issue: false,
            medals: false,
            work: true
        })
    }

    issue(){
        this.setState({
            home: false,
            ourMission: false,
            who: false,
            money: false,
            issue: true,
            medals: false,
            work: false
        })
    }



  render() {
        if (this.state.home === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar who = {this.who.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        donateMedals = {this.donateMedals.bind(this)}
                        work = {this.work.bind(this)}
                        issue = {this.issue.bind(this)}/>
                <Hero />
                <Mission />
                <GetInvolved/>
                <HomeStats donateMoney = {this.donateMoney.bind(this)}
                            issue = {this.issue.bind(this)}/>
            </div>
        );
        }
        if (this.state.work === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar who = {this.who.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        donateMedals = {this.donateMedals.bind(this)}
                        work = {this.work.bind(this)}/>
                <Work />
            </div>
        );
        }
        if (this.state.who === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar who = {this.who.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        donateMedals = {this.donateMedals.bind(this)}
                        work = {this.work.bind(this)}/>
                <About/>
            </div>
        );
        }
        if (this.state.money === true){
        return(
            <div className="home">
                <Logo   home = {this.home.bind(this)}/>
                <Navbar who = {this.who.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        donateMedals = {this.donateMedals.bind(this)}
                        work = {this.work.bind(this)}/>
                <DonateMoney/>
            </div>
        );
        }
      else{
      return(
            <div className="home">
                <Logo home = {this.home.bind(this)}/>
                <Navbar who = {this.who.bind(this)}
                        ourMission = {this.ourMission.bind(this)}
                        donateMoney = {this.donateMoney.bind(this)}
                        donateMedals = {this.donateMedals.bind(this)}
                        work = {this.work.bind(this)}/>
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
            <ul className= {"menu"}>
                <NavElement name= "ABOUT US"  who= {this.props.who}  sub = {true} subl = {["Our People", "Our Mission", "Our Story"]} />
                <NavElement name= "OUR WORK" work= {this.props.work}  sub = {true} subl = {["The Issue", "The Approach", "Progress"]}/>
                <NavElement name= "GET INVOLVED" sub = {true} subl = {["Request A Medal", "Volunteer Opportunities"]}/>
                <NavElement name= "CONTACT US" sub = {false}/>
                <NavElement name= "DONATE" donateMoney = {this.props.donateMoney} sub = {true} subl = {["Monetary Donation", "Donate Medals"]}/>


            </ul>

        );
  }
}
class NavElement extends React.Component {

    constructor(props){
        super(props);

    }

  render() {
            if (this.props.sub === true) {
                if (this.props.name === "GET INVOLVED") {
                    return (
                        <li className="navbar-element-sub">
                            {this.props.name}
                            <ul className="sub" id="d">
                                <li >{this.props.subl[0]} </li>
                                <li >{this.props.subl[1]}</li>
                            </ul>
                        </li>
                    )
                }

                if (this.props.name === "ABOUT US") {
                    return (
                        <li className="navbar-element-sub">
                            {this.props.name}
                            <ul className="sub" id="a">
                                <li onClick={this.props.who} >{this.props.subl[0]}</li>
                                <li>{this.props.subl[1]}</li>
                                <li>{this.props.subl[2]}</li>
                            </ul>
                        </li>
                    )
                }

                if (this.props.name === "DONATE") {
                    return (
                        <li className="navbar-element-sub" id= "e">
                            {this.props.name}
                            <ul className="sub" id="c">
                                <li onClick={this.props.donateMoney}>{this.props.subl[0]}</li>
                                <li>{this.props.subl[1]}</li>
                            </ul>
                        </li>
                    )
                }

                if (this.props.name === "OUR WORK") {
                    return (
                        <li className="navbar-element-sub">
                            {this.props.name}
                            <ul className="sub" id="b">
                                <li onClick={this.props.work}>{this.props.subl[0]}</li>
                                <li>{this.props.subl[1]}</li>
                                <li>{this.props.subl[2]}</li>
                            </ul>
                        </li>
                    )
                }

            else {
                    return (
            <li className= "navbar-element-sub">
                {this.props.name}
                <ul className = "sub" >
                    <li>{this.props.subl[0]}</li>
                    <li>{this.props.subl[1]}</li>
                </ul>
            </li>
            )
                }

            }
            else{
            return (
            <li className= "navbar-element">
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
                <img onClick={this.props.home} src = "/static/1.png" alt="logo2"/>
            </div>
        )

  }
}

class DonateMoney extends React.Component{
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




class About extends React.Component{

        constructor(props){
        super(props);

    }

  render() {
        return(
            <div className="about">
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
    <div className="people-container">

        <div className = "people">
    <div className= "cpic"></div>
         <div className="description">

     <h3>Tami Christian</h3>
         <h5>
     Tami is an avid runner and reader. I’ve trained and run a handful of half
marathon races, various trail runs and 5k/10k races. Having to walk when I wanted to
run for the Paczki Race due to an injury, was a challenge. Injuries and age have caught
up with me. I still enjoy training and staying fit. Without a doubt, I still love crossing the
finish line; no matter how I get there. I love reading and like my partners know it is the
first tool we need to succeed. The fact that we have so many children falling below the
expected literacy stage is a problem. I read books over and over again, because I love
the story; they were like old friends I could revisit. It is a great escape, but also
             essential to everything.</h5>
         </div>
        </div>
                <div className="people">

         <div className="description">
             <div className= "cpic"></div>
     <h3>Elizabeth Parran</h3>

                    <h5>Elizabeth is an outdoor enthusiast that doesn’t see a challenge that can’t be
overcome. An avid runner and hiker, I am training for my first half marathon. Besides
loving the outdoors and trying to spend as much time as possible on trails, I also love
to read. Some of my favorite authors are John Steinbeck, Harold Bell Wright, Augusta
Jane Evans and many others. I tried to instill the love of reading in all three of my
children who are now in college. I believe reading provides a good foundation to your
future and would like to add encouragement to children who are trying to reach their
next reading milestone. I believe rewarding children with the progress of their efforts
                        encourages them to keep going to reach even higher goals.</h5>
         </div>
                </div>
            <div className= "people">
                <div className= "cpic"></div>
         <div className="description">
     <h3>Curtis Leszczynski</h3>
<h5>
                Curtis was born in the City of Detroit and has a love of sports, running,
biking and our city. Being from the inner city, I was the first in my family to graduate
from college and reading was a big part of it. I graduated from Michigan State
University and saw first-hand that education was a ticket to a better career. Since then,
I've sent my 3 sons to Michigan State and encouraged other family members to go to
college. We participate in many running events, working out on a regular basis, and of
    course, reading. Reading for knowledge never stops.</h5>
         </div>
</div>

            </div>
                </div>
        )

  }

}

class Work extends React.Component{
    constructor(props){
    super(props);

    }

  render() {
        return (
            <div className= "work" >

            </div>
        )

  }
}

ReactDOM.render(
  React.createElement(Home),
  document.getElementById('root')
);
