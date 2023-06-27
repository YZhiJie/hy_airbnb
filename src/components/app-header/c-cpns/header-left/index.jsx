// rmc
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  function logoClickHandle() {
    navigate('/home')
  }
  
  return (
    <LeftWrapper>
      <div className='logo' onClick={logoClickHandle}>
        <IconLogo />
        <span className='title'>爱彼迎</span>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
