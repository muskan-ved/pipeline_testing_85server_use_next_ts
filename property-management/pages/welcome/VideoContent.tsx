import React from 'react'
import { CaretRightOutlined  } from "@ant-design/icons";
import { Button } from 'antd';

const VideoContent = () => {
  return (
    <div className='videoClass'>
        <Button shape='circle' className='videoBtnCls' style={{backgroundColor:'white',margin:'0 auto'}}>
            <CaretRightOutlined style={{color:'orangered'}}/>
        </Button>
    </div>
  )
}

export default VideoContent;