import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '80px'}} src={service.img} alt=""/>
            <h4 style={{color: '#565E69'}} className="my-3">{service.name}</h4>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa aspernatur cupiditate in quo exercitationem!</p>
        </div>
    );
};

export default ServiceDetail;