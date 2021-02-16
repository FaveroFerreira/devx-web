import { 
  Parent,
  Header,
  Main,
  Card, 
} from './styled-components'

export const App = () => {
  return (
    <Parent flexDirection="column">
      <Header>
        <a href="/">
          Logo
        </a>
      </Header>
      <Main>
        <Card>
          Olá teste
        </Card>
      </Main>
    </Parent>
  );
}