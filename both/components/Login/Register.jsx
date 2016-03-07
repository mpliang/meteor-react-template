Register = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        var ele = $(e.target);
        var email = ele.find("#email").val();
        var password = ele.find("#password").val();
        var confirmPassword = ele.find("#confirmPassword").val();

        if (password === confirmPassword && password !== "" && confirmPassword !== "") {
            var account = {
                email,
                password
            }
            Accounts.createUser(account, function(err) {
                if (err) Materialize.toast('Unexpected Error Occured Creating Account!', 4000);
                else {
                    Meteor.loginWithPassword(email, password, function(err){
                        if (err) Materialize.toast('Login error', 4000);
                        else FlowRouter.go('/')
                    });
                }
            })
        } else {
            Materialize.toast('Passwords must match!', 4000)
        }

    },
    render() {
        return (
            <div className="row">
                <h2 className="text-center">Register</h2>
                <form onSubmit={this.onSubmit} className="col offset-s4 s4">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="text" className="validate" autoComplete="off"/>
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
