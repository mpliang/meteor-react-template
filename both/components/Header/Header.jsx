Header = React.createClass({
    getInitialState() {
        return {
            isLoggedIn: User.isLoggedIn()
        }
    },
    logout(e) {
        e.preventDefault();
        Meteor.logout( err => {
            if (err) {
                Materialize.toast(`Error: ${err.reason}`, 4000);
            }
            else {
                this.setState({isLoggedIn: !this.state.isLoggedIn})
                FlowRouter.go('/');
            }
        }.bind(this));
    },
    render() {
        var navStyles = {
            backgroundColor: '#263238',
            paddingLeft: '12px'
        };
        var navOptions = User.isLoggedIn() ? <LoggedInNav logout={this.logout} /> : <LoggedOutNav />;
        return (
            <nav style={navStyles}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">App Name</a>
                    {navOptions}
                </div>
            </nav>
        );
    }
});
