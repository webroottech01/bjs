import React from 'react';
import PropTypes from 'prop-types';
import { Nav , Accordion  } from 'react-bootstrap';
import './faq-tabs.scss'; 

const FaqTabs = (props) => (
  <div className="faq-tabs">
    <div className="container-med">
    <Accordion defaultActiveKey="0">
      {props.faqs.map((singlefaq , index)=>(
        <Accordion.Item eventKey={index} key={index}>
        <Accordion.Header>{singlefaq.faq_heading}</Accordion.Header>
        <Accordion.Body> 
        {singlefaq.description}
        </Accordion.Body>
      </Accordion.Item>
      ))}
      
    </Accordion> 
    </div>
  </div>
);

FaqTabs.propTypes = {};

FaqTabs.defaultProps = {};

export default FaqTabs;
