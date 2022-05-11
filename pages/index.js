import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

import Image from 'next/image'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Legend } from 'chart.js'

import styles from '../styles/Home.module.css'


export default function Home() {

  Chart.register(ArcElement, Legend);

  const nbholder = 0;
  const nbtransaction = 0;
  const tokenPrice = 0;

  const data = {
    labels: [
      'Founders',
      'Shareholders',
      'Community'
    ],
    datasets: [{
      data: [200, 100, 300],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };
  return (
    <div >
      <main>
        <section className="mt-n11 pt-13 pt-md-15 pb-md-15 bg-black bg-pattern-2 text-center">
          <div >
            <Image src="/images/logo_bgLess_border.png" alt="Kik" width={120} height={115} />
          </div>

          <h2 className='text-light mt-5'>
            Avoid complexity,<br />
            welcome simplicity
          </h2>
        </section>


        <div className="position-relative">
          <div className="shape shape-bottom shape-fluid-x text-dark">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
          </div>
        </div>


        <section className="bg-gradient-dark-black py-5 pt-md-13 text-light" id="KIK">
          <div className='container text-center'>
            <h2>
              What is the KIK ?
            </h2>
            <p>
              KIK is a BEP-20 token used in the platform Ikalas.com as the front door of the premium access.<br />
              The KIK token is fully tradable and allow the owners to get specific pivileges on the platform.<br />
              The KIK is also a new way to make income from your developping skills by creating usefull tools for the community.
            </p>
          </div>
        </section>

        <section className="py-5 bg-black text-dark pb-12" id="Infos">

          <div className="container">
            <div className="row">

              <div className="card bg-dark rounded-3 mx-2 col-sm">
                <div className="card-body p-5 pb-0 my-auto d-flex justify-content-center h-40">
                  <h2 className="card-title text-white">
                    <img src="/images/token.png" alt="Kik" width={90} height={90} />
                  </h2>
                </div>
                <div className="card-body p-5 h-50">


                  <h3 className="fw-bold text-white">
                    Non-Mintable
                  </h3>

                  <p className="text-muted mb-0">
                    We can't create new KIK token, the total amount is immutable.
                  </p>

                </div>
              </div>

              <div className="card bg-dark rounded-3 mx-2 col-sm">
                <div className="card-body p-5 pb-0 my-auto d-flex justify-content-center h-40">
                  <h2 className="card-title text-white">
                    <img src="/images/gold-ingots.png" alt="Kik" width={90} height={90} />
                  </h2>
                </div>
                <div className="card-body p-5 h-50">

                  <h3 className="fw-bold text-white">
                    Supply
                  </h3>

                  <p className="text-muted mb-0">
                    The KIK was created on the BSC blockchain with a max supply of 100 000 000 KIK.
                  </p>

                </div>
              </div>

              <div className="card  bg-dark rounded-3 mx-2 col-sm">
                <div className="card-body d-flex justify-content-center h-40" >
                  <h2 className="card-title text-white">
                    <img src="/images/withdraw.png" alt="Kik" width={90} height={90} />
                  </h2>
                </div>
                <div className="card-body p-5 h-50">
                  <h3 className="fw-bold text-white">
                    Earnable
                  </h3>
                  <p className="text-muted mb-0">
                    The KIK is earnable by the community who serve the platform.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="pt-8 pt-md-11 bg-black" id="Ikalas">
          <div className='d-flex justify-content-around align-items-center mx-15'>
            <div className='text-light px-5'>

              <h2>
                What is the Ikalas platform ?
              </h2>
              <p className="text-muted lead mb-6">
                <span className="text-white fw-bold">Create tools. </span> The Ikalas platform allows you to create tools with code and deploy it as a module on the website.
              </p>
              <p className="text-muted lead mb-7 mb-md-0">
                <span className="text-white fw-bold">Use tools. </span> Use the community tools to create whatever you want by the website interface or the developpement interface (coming soon).
              </p>
            </div>



            <div className='position-relative vw-md-50 p-7 p-md-15 ps-0 overflow-hidden float-end ikalaspicsMaxsize px-5'>
              <div className="position-absolute top-0 end-0 bottom-0 start-0 bg-dark bg-pattern-2 rounded-4">
                <img class="position-relative w-120 w-md-120 float-end" src="assets/img/screenshots/ui/landkit-figma.png" alt="..."/>
              </div>
            </div>


          </div>
        </section>


        <section className=" bg-black text-center text-dark pt-15" id="Stats">
          <h3 className='text-uppercase text-light'>Statistiques</h3>
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="card mx-2 bg-light">
                <h4>
                  Total number of holders :
                </h4>

                <p>
                  <span>
                    {nbholder}
                  </span>
                </p>
              </div>

              <div className="card mx-2">
                <h4>
                  Total number of transactions :
                </h4>
                <p>
                  <span>
                    {nbtransaction}
                  </span>
                </p>
              </div>

              <div className="card mx-2">
                <h4>
                  Price :
                </h4>
                <p>
                  <span>
                    {tokenPrice}
                  </span>
                </p>
              </div>
            </div>


            <button href="https://bscscan.com/address/0x28E41ccB451F0E813403Cc91Cc49B0ca8178F3f2"
              className='btn btn-outline-primary bg-primary text-light px-2 py-1 border-2 border-light rounded my-5'
            >
              Discover more
            </button>
          </div>
        </section>




        <section className="py-2 pt-md-15 bg-black text-center text-dark">
          <div>
            <h3 className='text-uppercase text-light'>Token Distribution</h3>
            <p className='text-light'>futur graphique (enlevé parce que ca prend de la place)</p>
          </div>
        </section>




        <section className="py-10 pt-md-15 bg-black text-center text-dark" id="Roadmap">
          <div className='mb-10'>
            <h3 className='text-uppercase text-light'>Roadmap</h3>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-timeline">
                  <div className="timeline">
                    <a href="#" className="timeline-content">
                      <div className="timeline-year">2023</div>
                      <h3 className="title">Full release</h3>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                      </p>
                    </a>
                  </div>
                  <div className="timeline">
                    <a href="#" className="timeline-content">
                      <div className="timeline-year">2022</div>
                      <h3 className="title">Token Ikalas (KIK)</h3>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                      </p>
                    </a>
                  </div>
                  <div className="timeline">
                    <a href="#" className="timeline-content">
                      <div className="timeline-year">2021</div>
                      <h3 className="title">Platform Ikalas</h3>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                      </p>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </section>

        <div className="position-relative">
          <div className="shape shape-bottom shape-fluid-x text-dark">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
          </div>
        </div>
      </main>

    </div>

  )
}
