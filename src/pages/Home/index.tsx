import React from 'react'
import { Footer } from '../../components/Footer'
import Header from '../../components/Header/Header'
import Avaliar from './Avaliar'
import HeroSection from './Inicio/HeroSection'
import Reputacao from './Reputacao'
import Sobre from './Sobre/About'
import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeroSection />
      <Sobre />
      <Reputacao />
      <Avaliar />
      <Footer />
    </Container>
  )
}

export default Home
