import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BasicExample from './BasicExample'

const ReactBootstrapEx = () => {
    return (
        <Container>
            <Row>
                <Col md={6} lg={4} >
                    <BasicExample />
                </Col>
                <Col md={6} lg={4}>
                    <BasicExample />
                </Col>
                <Col md={6} lg={4}>
                    <BasicExample />
                </Col>
            </Row>
        </Container>
    )
}

export default ReactBootstrapEx