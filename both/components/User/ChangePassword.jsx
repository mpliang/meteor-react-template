ChangePassword = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    console.log(this.refs);

    //TODO: use this method instead of jquery
    var oldPassword = this.refs.oldPassword.getDOMNode().value;
    var newPassword = this.refs.oldPassword.getDOMNode().value;
    var confirmPassword = this.refs.oldPassword.getDOMNode().value;

    if(newPassword === confirmPassword) {
      Accounts.ChangePassword(oldPassword, newPassword, (err) => {
        if(err){
          Materialize.toast(`Error: ${err.reason}`, 4000);
        } else {
          Materialize.toast(`You password has been successfully changed!`, 4000);
          FlowRoutergo('/');
        }
      });
    }
  },
  render() {
    return (
      <div className="row">
          <h2 className="text-center">Change Password</h2>
          <form onSubmit={this.onSubmit} className="col offset-s4 s4" autoComplete="off">
              <div className="row">
                  <div className="input-field col s12">
                      <input id="oldPassword" ref="oldPassword" type="password" className="validate" />
                      <label htmlFor="oldPassword">Old Password</label>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                      <input id="newPassword" type="password" ref="newPassword" className="validate" />
                      <label htmlFor="newPassword">New Password</label>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                      <input id="confirmPassword" type="password" ref="confirmPassword" className="validate" />
                      <label htmlFor="confirmPassword"> ConfirmPassword</label>
                  </div>
              </div>
              <div className="row">
                  <button className="waves-effect waves-light btn btn-block">Confirm</button>
              </div>
          </form>
      </div>
    )
  }
})
