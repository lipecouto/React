import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/button'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Container, Column,  Title, CriarText, EsqueciText, Row, TitleLogin, Wrapper, SubTitleLogin } from  './styles'
import { api } from '../../components/services/api'
 
const schema = yup.object({
    email: yup.string().email('email não tem formato valido').required('Obrigatorio'),
    pass: yup.string().min(3, 'Deve ter 3 characters no minimo').required('Obrigatorio'),
  }).required();


const Login = () =>{

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    
    console.log(isValid, errors)

    const onSubmit = async dataForm => {
        try{
            const { data } = await api.get(`users?email${dataForm.email}&senha=${dataForm.password}`)
            console.log('retorno api', data)
            if (data.length === 1){
                navigate('/feed')
            }else{
                alert(`email ou senha inválido`)
            }
        }catch{
            alert('Erro ao validar, tente novamente.')
        }
        
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input name="email" errorMsg={errors.email.message} control={control} placeholder= 'E-mail' leftIcon={<MdEmail />} ></Input>
                                <Input name="pass" errorMsg={errors.pass.message} control={control} placeholder= 'Senha' type="password" leftIcon={<MdLock />}></Input>
                                <Button tittle="Entrar" variant="secundary" type="submit"/>
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

export { Login }