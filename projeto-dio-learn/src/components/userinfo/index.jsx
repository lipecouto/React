import React from "react";
import {
    Container,
    UserPicture,
    NameText,
    Progress
} from "./styles"

// criando componentes dinamicos com REACT, 
// para isso basta adicionar à funçõa as variaveis que deseja receber quando esse componente for importado no index onde haverá o componente.

const UserInfo = ({nome, image, percentual}) =>{
    return(
        <Container>
            <UserPicture src={image}/>
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
}

export {UserInfo}