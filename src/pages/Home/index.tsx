import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Intro />

      <CoffeeList />
    </Container>
  )
}
