import React from 'react'
import PropterHelp from './PropterHelp'
import TopContent from './TopContent'
import VideoContent from './VideoContent'
import bg from '../../../public/assets/bg.jpg'
import Aminities from './aminities'
import RealState from './realState'
const Welcome = () => {
  return (
    <div className='homeCls'>
    <TopContent/>
    <div >
    <PropterHelp/>
    </div>
    <div>
    <VideoContent/>
    </div>
    <div>
      <Aminities/>
    </div>
    <div>
      <RealState/>
    </div>
    </div>
  )
}

export default Welcome