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
      let shareUrl = 'brandzooka.com/register'
      let hashtags = ['Brandzooka', 'Code', 'Challenge']
      let completedTasks = this.props.todos.filter((item) => item.completed).map((obj) => " " + obj.text)
      let title = `Hey, check out all the tasks I've completed: ${completedTasks.slice(0,completedTasks.length -1)}, and${completedTasks.slice(-1)}.`

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
                  hashtag={"#Brandzooka"}
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
