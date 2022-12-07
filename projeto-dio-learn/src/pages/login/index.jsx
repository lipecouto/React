import { useNavegate } from 'react-router-dom'

import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/button'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Container, Column,  Title, CriarText, EsqueciText, Row, TitleLogin, Wrapper, SubTitleLogin } from  './styles'


const Login = () =>{

    const navigate = useNavegate();

    const handleClickSingIn = () =>{
        navigate('/login')

    }

    return (<>
            <Header />
            <Container>
                    <Column>
                        <Title>
                            A Plataforma para você aprender com experts, dominar...
                        </Title>
                    </Column>
                    <Column>
                        <Wrapper>
                            <TitleLogin>Faça seu cadastro</TitleLogin>
                            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                            <form>
                                <Input placeholder= 'E-mail' leftIcon={<MdEmail />} ></Input>
                                <Input placeholder= 'Senha' type="password" leftIcon={<MdLock />}></Input>
                                <Button tittle="Entrar" variant="secundary" onClick={handleClickSingIn} type="Button"/>
                            </form>
                            <Row>
                                <EsqueciText>Esqueci minha senha</EsqueciText>
                                <CriarText>Criar conta</CriarText>
                            </Row>
                        </Wrapper>
                    </Column>
            </Container>  
            </>
    )
}

export default Login