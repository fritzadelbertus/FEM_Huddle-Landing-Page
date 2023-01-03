
function LandingPage() {
  return (
    <div className="LandingPage">
      <picture>
        <source media="(min-width:750px)" srcSet="./bg-desktop.svg" />
        <source media="(min-width:375px)" srcSet="./bg-mobile.svg" />
        <img src="./bg-mobile.svg" alt="Background" />
      </picture>
      <div className="logo"><img src="./logo.svg" alt="Logo" /></div>
      <div className="illustration"><img src="./illustration-mockups.svg" alt="illustration" /></div>
      <div className="content">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
        <button>Register</button>
      </div>
      <footer>
        <ul>
          <li><i className="fa-brands fa-facebook-f"></i></li>
          <li><i className="fa-brands fa-twitter"></i></li>
          <li><i className="fa-brands fa-instagram"></i></li>
        </ul>
      </footer>
    </div>
  )
}

export default LandingPage