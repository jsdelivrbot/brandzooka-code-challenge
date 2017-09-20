import React, { Component } from 'react'
import { ShareButtons, generateShareIcon } from 'react-share';

const {
   FacebookShareButton,
   TwitterShareButton,
} = ShareButtons;
const TwitterIcon = generateShareIcon('twitter');
const FacebookIcon = generateShareIcon('facebook');

export default class MediaShare extends Component {
   render(){
      let testQuote = 'some things'
      let shareUrl = 'reddit.com'
      let title = `hey I just completed ${testQuote}`
      let hashtags = ['Brandzooka', 'Code', 'Challenge']
      return (
         <div>
                   <FacebookShareButton
                     url={shareUrl}
                     quote="hey check out this cool website"
                     className="Demo__some-network__share-button">
                     <FacebookIcon
                       size={32}
                       round />
                   </FacebookShareButton>

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
      )
   }
}
