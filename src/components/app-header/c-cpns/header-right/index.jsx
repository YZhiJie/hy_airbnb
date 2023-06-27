// rmc
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  // 定义组件内部的状态
  const [showPanel, setShowPanel] = useState(false)

  // 副作用代码
  useEffect(() => {
    // 只需要执行一次的代码

    function windowClickHandle() {
      setShowPanel(false)
    }

    // addEventListener 参数3 用于设置是否启用事件捕获(从外向内依次触发事件)
    window.addEventListener('click', windowClickHandle, true)

    // 清除副作用
    return () => {
      window.removeEventListener('click', windowClickHandle, true)
    }
  }, [])

  // 事件处理函数
  function profileClickHandle() {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>

      <div className='profile' onClick={(e) => profileClickHandle()}>
        <IconMenu />
        <IconAvatar />

        {showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
