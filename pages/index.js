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
      <main >
        <div >
          <Image src="/images/logo.png" alt="Kik" width={90} height={90} />

          <h1 >
            KIK
          </h1>
        </div>

        <h2>
          Avoid complexity,<br />
          welcome simplicity
        </h2>

        <div>
          <h2>
            What is the KIK ?
          </h2>
          <p>
            Kik is a BEP-20 token used in the platform Ikalas.com as the front door of the premium access.<br />
            The KIK token is fully tradable and allow the owners to get specific pivileges on the platform.<br />
            The KIK is also a new way to make income from your developping skills by creating usefull tools for the community.
          </p>
        </div>

        <div>
          <h3>
            What is the Ikalas platform ?
          </h3>
          <p>
            The Ikalas platform is a platform that allows the users to use diverse tools.<br />
            The platform is fully decentralized and allows the users to create their own tools and to share them.<br />
            Ikalas rewards the users for their actions by giving them a Kik token when their tools are used by the community.<br />
            As a developpement platform, Ikalas will allow developpers to use the Ikalas tools in there code with an API that is not available now.
          </p>
        </div>

        <div>
          <h3>
            Informations about the KIK
          </h3>
          <p>
            The KIK is a non mintable token that is fully tradable.<br />
            It counts 100 million tokens and was created on the binance smartchain.<br />
            This token is also earnable by the community (learn more about it on the plateform Ikalas).<br />

          </p>
        </div>

        <div>
          <h3>Statistique</h3>
          <div>
            <h4>
              Total number of holders :
            </h4>
            <p>
              <span>
                {nbholder}
              </span>
            </p>
          </div>

          <div>
            <h4>
              Total number of transactions :
            </h4>
            <p>
              <span>
                {nbtransaction}
              </span>
            </p>
          </div>

          <div>
            <h4>
              Price
            </h4>
            <p>
              <span>
                {tokenPrice}
              </span>
            </p>
          </div>

          <button>Discover more</button>
        </div>


        <div>
          <h3>Token Distribution</h3>
          <div>
            <Doughnut
              data={data}
              width={200}
              height={200}
            />
          </div>

        </div>
      </main>

    </div>

  )
}
