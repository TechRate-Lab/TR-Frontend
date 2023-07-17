import React from 'react'
import {
  ReputacaoCard,
  ReputacaoCardEmpresa,
  ReputacaoCardListaEmpresas,
  ReputacaoCardTitle,
  ReputacaoCards,
  ReputacaoSection,
  ReputacaoText,
  ReputacaoTextSubTitle,
  ReputacaoTextTitle
} from './style'
import empresa1 from '../../../assets/logo_ifood.png'
import empresa2 from '../../../assets/logo_tim.png'
import empresa3 from '../../../assets/logo_perfectpay.png'
import empresa4 from '../../../assets/logo_shopee.png'
import empresa5 from '../../../assets/logo_magazine-luiza.png'

const Reputacao: React.FC = () => {
  return (
    <>
      <ReputacaoSection>
        <ReputacaoCards>
          <ReputacaoCard className="melhores">
            <ReputacaoCardTitle>
              Empresas com melhor avaliação na TechRate
            </ReputacaoCardTitle>
            <ReputacaoCardListaEmpresas>
              <ReputacaoCardEmpresa>
                <p>1°</p>
                <img src={empresa1} alt="empresa" />
                <p>iFood</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>2°</p>
                <img src={empresa2} alt="empresa" />
                <p>TIM</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>3°</p>
                <img src={empresa3} alt="empresa" />
                <p>PerfectPay</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>4°</p>
                <img src={empresa4} alt="empresa" />
                <p>Shopee</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>5°</p>
                <img src={empresa5} alt="empresa" />
                <p>Magalu</p>
              </ReputacaoCardEmpresa>
            </ReputacaoCardListaEmpresas>
          </ReputacaoCard>
          <ReputacaoCard className="piores">
            <ReputacaoCardTitle>
              Empresas com pior avaliação na TechRate
            </ReputacaoCardTitle>
            <ReputacaoCardListaEmpresas>
              <ReputacaoCardEmpresa>
                <p>1°</p>
                <img src={empresa1} alt="empresa" />
                <p>iFood</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>2°</p>
                <img src={empresa2} alt="empresa" />
                <p>TIM</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>3°</p>
                <img src={empresa3} alt="empresa" />
                <p>PerfectPay</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>4°</p>
                <img src={empresa4} alt="empresa" />
                <p>Shopee</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>5°</p>
                <img src={empresa5} alt="empresa" />
                <p>Magalu</p>
              </ReputacaoCardEmpresa>
            </ReputacaoCardListaEmpresas>
          </ReputacaoCard>
        </ReputacaoCards>
        <ReputacaoText>
          <ReputacaoTextTitle>
            Em breve: Empresas em destaque
          </ReputacaoTextTitle>
          <ReputacaoTextSubTitle>
            Aqui você poderá descobrir a reputação das empresas de tecnologia do
            seu interesse. Nos ajude avaliando uma!
          </ReputacaoTextSubTitle>
        </ReputacaoText>
      </ReputacaoSection>
    </>
  )
}

export default Reputacao
