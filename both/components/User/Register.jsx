Register = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        var el = $(e.target);
        var email = el.find("#email").val();
        var password = el.find("#password").val();
        var confirmPassword = el.find("#confirmPassword").val();

        if (password === confirmPassword && password !== "" && confirmPassword !== "") {
            var account = {email, password};
            Accounts.createUser(account, err => {
              err ? Materialize.toast(`Error: ${err.reason}`, 4000) : FlowRouter.go('/');
            });
        } else {
            Materialize.toast('Passwords must match!', 4000);
        }
    },
    render() {
        return (
            <div className="row">
                <h2 className="text-center">Register</h2>
                <form onSubmit={this.onSubmit} className="col offset-s4 s4">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" autoComplete="off"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" autoComplete="off"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="confirmPassword" type="password" className="validate" autoComplete="off"/>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn btn-block">Register</button>
                    </div>
                </form>
            </div>
        )
    }
})
