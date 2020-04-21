const container = document.getElementById('target')
console.log('Connected to DOM')

const oldHeader = React.createElement('h1', {className: "header"},'Hello World')

                                    

const Profile = (props) => {
  return (
          <aside className="profile">
              <h1>{props.level}</h1>
              <img src={props.imgURL}></img> 
              <p>{props.points} Points</p>
          </aside>
      )
}

const Card = (props) => {
  return (
          <div className="card">
            <Profile 
              level={props.level} 
              imgURL={props.imgURL} 
              points={props.points}/>
            <main className="bio">
                <h1>{props.name}</h1>
                <p>{props.bio}</p>
                <p>Mouse Over the card for more info...</p>
            </main>
          </div>
        )
}

const Greet = (props) => {
  return <h1>{props.title}</h1>
}

const NavBar = (props) => {
  return (
      <ul>
        <li><a href={props[0].about}>About</a></li>
        <li><a href={props[1].ourTeam}>Team</a></li>
        <li><a href={props[2].pricing}>Pricing</a></li>
      </ul>
    )
}

const pageData = [{about: "/about"}, {ourTeam: "/team"}, {pricing: "/pricing"}];


const devonte = {
  name: 'Devonte Duncan',
  bio: "I love mangos and roti",
  level: "107",
  points: "7890",
  imgURL: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png"
}

const page = {
  title: 'Its A Beautiful Day'
}

ReactDOM.render([NavBar(pageData), oldHeader, Greet(page), Card(devonte)], container)


