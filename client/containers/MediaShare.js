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
      console.log('texts', completedTasks)
      let title = `hey take a look at all the tasks I just completed: ${completedTasks}`

      return (
         <div>
            <div>
               <TwitterShareButton
               url={shareUrl}
               title={title}
               hashtags={hashtags}
               className="Demo__some-network__share-button">
               <TwitterIcon
               size={32}
               round />
               </TwitterShareButton>
            </div>
            <div>
                <FacebookShareButton
                  url={shareUrl}
                  quote="hey check out this cool website"
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
   console.log('media state.todos', state.todos);
   return { todos: state.todos}
}

export default connect(mapStateToProps)(MediaShare)
