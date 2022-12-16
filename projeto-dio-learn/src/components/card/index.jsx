import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXALn_zu9b8FupGbNisZlFlOqHp94mqVP9-CorzXGx&s'/>
      <Content>
        <UserInfo>
            <UserPicture src='https://lh3.googleusercontent.com/ogw/AOh-ky0z_jH7oopyELadogdSFdXTSViscuVePf5u4P-Qr1U=s64-c-mo' />
            <div>
                <h4>Philipe</h4>
                <p>Ha x minutos</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>Projeto XPTO</h4>
            <p>Projeto é XPTO ABCD <strong>Saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #JAVASCRIPT</h4>
            <p>
                <FaThumbsUp /> 10
            </p>
        </HasInfo>
      </Content>
    </CardContainer>
    
  )
}

export { Card }