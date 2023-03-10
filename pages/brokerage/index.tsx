import React from 'react'
import HomeWorkComp from '../landloard/homeWork'
import PrimiumTool from '../landloard/premiumTool'
import RealState from '../welcome/realState'
import VideoContent from '../welcome/VideoContent'
import BrokerTopContent from './doorSteps'
import PremiumManagmentTool from './premiumManagmentTool'

const BrokerageComp = () => {
  return (
    <div className='brokerIndexPage'>
      <div>
        <BrokerTopContent/>
      </div>
      <div>
        <HomeWorkComp/>
      </div>
      <div>
        <VideoContent/>
    </div>
    <div>
      {/* <PremiumManagmentTool/> */}
      <PrimiumTool/>
    </div>
    <div>
        <RealState/>
    </div>
    </div>
  )
}

export default BrokerageComp