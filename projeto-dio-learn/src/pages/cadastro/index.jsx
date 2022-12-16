import { useNavigate } from 'react-router-dom'

//para usar forms com react, essas bibliotecas ajudam a desenrrolar o projeto
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'


import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/button'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Container, Column,  Title, CriarText, EsqueciText, Row, TitleLogin, Wrapper, SubTitleLogin } from  './styles'
import { api } from '../../components/services/api'
 
const Cadastro = () =>{

    const schema = Yup.object().shape({
        name: Yup.string()
          .required('First Name is required'),
        lastName: Yup.string()
          .required('Last Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .concat(Yup.string().required('Password is required'))
          .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
          .when('password', (password, schema) => {
            if (password) return schema.required('Confirm Password is required');
          })
          .oneOf([Yup.ref('password')], 'Passwords must match')
      }).required();

      
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
            resolver: yupResolver(schema),
            mode: 'onChange',
            
    });

    const { name, lastName, email, passaword, confirmPassword} = errors
    
    if(lastName){
        console.log(errors)
    }


    const onSubmit = async dataForm => {
        try{
            const { data } = await api.get(`users?email=${dataForm.email}&password=${dataForm.pass}`)
            if (data.length === 1){
                navigate('/feed')
            }else{
                alert(`Usuário já existe`)
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
                            Crie sua conta e seja o personagem principal da sua carreira
                        </Title>
                    </Column>
                    <Column>
                        <Wrapper>
                            <TitleLogin>Criação de conta</TitleLogin>
                            <SubTitleLogin>Crie sua conta and make the change._</SubTitleLogin>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input name="name" ErrorMensage={name ? errors.name.message : null} control={control} placeholder= 'Name' leftIcon={<MdPerson /> } value={e => e.state.value || "" }></Input>
                                <Input name="lastName" ErrorMensage={lastName ?  errors.lastName.message : null} control={control} placeholder= 'Last Name' leftIcon={<MdPerson /> } value={e => e.state.value || "" }></Input>
                                <Input name="email" ErrorMensage={email ? errors.email.message : null} control={control} placeholder= 'E-mail' leftIcon={<MdEmail /> } value={e => e.state.value || "" }></Input>
                                <Input name="password" ErrorMensage={passaword ? errors.password.message : null} control={control} placeholder= 'Senha' type="password" leftIcon={<MdLock /> } value={e => e.state.value || "" } ></Input>
                                <Input name="confirmPassword" ErrorMensage={confirmPassword ? errors.confirmPassword.message : null} type="password" control={control} placeholder= 'Repetir a senha'  leftIcon={<MdLock /> } value={e => e.state.value || "" } ></Input>
                                <Button tittle="Criar Conta" variant="secundary" type="submit"/>
                            </form>
                            <Row>
                                <CriarText>Já tem conta?    </CriarText>
                            </Row>
                        </Wrapper>
                    </Column>
            </Container>  
            </>
    )
}

export default Cadastro


