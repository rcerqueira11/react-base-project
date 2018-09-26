import React, { Component } from 'react'
import PropTypes from 'prop-types'
import{bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';
import { connect } from 'react-redux'
import LoginForm from './LoginForm'

export class LoginPage extends Component {
  static propTypes = {
    email: PropTypes.email,
    password: PropTypes.password,


  }

  updateAuthState(event){
    const field = event.target.name;
    let auth = Object.assign({}, this.state.auth);
    auth[field] = event.target.value;
    return this.setState({auth: auth});
  }

  saveAuth(event){
      event.preventDefault();
      if (!this.authFormValid()){
          return;
      }
      this.setState({saving: true});
      this.props.actions.saveauth(this.state.auth)
      .then(() => this.redirect())
      .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
          });
      }

  redirect(){
      this.setState({saving: false});
      toastr.success('auth saved');
      this.context.router.push('/dasboard');
  }

  render() {
    return (
      <LoginForm
        onChange={this.updateAuthState}
        onSave={this.saveAuth}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    )
  }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions,dispatch)
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
