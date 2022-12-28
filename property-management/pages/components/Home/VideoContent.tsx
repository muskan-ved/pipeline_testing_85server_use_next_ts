import React from 'react'
import { CaretRightOutlined  } from "@ant-design/icons";
import { Button } from 'antd';

const VideoContent = () => {
  return (
    <div className='videoClass'>
        <Button shape='circle' style={{backgroundColor:'white',margin:'0 auto'}}>
            <CaretRightOutlined/>
        </Button>
    </div>
  )
}

export default VideoContent