import React from "react";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";
import {
    BuscarInputContainer,
    Column,
    Row,
    Container,
    Wrapper,
    Menu,
    MenuRight,
    UserPicture,
    Input,
    Logo

} from "./style"
const Header = ({autenticado}) =>{
    const navigate = useNavigate()

    const handleClickSingIn = () =>{
        navigate('/login')
    }

    const handleClickLogIn = () =>{
        navigate('/login')
    }

    return(
        <>
            <Wrapper>
                <Container>
                    <Row>
                        <Logo alt="logo qualquer" />
                        {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..."></Input>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                        ) : null}
                    </Row>
                    <Row>
                    {autenticado ? (
                        <UserPicture src="https://media-exp1.licdn.com/dms/image/D4D35AQH6SEqN9f1eEA/profile-framedphoto-shrink_100_100/0/1670072177878?e=1671037200&v=beta&t=Mf-vyGzLbrUOUNhoYDoxXc1gRaPSqb-qCA6knqHTtfE"/>
                    ) : (
                        <>
                        <MenuRight href="">Home</MenuRight>
                        <Button tittle='Entrar' onClick={handleClickSingIn}></Button>
                        <Button tittle='Cadastrar' onClick={handleClickLogIn}></Button>
                        </>
                        )}
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

export  { Header }