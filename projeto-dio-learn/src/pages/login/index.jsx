import { useNavigate } from 'react-router-dom'

//para usar forms com react, essas bibliotecas ajudam a desenrrolar o projeto
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'


import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/button'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Container, Column,  Title, CriarText, EsqueciText, Row, TitleLogin, Wrapper, SubTitleLogin } from  './styles'
import { api } from '../../components/services/api'
 
const Login = () =>{

    const schema = yup.object({
        email: yup.string().email('email não tem formato valido').required('Obrigatório'),
        pass: yup.string().min(3, 'Deve ter 3 characters no minimo').required('Obrigatório'),
      }).required();

      
    const navigate = useNavigate();
    
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
            resolver: yupResolver(schema),
            mode: 'onChange',
    });

    const onSubmit = async dataForm => {
        try{
            console.log(dataForm.email)
            console.log(dataForm.pass)
            
            const { data } = await api.get(`users?email=${dataForm.email}&password=${dataForm.pass}`)
            console.log(data)
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
                            <TitleLogin>Faça seu Login</TitleLogin>
                            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input name="email" ErrorMensage={Object.keys(errors).length > 1 ? errors.email.message : null} control={control} placeholder= 'E-mail' leftIcon={<MdEmail /> } value={e => e.state.value || "" }></Input>
                                <Input name="emailconfirm" ErrorMensage={Object.keys(errors).length > 1 ? errors.pass.message : null} control={control} placeholder= 'Confirmar E-mail' leftIcon={<MdEmail /> } value={e => e.state.value || "" }></Input>
                                <Button tittle="Login" variant="secundary" type="submit"/>
                            </form>
                            <Row>
                                <CriarText>Crie sua conta aqui</CriarText>
                                <EsqueciText>Esqueci minha senha</EsqueciText>
                            </Row>
                        </Wrapper>
                    </Column>
            </Container>  
            </>
    )
}

export { Login }


