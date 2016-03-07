Login = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        var el = $(e.target);
        var email = el.find("#email").val();
        var password = el.find("#password").val();

        Meteor.loginWithPassword(email, password, err => {
            if (err) {
                Materialize.toast(`Error: ${err.reason}`, 4000);
            }
            else {
                FlowRouter.go('/');
            }
        })
    },
    render() {
        return (
            <div className="row">
                <h2 className="text-center">Login</h2>
                <form onSubmit={this.onSubmit} className="col offset-s4 s4" autoComplete="off">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="text" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn btn-block">Login</button>
                    </div>
                </form>
            </div>

        )
    }
})
