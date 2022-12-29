import React from 'react'
import PropterHelp from './PropterHelp'
import TopContent from './TopContent'
import VideoContent from './VideoContent'
import bg from '../../../public/assets/bg.jpg'
const Home = () => {
  return (
    <div className='homeCls' >
    <TopContent/>
    <PropterHelp/>
    <VideoContent/>
    </div>
  )
}

export default Home