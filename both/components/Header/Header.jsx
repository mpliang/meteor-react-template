Header = React.createClass({
  render() {
      var navStyles = {
          backgroundColor: '#263238',
          paddingLeft: '12px'
      };
    return (
        <nav style={navStyles}>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">App Name</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </nav>
    );
  }
});
