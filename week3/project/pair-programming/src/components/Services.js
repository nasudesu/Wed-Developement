import {services} from '../data';
import Title from './Title';
import Service from './Service';

import React from 'react'

export default function Services() {
  return (
    <section className="section services" id='services'>
      <Title title='our' subTitle="services" />
      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
    
  )
}
