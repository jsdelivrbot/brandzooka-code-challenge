import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShareButtons, generateShareIcon } from 'react-share';

const {
   FacebookShareButton,
   TwitterShareButton,
} = ShareButtons;
const TwitterIcon = generateShareIcon('twitter');
const FacebookIcon = generateShareIcon('facebook');

class MediaShare extends Component {
   render(){
      let testQuote = 'some things'
      let shareUrl = 'reddit.com'
      let hashtags = ['Brandzooka', 'Code', 'Challenge']
      let completedTasks = this.props.todos.filter((item) => item.completed).map((obj) => " " + obj.text)
      let title = `hey take a look at all the tasks I just completed: ${completedTasks}`

      return (
         <div className="flexContainer">
            <div className="flexItem">Share your accomplishments</div>
               <TwitterShareButton
               url={shareUrl}
               title={title}
               hashtags={hashtags}
               className="Demo__some-network__share-button">
               <TwitterIcon
               size={32}
               round />
               </TwitterShareButton>
            <div className="flexItem">
                <FacebookShareButton
                  url={shareUrl}
                  quote={ title }
                  className="Demo__some-network__share-button">
                  <FacebookIcon
                    size={32}
                    round />
                </FacebookShareButton>
            </div>
         </div>
      )
   }
}

function mapStateToProps (state) {
   return { todos: state.todos}
}

export default connect(mapStateToProps)(MediaShare)
