import React from "react"

import {
  FaApple,
  FaBandcamp,
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaRegCalendarCheck,
  FaSlack,
  FaSoundcloud,
  FaSpotify,
  FaTelegram,
  FaTumblr,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

import {
  MdSchool,
} from "react-icons/md"


import {
  GiFeather,
} from "react-icons/gi"


let appleIcon = <FaApple focusable="false" aria-hidden="true" />
let bandcampIcon = <FaBandcamp focusable="false" aria-hidden="true" />
let globeIcon = <FaGlobe focusable="false" aria-hidden="true" />
let instagramIcon = <FaInstagram focusable="false" aria-hidden="true" />

let githubIcon = <FaGithub focusable="false" aria-hidden="true" />
let calendarIcon = <FaRegCalendarCheck focusable="false" aria-hidden="true" />
let slackIcon = <FaSlack focusable="false" aria-hidden="true" />
let telegramIcon = <FaTelegram focusable="false" aria-hidden="true" />
let schoolIcon = <MdSchool focusable="false" aria-hidden="true" />
let featherIcon = <GiFeather focusable="false" aria-hidden="true" />

let soundcloudIcon = <FaSoundcloud focusable="false" aria-hidden="true" />
let spotifyIcon = <FaSpotify focusable="false" aria-hidden="true" />
let tumblrIcon = <FaTumblr focusable="false" aria-hidden="true" />
let twitterIcon = <FaTwitter focusable="false" aria-hidden="true" />
let youtubeIcon = <FaYoutube focusable="false" aria-hidden="true" />
let facebookIcon = <FaFacebookF focusable="false" aria-hidden="true" />


const Icon = props => {
  switch (props.name) {
    case "twitter":
      return twitterIcon
    case "facebook":
      return facebookIcon
    case "instagram":
      return instagramIcon
    case "youtube":
      return youtubeIcon
 
    case "github":
      return githubIcon     
    case "calendar":
      return calendarIcon
     case "github":
      return githubIcon
     case "slack":
      return slackIcon 
    case "telegram":
      return telegramIcon 
    case "school":
      return schoolIcon        
    case "feather":
      return featherIcon  
 
    case "spotify":
      return spotifyIcon
    case "soundcloud":
      return soundcloudIcon
    case "applemusic":
      return appleIcon
    case "apple":
      return appleIcon
    case "bandcamp":
      return bandcampIcon
    case "tumblr":
      return tumblrIcon
    default:
      return globeIcon
  }
}

export default Icon
