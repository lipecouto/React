import { useNavigate } from 'react-router-dom'

import imagemfundo from '../../public/logo512.png'
import { Button } from '../../components/button'
import { Header } from '../../components/header'
import { Container, TextContent,  Title, TitleHighlight } from  './styles'


const Home = () =>{
    
    const navigate = useNavigate();

    const handleClickSingIn = () =>{
        navigate('/login')

    }

    return (<>
            <Header />
            <Container>
                    <div>
                        <Title>
                            <TitleHighlight>
                                Implemente
                                <br/>
                            </TitleHighlight>
                            o seu futuro
                        </Title>
                        <TextContent>
                            Lorem Ipsum fuz rodar, Lorem Ipsum fuz rodar Lorem Ipsum fuz rodar v Lorem Ipsum fuz rodar Lorem Ipsum fuz rodar,
                        </TextContent>
                        <Button tittle="Começar" variant='secundary' onClick={handleClickSingIn} />
                    </div>
                    <div>
                        <img src={imagemfundo} alt='Imagem principal' />
                    </div>
            </Container>  
            </>
    )
}

export default Home