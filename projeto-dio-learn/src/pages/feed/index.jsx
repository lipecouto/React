import { Header } from '../../components/header'

import { Container, Column, Title, TitleHighlight } from  './styles'
import { UserInfo } from '../../components/userinfo'
import { Card } from '../../components/card'


const Feed = () =>{
    return (<>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight>#RANKING TOP 5</TitleHighlight>
                    <UserInfo percentual={32} nome="Philipe" image="https://media-exp1.licdn.com/dms/image/D4D35AQH6SEqN9f1eEA/profile-framedphoto-shrink_100_100/0/1670072177878?e=1671037200&v=beta&t=Mf-vyGzLbrUOUNhoYDoxXc1gRaPSqb-qCA6knqHTtfE" />
                    <UserInfo percentual={45} nome="Philipe" image="https://media-exp1.licdn.com/dms/image/D4D35AQH6SEqN9f1eEA/profile-framedphoto-shrink_100_100/0/1670072177878?e=1671037200&v=beta&t=Mf-vyGzLbrUOUNhoYDoxXc1gRaPSqb-qCA6knqHTtfE" />
                    <UserInfo percentual={12} nome="Philipe" image="https://media-exp1.licdn.com/dms/image/D4D35AQH6SEqN9f1eEA/profile-framedphoto-shrink_100_100/0/1670072177878?e=1671037200&v=beta&t=Mf-vyGzLbrUOUNhoYDoxXc1gRaPSqb-qCA6knqHTtfE" />
                    <UserInfo percentual={78} nome="Philipe" image="https://media-exp1.licdn.com/dms/image/D4D35AQH6SEqN9f1eEA/profile-framedphoto-shrink_100_100/0/1670072177878?e=1671037200&v=beta&t=Mf-vyGzLbrUOUNhoYDoxXc1gRaPSqb-qCA6knqHTtfE" />
                </Column>
            </Container>  
            </>
    )
}

export { Feed }