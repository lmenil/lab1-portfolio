// Services.jsx
import React from 'react';
import '../styles/Services.css';
// import service1 from '../assets/services/service1.png';
// import service2 from '../assets/services/service2.png';
// import service3 from '../assets/services/service3.png';

const Services = () => {
  const servicesData = [
    {
      id: 1,
    //   icon: service1,
      title: 'Web Development',
      description: 'Building responsive and dynamic websites.',
    },
    {
      id: 2,
    //   icon: service2,
      title: 'Mobile App Development',
      description: 'Creating user-friendly mobile applications.',
    },
    {
      id: 3,
    //   icon: service3,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces.',
    },
  ];

  return (
    
    <div className="services" id="services">
      <h2>My Services</h2>
      <div className="services-grid">
        {servicesData.map(service => (
          <div className="service-card" key={service.id}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Services;
