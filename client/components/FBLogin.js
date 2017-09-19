import React from "react"
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom'


export default class FbButton extends React.Component {
  constructor(props){
    super(props)

   //  this.state = {
   //    isSignedIn: false,
   //    isFirstTime: false
   //  }
  }

// renderRedirect(){
//   if (this.state.isSignedIn) {
//     if (this.state.isFirstTime) {
//       return(
//         <Redirect to='/category_list'></Redirect>
//       )
//     } else {
//       return(
//         <Redirect to='/feed'></Redirect>
//       )
//     }
//   }
// }

  render() {

   //   {this.renderRedirect()}

    return (
      <div>
        <div className="App-header">
          <h2></h2>
        </div>
        <FacebookLogin
          appId="100128700575722"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.handleClicked}
          callback={this.responseFacebook.bind(this)} />
      </div>
    )
  }

  handleClicked() {
    console.log("WE ARE HERE");
  }

  responseFacebook(response) {
    console.log("responding from fbloginjs")

   //  let body = {
   //    name: response.name,
   //    email: response.email,
   //    user_id: response.id,
   //  }

  }

}
