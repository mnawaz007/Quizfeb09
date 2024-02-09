/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {motion} from 'framer-motion'

export default function InitialContent ({onSowAdmin }) {
    return (
    <Container > 
        <Row>
            <Col>
        
        
        <motion.button whileHover={{scale:1.2}} className="btn btn-primary" onClick={()=>{onSowAdmin(true)}}>Quiz </motion.button>
        <motion.button whileHover={{scale:1.2}} className="btn btn-primary mx-3" onClick={()=>{onSowAdmin(false)}}>Admin Pannel</motion.button>
        <h6><a href="#" target="_blank" >Home / OptionsQuiz </a></h6>
        
            </Col>
        </Row>
        
        </Container> 
        )}