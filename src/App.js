import { React, useState } from 'react';
import logo from './theme-assets/images-3d-animation/logo.png';
import Slider from 'react-perfect-slider';

function App() {
   const [vlbeneficios, setvlbeneficios] = useState([]);
   const [qtdtokens, setqtdtokens] = useState('0');
   const [retornoano, setretornoano] = useState('0');
   const [retornototalano, setretornototalano] = useState('0');
   const [reducaoco2ano, setreducaoco2ano] = useState('0');
   const [arvores, setarvores] = useState('0');

   function calculaBeneficiosKaa(valor){
      const valores = {
          qtdtokens: (valor/40).toFixed(2),
          retornoano: (valor*(30/100)).toFixed(2),
          reducaoco2ano: (((valor/40)/250)*10*1000).toFixed(2),
          arvores: (((((valor/40)/250)*10*1000)/1000)*8).toFixed(2)
      }
      return valores;
  }

  function onChanceCalc(e){
   var formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
   const vlinvestido = e.target.value.toLocaleString('pt-BR', formato).replace(",", ".");
   //console.log(vlinvestido);
   //const resultado = calculaBeneficiosKaa(vlinvestido);
   // setqtdtokens((vlinvestido/40).toFixed(2));
   // setretornoano((vlinvestido*(30/100)).toFixed(2));
   //setretornototalano((vlinvestido+(vlinvestido*(30/100))).toFixed(2));
   // setreducaoco2ano((((vlinvestido/40)/250)*10*1000).toFixed(2));
   // setarvores((((((vlinvestido/40)/250)*10*1000)/1000)*8).toFixed(2));

   setvlbeneficios(calculaBeneficiosKaa(vlinvestido))
   // console.log(vlbeneficios);
  }

  return (
    <div classNameName="App">
      <header className="page-header">
         {/* <!-- Horizontal Menu Start--> */}
         <nav className="main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1">
            <div className="container">
               <a className="navbar-brand animated" data-animation="fadeInDown" data-animation-delay="1s" href="#head-area"><img src={logo} alt="Crypto Logo"/><span className="brand-text"><span className="font-weight-bold">KAA</span> Coin</span></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div id="navigation" className="navbar-nav ml-auto">
                     <ul className="navbar-nav mt-1">
                        <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.1s">
                           <a className="nav-link" href="#about">O que ?? KAA</a>
                        </li>
                        <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.2s">
                           <a className="nav-link" href="#problem-solution">Solu????es</a>
                        </li>
                        <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.3s">
                           <a className="nav-link" href="#whitepaper">Whitepaper</a>
                        </li>
                        {/* <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.4s">
                           <a className="nav-link" href="#token-sale-mobile-app">Venda do Token</a>
                        </li> */}
                        <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.5s">
                           <a className="nav-link" href="#roadmap">Roadmap</a>
                        </li>
                        <li className="dropdown show mr-4 animated" data-animation="fadeInDown" data-animation-delay="1.7s">
                           <a className="dropdown-toggle" href="#" role="button" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="flag-icon flag-icon-br"></span> PT</a>
                           <div className="dropdown-menu" aria-labelledby="language">
                              <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-us"></span> EN</a>
                              <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-es"></span> SP</a>
                              <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-mq"></span> FR</a>
                           </div>
                        </li>
                     </ul>
                     <span id="slide-line"></span>
                     <form className="form-inline mt-2 mt-md-0">
                           <a className="btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated" data-animation="fadeInDown" data-animation-delay="1.8s" href="#" target="_blank">Entrar</a>
                     </form>
                  </div>
               </div>
            </div>
         </nav>
         {/* <!-- /Horizontal Menu End--> */}
      </header>
      <div class="content-wrapper">
         <div class="content-body">
            <main>
               <section class="head-area" id="head-area">
                  <Slider 
                     styles={{
                        width: '100vw',
                        height: '100vh'
                     }}
                     transitionDuration={1000}
                     autoplayDuration={6000}
                     renderControls={(next, previous) => [
                  ]}>
                        <div class="head-content d-flex align-items-center slide-banner01">
                           <div class="container">
                              <div class="banner-wrapper">
                                 <div class="row align-items-center">
                                    <div class="col-lg-6 col-md-12">
                                       <div class="banner-content pt-5">
                                          {/* <h1 class="best-template animated" data-animation="fadeInUpShorter" data-animation-delay="1.5s">Security Token lastreado por hectares <br class="d-none d-xl-block"/>de florestas preservadas e recuperadas, somado a atividades econ??micas <br class="d-none d-xl-block"/>sustent??veis em suas ??reas</h1> */}
                                          <h1 class="best-template animated" data-animation="fadeInUpShorter" data-animation-delay="1.5s">Security Token lastreado por hectares de florestas preservadas e recuperadas</h1>
                                          <h3 class="d-block white animated" data-animation="fadeInUpShorter" data-animation-delay="1.6s">Agora ficou f??cil preservar o planeta <br class="d-none d-xl-block"/>com o KAA Coin.</h3>
                                          <div class="mt-5">
                                             {/* <a href="#token-sale-mobile-app" class="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated" data-animation="fadeInUpShorter" data-animation-delay="1.7s">Venda do Token</a> */}
                                             <a href="#whitepaper" class="btn btn-lg btn-gradient-purple btn-glow mb-2 animated" data-animation="fadeInUpShorter" data-animation-delay="1.8s">Whitepaper</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="head-content d-flex align-items-center slide-banner02">
                           <div class="container">
                              <div class="banner-wrapper">
                                 <div class="row align-items-center">
                                    <div class="col-lg-6 col-md-12">
                                       <div class="banner-content pt-5">
                                          {/* <h1 class="best-template animated" data-animation="fadeInUpShorter" data-animation-delay="1.5s">Crypto ICO is modern, clean and <br class="d-none d-xl-block"/>gradient ui ico most trending <br class="d-none d-xl-block"/>template of 2018</h1> */}
                                          <h1 class="best-template animated" data-animation="fadeInUpShorter" data-animation-delay="1.5s">Investimento com retorno superior ao LCI e ao LCA, que conta com a seguran??a e liquidez do Blockchain da Ethereum</h1>
                                          <h3 class="d-block white animated" data-animation="fadeInUpShorter" data-animation-delay="1.6s">Conhe??a nossa proposta para a preserva????o <br class="d-none d-xl-block"/>e conserva????o ambiental.</h3>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                  </Slider>
               </section>
            {/* <!-- About --> */}
               <section class="about section-padding" id="about">
                  <div class="container">
                     <div class="heading text-center">
                        <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                           <h6 class="sub-title">Sobre</h6>
                           <h2 class="title">O que ?? KAA Coin</h2>
                        </div>
                        <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">O KAA COIN Security Token ?? um Smart Contract negociado na Binance Exchange 
                           <br class="d-none d-xl-block" />com a seguran??a da Blockchain Ethereum.
                        </p>
                     </div>
                     <div class="content-area">
                        <div class="row">
                           <div class="col-md-12 col-lg-6">
                              <h4 class="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">Como colaborar para ajudar o planeta e ao mesmo tempo lucrar com essa atitude?</h4>
                              {/* <h6 class="pt-4 pb-2 animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">Cryptocurrency exchanges or digital currency exchanges (DCE) are businesses that allow customers to trade cryptocurrencies or digital currencies for other assets.</h6> */}
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">O KAA COIN ?? um Security Token lastreado por mais de 160 mil hectares de florestas preservadas e recuperadas, somado a manejo sustent??vel e outras atividades econ??micas como commodities sustent??veis e convencionais em suas ??reas. E al??m disso temos as nossas verticais associadas aos Objetivos de Desenvolvimento Sustent??vel (ODS), a projetos so??ci??o??am??bi??en??tais na regi??o que estamos inseridos que torna faz com que al??m de voc?? estar investindo na seguran??a do futuro do planeta tamb??m contar com um retorno de investimento superior ao LCI e ao LCA.</p>
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s">Uma unidade do KAA COIN Security Token equivale a 2 Unidades de Cr??ditos de Carbono e os clientes que tiverem adquirido o Security Token podem comprar um pacote de Cr??dito de Carbono com desconto de proporcional a sua quantidade de KAA COIN, com possibilidade a certifica????o de Carbono Neutro e ESG.</p>
                           </div>
                           <div class="col-md-12 col-lg-6 animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">
                              <div class="position-relative what-is-crypto-img float-xl-right">
                                 <img class="img-fluid" src="./theme-assets/images-3d-animation/what-crypto.png" alt="What is Crypto?" />
                                 {/* <div class="play-video text-center">
                                    <a href="#" class="play rounded-circle btn-gradient-purple btn-glow video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/UXAJu3zS4bU" data-target="#ico-modal"><i class="ti-control-play"></i></a>
                                    <span class="mt-2 d-none d-md-block">How it works</span>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               {/* <!--/ About --> */}
               {/* <!-- Problems & Solutions --> */}
               <section id="problem-solution" class="problem-solution section-pro section-padding ">
                  <div class="container">
                     <div class="heading text-center">
                        <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                           <h6 class="sub-title">Solu????es</h6>
                           <h2 class="title">Problemas &amp; <strong>Solu????es</strong></h2>
                        </div>
                        <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">A situa????o ?? cr??tica: segundo o World Resources Institute (WRI), o mundo perdeu 4,2 milh??es de hectares de florestas tropicais prim??rias em 2020, um aumento de 12% frente a 2019. E o Brasil foi respons??vel por 1,7 milh??o de hectares perdidos.  
                        {/* <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">A situa????o ?? cr??tica: segundo o World Resources Institute (WRI), o mundo perdeu 4,2 milh??es de hectares de florestas   */}
                           {/* <br class="d-none d-xl-block" />tropicais prim??rias em 2020, um aumento de 12% frente a 2019. E o Brasil foi respons??vel por 1,7 milh??o de hectares perdidos. */}
                        </p>
                     </div>
                     <div class="problems">
                        <div class="row">
                           <div class="col-md-12 col-lg-6">
                              <div class="heading mb-4">
                                 <h4 class="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Problemas</h4>
                              </div>
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">As queimadas na Amaz??nia, faz o mundo inteiro acreditar que o Brasil seja o principal respons??vel pelo aumento da temperatura na Terra. Entretanto, o Brasil n??o est?? entre os 6 maiores poluidores do planeta que s??o China, Estados Unidos, ??ndia, R??ssia e Jap??o, seguidos do somat??rio dos pa??ses da Uni??o Europeia.
                              De acordo com a ONU Meio Ambiente, as emiss??es globais de gases do efeito estufa em 2030 precisam ser de 25% a 55% menores do que em 2018 para limitar o aumento de temperatura m??dia da Terra a entre 1,5??C e 2??C, limite considerado seguro por cientistas.</p>
                              {/* <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">Even interoperating new technologies with old centralised resources can prove useful in making the paradigm shift from Web 2 to Web 3 happen. Now we own our data, we can prove that we own what we have and have created it on different platforms, but how do we put it together into a whole new cohesive framework.</p> */}
                           </div>
                           <div class="col-md-12 col-lg-6 text-center">
                              <img src="./theme-assets/images-3d-animation/problems-graphic.png" class="problems-img animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s" alt="problems-graphic"/>
                           </div>
                        </div>
                     </div>
                     <div class="solutions mt-5">
                        <div class="row">
                           <div class="col-md-12 col-lg-6 text-center">
                              <img src="./theme-assets/images-3d-animation/solutions-graphic.png" class="solutions-img animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s" alt="problems-graphic"/>
                           </div>
                           <div class="col-md-12 col-lg-6 move-first">
                              <div class="heading mb-4">
                                 <h4 class="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Solu????es</h4>
                              </div>
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">E uma das formas de contribuir com esse objetivo ?? reduzir e/ou neutralizar as emiss??es de carbono. E hoje o Brasil ?? o principal produtor mundial dessa commodities e est?? na dianteira da cria????o de uma nova economia verde de conserva????o de florestas. O pa??s tem cerca de 560 milh??es de hectares de ??rea com vegeta????o nativa, o que corresponde a 66% do territ??rio total, representando um enorme potencial para o mercado de cr??ditos de carbono baseado na redu????o do desmatamento e degrada????o da vegeta????o nativa.</p>
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">N??s da KAA COIN entendemos que este ?? o momento de utilizarmos todas as nossas riquezas naturais aliada ao que existe de mais moderno em tecnologias, inova????es, estrat??gias e know-how dispon??veis para desacelerarmos as mudan??as clim??ticas, preservarmos o Meio Ambiente, protegendo o Planeta e principalmente a vida.</p>
                              {/* <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">In centralized banking and economic systems such as the Federal Reserve System, corporate boards or governments control the supply of currency by printing units of fiat money or demanding additions to digital banking ledgers.</p> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               {/* <!--/ Problems & Solutions --> */}
               {/* <!-- Whitepaper --> */}
               <section id="whitepaper" class="whitepaper section-padding">
                  <div class="container">
                     <div class="heading text-center">
                        <h6 class="sub-title">Documentos</h6>
                        <h2 class="title">Whitepaper</h2>
                        <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Baixe o nosso Whitepaper e conhe??a todo o projeto de sustentabilidade mais lucrativo do planeta.
                           {/* <br class="d-none d-xl-block"/>Terms of service can also be merely a disclaimer, especially regarding the use of websites. */}
                        </p>
                     </div>
                     <div class="row">
                        <div class="col-lg-5 col-md-12">
                           <div class="whitepaper-img">
                              <img class="img-fluid animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s" src="./theme-assets/images-3d-animation/whitepaper.png" alt="whitepaper"/>
                           </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                           <div class="content-area">
                              <h4 class="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">Leia nosso Whitepaper</h4>
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">Desde o in??cio da d??cada de 1990, o termo "white paper", ou "whitepaper", tem sido aplicado a documentos usados como ferramentas de marketing e neg??cios.</p>
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">Um white paper ?? um documento oficial que explica de forma concisa tudo sobre o Projeto KAA COIN Security Token, incluindo a sua tecnologia, investimento e toda a sua estrat??gia de preserva????o e recupera????o de florestas da Amaz??nia e como tornar tudo lucrativo para todo o ecossistema envolvido na salva????o do planeta.</p>
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s">Acesse o nosso whitepaper clicando em uma das op????es abaixo e entenda porque o KAA COIN Token ?? a sua melhor op????o de investimento.</p>
                              <div class="whitepaper-languages">
                                 <div class="row">
                                    <div class="col-6 col-md-3 text-center mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">
                                       <a href="#" title="Portugu??s">
                                          <img src="./theme-assets/images-3d-animation/flag-5.png" alt="Portugu??s"/>
                                          <div class="lang-text">
                                             <span class="icon ti-download mr-1"></span>
                                             <span class="language">Portugu??s</span>
                                          </div>
                                       </a>
                                    </div>
                                    <div class="col-6 col-md-3 text-center mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">
                                       <a href="#" title="English">
                                          <img src="./theme-assets/images-3d-animation/flag-1.png" alt="English"/>
                                          <div class="lang-text">
                                             <span class="icon ti-download mr-1"></span>
                                             <span class="language">English</span>
                                          </div>
                                       </a>
                                    </div>
                                    <div class="col-6 col-md-3 text-center mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s">
                                       <a href="#" title="Espanhol">
                                          <img src="./theme-assets/images-3d-animation/flag-2.png" alt="Espanhol"/>
                                          <div class="lang-text">
                                             <span class="icon ti-download mr-1"></span>
                                             <span class="language">Espanhol</span>
                                          </div>
                                       </a>
                                    </div>
                                    <div class="col-6 col-md-3 text-center mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.9s">
                                       <a href="#" title="Frances">
                                          <img src="./theme-assets/images-3d-animation/flag-4.png" alt="Frances"/>
                                          <div class="lang-text">
                                             <span class="icon ti-download mr-1"></span>
                                             <span class="language">Frances</span>
                                          </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               {/* <!--/ Whitepaper --> */}
               {/* <!-- Roadmap --> */}
               <section id="roadmap" class="roadmap section-padding">
                  <div class="container">
                     <div class="heading text-center">
                        <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                           <h6 class="sub-title">Implementa????o</h6>
                           <h2 class="title">Roadmap</h2>
                        </div>
                        <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Continuamos melhorando as suas estrat??gias de sustentabilidade de preserva????o e recupera????o de florestas e os servi??os em todos os n??veis, inclusive em seus contratos inteligentes, tecnologia, investimentos e mercado de cr??ditos de carbono. Esta ??rea mostra o progresso feito at?? agora e quais s??o os nossos pr??ximos passos.
                           {/* <br class="d-none d-xl-block"/>the internet as of 7 January 2018 is over 1384 and growing. */}
                        </p>
                        {/* <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">Continuamos melhorando as suas estrat??gias de sustentabilidade de preserva????o e recupera????o de florestas e os servi??os em todos os n??veis, inclusive em seus contratos inteligentes, tecnologia, investimentos e mercado de cr??ditos de carbono. Esta ??rea mostra o progresso feito at?? agora e quais s??o os nossos pr??ximos passos.</p> */}
                     </div>
                     <div class="row animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">
                        <div class="col-12">
                           <div class="roadmap-container">
                              <div class="swiper-container">
                                 <div class="swiper-wrapper timeline">
                                    <div class="swiper-slide">
                                       <div class="roadmap-info">
                                          <div class="timestamp completed">
                                             <span class="date">Fevereiro de 2022</span>
                                          </div>
                                          <div class="status completed">
                                             <span>Ideia e desenvolvimento <br/>t??cnico e estrat??gico</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="swiper-slide active">
                                       <div class="roadmap-info">
                                          <div class="timestamp completed active">
                                             <span class="date">Abril de 2022</span>
                                          </div>
                                          <div class="status completed active">
                                             <span>Conclus??o do Projeto, <br/>Plataforma e Token</span>
                                             <span class="live">Atualmente</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="swiper-slide">
                                       <div class="roadmap-info">
                                          <div class="timestamp">
                                             <span class="date">Junho de 2022</span>
                                          </div>
                                          <div class="status">
                                             <span>Pr?? venda - 1.000.000 <br/>Tokens</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="swiper-slide">
                                       <div class="roadmap-info">
                                          <div class="timestamp remaining">
                                             <span class="date">Julho de 2022</span>
                                          </div>
                                          <div class="status remaining">
                                             <span>ICO Initial Coin Offering <br/> 5.000.000 Tokens </span>
                                          </div>
                                       </div>
                                    </div>
                                    {/* <div class="swiper-slide">
                                       <div class="roadmap-info">
                                          <div class="timestamp remaining">
                                             <span class="date">November 2018</span>
                                          </div>
                                          <div class="status remaining">
                                             <span>Software development kit <br/>for integrations</span>
                                          </div>
                                       </div>
                                    </div> */}
                                    <div class="swiper-slide">
                                       <div class="roadmap-info">
                                          <div class="timestamp remaining">
                                             <span class="date">Agosto de 2022</span>
                                          </div>
                                          <div class="status remaining">
                                             <span>Market Exchange <br/>24.000.000 Tokens</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="swiper-control">
                                 <span class="prev-slide"></span>
                                 <span class="next-slide"></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               {/* <!--/ Roadmap --> */}
               {/* <!-- Our Coin --> */}
               {/* <section id="our-coin" class="our-coin section-padding ">
                  <div class="container">
                     <div class="heading text-center">
                        <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                           <h6 class="sub-title">About coin</h6>
                           <h2 class="title">Our COIN</h2>
                        </div>
                        <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Decentralized cryptocurrency is produced by the entire cryptocurrency system collectively
                           <br class="d-none d-xl-block"/>at a rate which is defined when the system is created and which is publicly known. 
                        </p>
                     </div>
                     <div class="row">
                        <div class="col-lg-5 col-md-12 animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">
                           <div class="coin-img">
                              <img class="img-fluid" src="./theme-assets/images-3d-animation/our-coin.png" alt="Coin Image"/>
                           </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                           <div class="heading mb-4">
                              <h4 class="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">CIC Coin</h4>
                           </div>
                           <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">The validity of each cryptocurrency's coins is provided by a blockchain. A blockchain is a continuously growing list of records, called blocks, which are linked and secured using cryptography.Each block typically contains a hash pointer as a link to a previous block, a timestamp and transaction data. By design, blockchains are inherently resistant to modification of the data. a blockchain is typically managed by a peer-to-peer network collectively adhering to a protocol for validating new blocks. Once recorded</p>
                           <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">The block time is the average time it takes for the network to generate one extra block in the blockchain.[21] Some blockchains create a new block as frequently as every five seconds.</p>
                        </div>
                     </div>
                  </div>
               </section> */}
               {/* <!--/ Our Coin --> */}
               {/* <!-- Token Stats --> */}
               <section id="token-distribution" class="token-distribution section-padding">
                  <div class="container">
                     <div class="heading text-center">
                        <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                           <h6 class="sub-title">Composi????o </h6>
                           <h2 class="title">Token Distribui????o</h2>
                        </div>
                        <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Conhe??a a divis??o do Security Token mais lucrativo e sustent??vel da atualidade.
                           {/* <br class="d-none d-xl-block"/>undertaken by the founding team until launch. For some of the larger projects. */}
                        </p>
                     </div>
                     <div class="row">
                        <div class="col-md-12 col-lg-6 pr-5">
                           <div class="content-area">
                              <h4 class="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">Detalhes</h4>
                              <p class="mt-1 animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">O ICO no mercado cripto ?? equivalente ao IPO feito pelas empresas que decidem entrar na bolsa. Em um ICO, os investidores podem tanto fazer os seus investimentos com dinheiro, quanto usar outras criptomoedas, como o Bitcoin e a Ether, da rede Ethereum. para ter acesso ao KAA COIN Security Token. 
                              O KAA COIN Security Token ?? um ativo digital criptografado com seguran??a Blockchain da Ethereum que tem seus investimentos feito em mais de 160 mil hectares de florestas preservadas e recuperadas, em manejo sustent??vel e outras atividades econ??micas como commodities sustent??veis e convencionais em suas ??reas e divide lucros para os mesmos investidores a curto prazo.</p>
                              {/* <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">To calculate the number of tokens you???ll receive, you can follow the following formula. Note that this applies to public presale contributions only. If you participated through a syndicate or private presale,</p> */}
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s"><span>S??mbolo:</span> <strong class="grey-accent2">KAA</strong></p>
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.9s"><span>Total supply:</span> <strong class="grey-accent2">50.000.000 Tokens</strong></p>
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.9s"><span>Equival??ncia:</span> <strong class="grey-accent2">1 KAA = 2 Cr??ditos de Carbono</strong></p>
                              <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.0s"><span>Type:</span> <strong class="grey-accent2">ERC20</strong></p>
                           </div>
                        </div>
                        <div class="col-md-12 col-lg-6 move-first animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s">
                           <div class="token-img">
                              <img class="img-fluid" src="./theme-assets/images-3d-animation/chart-token.png" alt="token-distribution"/>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               {/* <!--/ Token Stats --> */}
               {/* <!-- Simulador --> */}
               <section id="simulador" class="simulador section-padding">
                  <div class="container">
                     <div class="heading text-center">
                        <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                           <h6 class="sub-title">Pr??-venda</h6>
                           <h2 class="title">Simulador</h2>
                        </div>
                        <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Compre seus Tokens com anteced??ncia.</p>
                     </div>
                     <div class="row">
                        <div class="col-xl-4 col-md-12 mx-auto">
                           <label class="text-label">Valor do investimento (R$)</label>
                           <form class="text-center">
                              <input type="text" class="form-control animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s" name="qtdtokens" placeholder="0,00" onChange={onChanceCalc}/>
							         {vlbeneficios.qtdtokens != '0.00' ? 
                              (
                                 <button type="submit" class="btn btn-lg btn-gradient-purple btn-glow animated" data-animation="fadeInUpShorter" data-animation-delay="1.1s">Comprar Tokens</button>
                              ) : ''}
                              <br/>
                              <br/>
                           </form>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-xl-8 col-md-12 mx-auto">
                           <ul class="list-unstyled simulador-info pb-5 mb-5">
                              <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">
                                 <i class="ti-shopping-cart"></i>
                                 <span class="ml-1">{vlbeneficios.qtdtokens != '0.00' ? vlbeneficios.qtdtokens : '0'} Tokens</span>
                              </li>
                              <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">
                                 <i class="ti-medall-alt"></i>
                                 <span class="ml-1">{vlbeneficios.reducaoco2ano != '0.00' ? vlbeneficios.reducaoco2ano : '0'}kg de redu????o CO2/ano</span>
                              </li>
                              <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">
                                 <i class="ti-heart-broken"></i>
                                 <span class="ml-1">{vlbeneficios.arvores != '0.00' ? vlbeneficios.arvores : '0'} ??rvores plantadas</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </section>
               {/* <!-- Team --> */}
               <section id="team" class="team section-padding ">
                  <div class="container">
                     <div class="heading text-center">
                        <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                           <h6 class="sub-title">Nossa</h6>
                           <h2 class="title">Equipe</h2>
                        </div>
                        <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Temos um time com especialistas em diversos setores de n??g??cios, que podem orientar
                           <br class="d-none d-xl-block"/>na melhor estr??t??gia de para a valoriza????o do seu investimento.
                        </p>
                     </div>
                     {/* <div class="row team-intro justify-content-center text-center">
                        <div class="col-12 col-md-4 col-lg-2 team-width animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">
                           <span>18</span>
                           <p>Creative and
                              <br/>Dedicated People
                           </p>
                        </div>
                        <div class="col-12 col-md-4 col-lg-2 team-width animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">
                           <span>125</span>
                           <p>Years of combined experience</p>
                        </div>
                        <div class="col-12 col-md-4 col-lg-2 team-width animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">
                           <span>10</span>
                           <p>Years of blockchain experience</p>
                        </div>
                     </div> */}
                     <div class="team-profile mt-5">
                        <div class="row mb-5">
                           <div class="col-sm-12 col-md-6 col-lg-4 mb-5 animated" data-animation="flipInX" data-animation-delay="0.8s">
                              <div class="d-flex team-member">
                                 <div class="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                    <img src="./theme-assets/images-3d-animation/user-9.png" alt="team-profile-1" class="rounded-circle" width="128"/>
                                 </div>
                                 <div class="profile align-self-center">
                                    <div class="name">Krishnamurt S.</div>
                                    <div class="role">CEO &amp; CFO</div>
                                    <div class="social-profile mt-3">
                                       <a href="#" title="Linkedin" class="font-medium grey-accent2 mr-2"><i class="ti-linkedin"></i></a>
                                       <a href="#" title="Twitter" class="font-medium grey-accent2 mr-2"><i class="ti-twitter-alt"></i></a>
                                       <a href="#" title="Github" class="font-medium grey-accent2"><i class="ti-github"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* <div class="col-sm-12 col-md-6 col-lg-4 mb-5 animated" data-animation="flipInX" data-animation-delay="0.9s">
                              <div class="d-flex team-member">
                                 <div class="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser6">
                                    <img src="./theme-assets/images-3d-animation/user-6.png" alt="team-profile-1" class="rounded-circle" width="128"/>
                                 </div>
                                 <div class="profile align-self-center">
                                    <div class="name">David Alves</div>
                                    <div class="role">CPO</div>
                                    <div class="social-profile mt-3">
                                       <a href="#" title="Linkedin" class="font-medium grey-accent2 mr-2"><i class="ti-linkedin"></i></a>
                                       <a href="#" title="Twitter" class="font-medium grey-accent2 mr-2"><i class="ti-twitter-alt"></i></a>
                                       <a href="#" title="Github" class="font-medium grey-accent2"><i class="ti-github"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div> */}
                           <div class="col-sm-12 col-md-6 col-lg-4 mb-5 animated" data-animation="flipInX" data-animation-delay="1.0s">
                              <div class="d-flex team-member">
                                 <div class="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser2">
                                    <img src="./theme-assets/images-3d-animation/user-2.png" alt="team-profile-1" class="rounded-circle" width="128"/>
                                 </div>
                                 <div class="profile align-self-center">
                                    <div class="name">Sando Monteiro</div>
                                    <div class="role">CTO</div>
                                    <div class="social-profile mt-3">
                                       <a href="#" title="Linkedin" class="font-medium grey-accent2 mr-2"><i class="ti-linkedin"></i></a>
                                       <a href="#" title="Twitter" class="font-medium grey-accent2 mr-2"><i class="ti-twitter-alt"></i></a>
                                       <a href="#" title="Github" class="font-medium grey-accent2"><i class="ti-github"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-12 col-md-6 col-lg-4 mb-5 animated" data-animation="flipInX" data-animation-delay="1.1s" data-toggle="modal" data-target="#teamUser10">
                              <div class="d-flex team-member">
                                 <div class="team-img float-left mr-3">
                                    <img src="./theme-assets/images-3d-animation/user-10.png" alt="team-profile-1" class="rounded-circle" width="128"/>
                                 </div>
                                 <div class="profile align-self-center">
                                    <div class="name">Alessandro Gon??alves</div>
                                    <div class="role">UI / UX Designer</div>
                                    <div class="social-profile mt-3">
                                       <a href="#" title="Linkedin" class="font-medium grey-accent2 mr-2"><i class="ti-linkedin"></i></a>
                                       <a href="#" title="Twitter" class="font-medium grey-accent2 mr-2"><i class="ti-twitter-alt"></i></a>
                                       <a href="#" title="Github" class="font-medium grey-accent2"><i class="ti-github"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* <div class="col-sm-12 col-md-6 col-lg-4 mb-5 animated" data-animation="flipInX" data-animation-delay="1.2s" data-toggle="modal" data-target="#teamUser4">
                              <div class="d-flex team-member">
                                 <div class="team-img float-left mr-3">
                                    <img src="./theme-assets/images-3d-animation/user-4.png" alt="team-profile-1" class="rounded-circle" width="128"/>
                                 </div>
                                 <div class="profile align-self-center">
                                    <div class="name">Cecelia T. Carter</div>
                                    <div class="role">CTO</div>
                                    <div class="social-profile mt-3">
                                       <a href="#" title="Linkedin" class="font-medium grey-accent2 mr-2"><i class="ti-linkedin"></i></a>
                                       <a href="#" title="Twitter" class="font-medium grey-accent2 mr-2"><i class="ti-twitter-alt"></i></a>
                                       <a href="#" title="Github" class="font-medium grey-accent2"><i class="ti-github"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-12 col-md-6 col-lg-4 mb-5 animated" data-animation="flipInX" data-animation-delay="1.3s" data-toggle="modal" data-target="#teamUser13">
                              <div class="d-flex team-member">
                                 <div class="team-img float-left mr-3">
                                    <img src="./theme-assets/images-3d-animation/user-13.png" alt="team-profile-1" class="rounded-circle" width="128"/>
                                 </div>
                                 <div class="profile align-self-center">
                                    <div class="name">Terry T. Robinette</div>
                                    <div class="role">Developer</div>
                                    <div class="social-profile mt-3">
                                       <a href="#" title="Linkedin" class="font-medium grey-accent2 mr-2"><i class="ti-linkedin"></i></a>
                                       <a href="#" title="Twitter" class="font-medium grey-accent2 mr-2"><i class="ti-twitter-alt"></i></a>
                                       <a href="#" title="Github" class="font-medium grey-accent2"><i class="ti-github"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </section>
               {/* <!--/ Team --> */}
               {/* <!-- FAQ --> */}
               {/* <section id="faq" class="faq section-padding">
                  <div class="container">
                     <div class="heading text-center">
                        <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                           <h6 class="sub-title">question</h6>
                           <h2 class="title">FAQ</h2>
                        </div>
                        <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Originally the term "FAQ" referred to the Frequently Asked Question itself, and the
                           <br class="d-none d-xl-block"/>compilation of questions and answers was known as a "FAQ list" or some similar expression.
                        </p>
                     </div>
                     <div class="row">
                        <div class="col">
                           <nav>
                              <div class="nav nav-pills nav-underline mb-5 animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s" id="myTab" role="tablist">
                                 <a href="#general" class="nav-item nav-link active" id="general-tab" data-toggle="tab" aria-controls="general" aria-selected="true" role="tab">General</a>
                                 <a href="#ico" class="nav-item nav-link" id="ico-tab" data-toggle="tab" aria-controls="ico" aria-selected="false" role="tab">Pre-ICO</a>
                                 <a href="#token" class="nav-item nav-link" id="token-tab" data-toggle="tab" aria-controls="token" aria-selected="false" role="tab">Tokens</a>
                                 <a href="#client" class="nav-item nav-link" id="client-tab" data-toggle="tab" aria-controls="client" aria-selected="false" role="tab">Client</a>
                                 <a href="#legal" class="nav-item nav-link" id="legal-tab" data-toggle="tab" aria-controls="legal" aria-selected="false" role="tab">Legal</a>
                              </div>
                           </nav>
                           <div class="tab-content" id="myTabContent">
                              <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                 <div id="general-accordion" class="collapse-icon accordion-icon-rotate">
                                    <div class="card animated" data-animation="fadeInUpShorter" data-animation-delay="0.1s">
                                       <div class="card-header" id="headingOne">
                                          <h5 class="mb-0">
                                             <a class="btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                             <span class="icon"></span>
                                             Can I make payments directly from an exchange?
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#general-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                                       <div class="card-header" id="headingTwo">
                                          <h5 class="mb-0">
                                             <a class="btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                             <span class="icon"></span>
                                             When will CICO be listed on exchanges?
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#general-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                       <div class="card-header" id="headingThree">
                                          <h5 class="mb-0">
                                             <a class="btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                             <span class="icon"></span>
                                             What is the CICO Token asmart contract address?
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#general-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="tab-pane fade" id="ico" role="tabpanel" aria-labelledby="ico-tab">
                                 <div id="ico-accordion" class="collapse-icon accordion-icon-rotate">
                                    <div class="card">
                                       <div class="card-header" id="icoHeadingOne">
                                          <h5 class="mb-0">
                                             <a class="btn-link" data-toggle="collapse" data-target="#icoCollapseOne" aria-expanded="true" aria-controls="icoCollapseOne">
                                             <span class="icon"></span>
                                             Pityful a rethoric question ran over her cheek?
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="icoCollapseOne" class="collapse show" aria-labelledby="icoHeadingOne" data-parent="#ico-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card">
                                       <div class="card-header" id="icoHeadingTwo">
                                          <h5 class="mb-0">
                                             <a class="btn-link collapsed" data-toggle="collapse" data-target="#icoCollapseTwo" aria-expanded="false" aria-controls="icoCollapseTwo">
                                             <span class="icon"></span>
                                             Which roasted parts of sentences fly into your mouth?
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="icoCollapseTwo" class="collapse" aria-labelledby="icoHeadingTwo" data-parent="#ico-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card">
                                       <div class="card-header" id="icoHeadingThree">
                                          <h5 class="mb-0">
                                             <a class="btn-link collapsed" data-toggle="collapse" data-target="#icoCollapseThree" aria-expanded="false" aria-controls="icoCollapseThree">
                                             <span class="icon"></span>
                                             Collapsible Group Item #3
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="icoCollapseThree" class="collapse" aria-labelledby="icoHeadingThree" data-parent="#ico-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="tab-pane fade" id="token" role="tabpanel" aria-labelledby="token-tab">
                                 <div id="token-accordion" class="collapse-icon accordion-icon-rotate">
                                    <div class="card">
                                       <div class="card-header" id="tokenHeadingOne">
                                          <h5 class="mb-0">
                                             <a class="btn-link" data-toggle="collapse" data-target="#tokenCollapseOne" aria-expanded="true" aria-controls="tokenCollapseOne">
                                             <span class="icon"></span>
                                             Collapsible Group Item #1
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="tokenCollapseOne" class="collapse show" aria-labelledby="tokenHeadingOne" data-parent="#token-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card">
                                       <div class="card-header" id="tokenHeadingTwo">
                                          <h5 class="mb-0">
                                             <a class="btn-link collapsed" data-toggle="collapse" data-target="#tokenCollapseTwo" aria-expanded="false" aria-controls="tokenCollapseTwo">
                                             <span class="icon"></span>
                                             Collapsible Group Item #2
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="tokenCollapseTwo" class="collapse" aria-labelledby="tokenHeadingTwo" data-parent="#token-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card">
                                       <div class="card-header" id="tokenHeadingThree">
                                          <h5 class="mb-0">
                                             <a class="btn-link collapsed" data-toggle="collapse" data-target="#tokenCollapseThree" aria-expanded="false" aria-controls="tokenCollapseThree">
                                             <span class="icon"></span>
                                             Collapsible Group Item #3
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="tokenCollapseThree" class="collapse" aria-labelledby="tokenHeadingThree" data-parent="#token-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="tab-pane fade" id="client" role="tabpanel" aria-labelledby="client-tab">
                                 <div id="client-accordion" class="collapse-icon accordion-icon-rotate">
                                    <div class="card">
                                       <div class="card-header" id="clientHeadingOne">
                                          <h5 class="mb-0">
                                             <a class="btn-link" data-toggle="collapse" data-target="#clientCollapseOne" aria-expanded="true" aria-controls="clientCollapseOne">
                                             <span class="icon"></span>
                                             Collapsible Group Item #1
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="clientCollapseOne" class="collapse show" aria-labelledby="clientHeadingOne" data-parent="#client-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card">
                                       <div class="card-header" id="clientHeadingTwo">
                                          <h5 class="mb-0">
                                             <a class="btn-link collapsed" data-toggle="collapse" data-target="#clientCollapseTwo" aria-expanded="false" aria-controls="clientCollapseTwo">
                                             <span class="icon"></span>
                                             Collapsible Group Item #2
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="clientCollapseTwo" class="collapse" aria-labelledby="clientHeadingTwo" data-parent="#client-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card">
                                       <div class="card-header" id="clientHeadingThree">
                                          <h5 class="mb-0">
                                             <a class="btn-link collapsed" data-toggle="collapse" data-target="#clientCollapseThree" aria-expanded="false" aria-controls="clientCollapseThree">
                                             <span class="icon"></span>
                                             Collapsible Group Item #3
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="clientCollapseThree" class="collapse" aria-labelledby="clientHeadingThree" data-parent="#client-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="tab-pane fade" id="legal" role="tabpanel" aria-labelledby="legal-tab">
                                 <div id="legal-accordion" class="collapse-icon accordion-icon-rotate">
                                    <div class="card">
                                       <div class="card-header" id="legalHeadingOne">
                                          <h5 class="mb-0">
                                             <a class="btn-link" data-toggle="collapse" data-target="#legalCollapseOne" aria-expanded="true" aria-controls="legalCollapseOne">
                                             <span class="icon"></span>
                                             Collapsible Group Item #1
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="legalCollapseOne" class="collapse show" aria-labelledby="legalHeadingOne" data-parent="#legal-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card">
                                       <div class="card-header" id="legalHeadingTwo">
                                          <h5 class="mb-0">
                                             <a class="btn-link collapsed" data-toggle="collapse" data-target="#legalCollapseTwo" aria-expanded="false" aria-controls="legalCollapseTwo">
                                             <span class="icon"></span>
                                             Collapsible Group Item #2
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="legalCollapseTwo" class="collapse" aria-labelledby="legalHeadingTwo" data-parent="#legal-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card">
                                       <div class="card-header" id="legalHeadingThree">
                                          <h5 class="mb-0">
                                             <a class="btn-link collapsed" data-toggle="collapse" data-target="#legalCollapseThree" aria-expanded="false" aria-controls="legalCollapseThree">
                                             <span class="icon"></span>
                                             Collapsible Group Item #3
                                             </a>
                                          </h5>
                                       </div>
                                       <div id="legalCollapseThree" class="collapse" aria-labelledby="legalHeadingThree" data-parent="#legal-accordion">
                                          <div class="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section> */}
               {/* <!--/ FAQ --> */}
               
               {/* <!-- Contact --> */}
               <section id="contact" class="contact section-padding">
                  <div class="container">
                     <div class="heading text-center">
                        <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                           <h6 class="sub-title">Contatos</h6>
                           <h2 class="title">Nossos Canais</h2>
                        </div>
                        <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Voc?? tem alguma d??vida? ficamos felizes em ajudar.</p>
                     </div>
                     <div class="row">
                        <div class="col-xl-8 col-md-12 mx-auto">
                           <ul class="list-unstyled contact-info pb-5 mb-5">
                              <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">
                                 <i class="ti-headphone"></i>
                                 <span class="ml-1">+55 93 8422-9597</span>
                              </li>
                              <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">
                                 <i class="ti-email"></i>
                                 <span class="ml-1">contato@kaacoin.earth</span>
                              </li>
                              <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">
                                 <i class="ti-comment-alt"></i>
                                 <span class="ml-1">Nosso Telegram</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </section>
               {/* <!--/ Contact --> */}
               {/* <!-- ICO Video Modal --> */}
               <div class="modal ico-modal fade" id="ico-modal" tabindex="-1" role="dialog" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                     <div class="modal-content">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="modal-body p-0">
                           <div class="embed-responsive embed-responsive-16by9">
                              <iframe class="embed-responsive-item" id="video"></iframe>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!-- Dev Team Modal Pop-ups --> */}
            </main>
         </div>
      </div>
      {/* <!-- //////////////////////////////////// FOOTER ////////////////////////////////////--> */}
      <footer class="footer static-bottom footer-dark footer-custom-class" data-midnight="white">
         <div class="container">
            <div class="footer-wrapper">
               <div class="row">
                  <div class="col-md-4">
                     <div class="about">
                        <div class="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                           <img src={logo} alt="Logo"/>
                           <span class="logo-text"> KAA Coin</span>
                        </div>
                        <div class="about-text animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                           <p class="grey-accent2">O KAA COIN Security Token ?? um Smart Contract negociado na Binance Exchange com a seguran??a da Blockchain Ethereum.</p>
                        </div>
                        <ul class="social-buttons list-unstyled mb-5">
                           <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s"><a href="#" title="Facebook" class="btn font-medium"><i class="ti-facebook"></i></a></li>
                           <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s"><a href="#" title="Twitter" class="btn font-medium"><i class="ti-twitter-alt"></i></a></li>
                           <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s"><a href="#" title="Instagram" class="btn font-medium"><i class="ti-instagram"></i></a></li>
                           {/* <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s"><a href="#" title="GitHub" class="btn font-medium"><i class="ti-github"></i></a></li> */}
                        </ul>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="links">
                        <h5 class="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">Links ??teis</h5>
                        <ul class="useful-links float-left mr-5">
                           <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s"><a href="#about">O que ?? KAA</a></li>
                           <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s"><a href="#problem-solution">Solu????es</a></li>
                           <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s"><a href="#whitepaper">Whitepaper </a></li>
                        </ul>
                        <ul class="useful-links">
                           <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.9s"><a href="#roadmap">Roadmap</a></li>
                           <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.0s"><a href="#team">Equipe</a></li>
                           <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.1s"><a href="#">Entrar</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="feed">
                        <h5 class="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s">Twitter Feed</h5>
                        <div class="tweets">
                           <span class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.0s">Informa????es KAA Coin STO (Pr??-Venda) : https://t.co/JHBAS345</span>
                           <span class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.2s">Mais informa????es sobre a moeda KAA : https://t.co/JHSD34JHB</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="copy-right mx-auto text-center">
                  {/* <span class="copyright">Copyright &copy; 2022, KAA Coin. Desenvolvido por <a href="http://educatecnologia.co/" title="Educa" class="white">Educa</a></span> */}
                  <span class="copyright">Copyright &copy; 2022, KAA Coin.</span>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default App;
