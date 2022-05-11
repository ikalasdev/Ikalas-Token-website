import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

import Image from 'next/image'
import React from 'react';
import { Polar } from 'react-chartjs-2';
import { Chart, ArcElement, Legend } from 'chart.js'

import styles from '../styles/Home.module.css'


export default function Home() {

  Chart.register(ArcElement, Legend);

  const nbholder = 0;
  const nbtransaction = 0;
  const tokenPrice = 0;

  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
    ],

    datasets: [{
      label: 'Token distribution',
      data: [11, 16, 7],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
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
          <div className='container-fluid text-center'>
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



        <section className="pt-8 pt-md-12 bg-black py-15" id="Ikalas">
          <div className='d-flex justify-content-around align-items-center mx-15'>
            <div className='text-light px-10 row'>

              <h2>
                What is the Ikalas platform ?
              </h2>
              <p className="text-muted lead mb-6">
                <span className="text-white fw-bold">Create tools. </span> The Ikalas platform allows you to create tools with code and deploy it as a module on the website.
              </p>
              <p className="text-muted lead mb-7 mb-md-0">
                <span className="text-white fw-bold">Use tools. </span> Use the community tools to create whatever you want by the website interface or the developpement interface (coming soon).
              </p>
              <p className="text-muted lead mb-7 mb-md-0 mt-2">
                <a className="text-primary fw-bold" href="https://ikalas.com/app">Ikalas.com</a>
              </p>
            </div>

            <img className="w-50" src="images/imageIkalas.png" alt="ikalasWebsitePics" />
          </div>
        </section>



        <div className='delimiter rotateDiv bg-gradient-dark-black'></div>

        <section class=" pt-8 pt-md-10 pb-10 bg-dark w-100 d-flex justify-content-around">
          <div>
            <div class="d-flex justify-content-center text-center">
              <div class="col-12 col-md-8 col-lg-6">


                <h2 class="display-3 fw-bold text-white">
                  The KIK Token
                </h2>
                <h6 class="text-uppercase text-info">
                  with numbers
                </h6>


                <p class="text-muted lead mb-6 mb-md-8">
                  We've made it easier for thousands of people to build their dream companies.
                </p>

                <div class="d-flex justify-content-center">
                  <div class="pe-5">
                    <h1 class="fw-bold text-white mb-0">
                      <span data-countup="{&quot;startVal&quot;: 0}" data-to={nbholder} data-aos="" data-aos-id="countup:in" class="aos-init aos-animate">{nbholder}</span>
                    </h1>
                    <p class="text-gray-700 mb-0">
                      holders
                    </p>
                  </div>
                  <div class="mx-12">
                    <h1 class="fw-bold text-white mb-0">
                      <span data-countup="{&quot;startVal&quot;: 0}" data-to={nbtransaction} data-aos="" data-aos-id="countup:in" class="aos-init aos-animate">{nbtransaction}</span>
                    </h1>
                    <p class="text-gray-700 mb-0">
                      transactions
                    </p>
                  </div>
                  <div class="text-center mx-5">
                    <h1 class="fw-bold text-white mb-0">
                      <span data-countup="{&quot;startVal&quot;: &quot;0&quot;}" data-to={tokenPrice} data-aos="" data-aos-id="countup:in" class="aos-init aos-animate">{tokenPrice}</span>$
                    </h1>
                    <p class="text-gray-700 mb-0">
                      price
                    </p>
                  </div>
                </div>
                <a href="https://bscscan.com/address/0x28E41ccB451F0E813403Cc91Cc49B0ca8178F3f2" target="_blank" className='btn btn-primary mt-10'>
                  Discover the contract
                </a>
              </div>

            </div>
          </div>

        </section>

        <div className='delimiter bg-gradient-dark-black'></div>


        <section className="py-2 pt-md-15 bg-black text-center text-dark">
          <div>
            <h3 className='text-uppercase text-light'>Token Distribution</h3>
            <div>
              <h2>Polar Example</h2>
              <Polar data={data} />
            </div>
          </div>
        </section>




        <section className="py-10 pt-md-15 bg-black text-center text-dark" id="Roadmap">
          <div className='mb-10'>
            <h3 className='text-uppercase text-light'>Roadmap</h3>
          </div>
          <div className="container-fluid">
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
