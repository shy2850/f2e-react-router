import React, {Component} from 'react';
import Top from '../../components/Top';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Social extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return <Grid className="social-container">
            <Top/>
            <Row className="body-grid">
                <Col xs={3}>
                </Col>
                <Col xs={6}>
                </Col>
                <Col xs={3}>
                </Col>
            </Row>
        </Grid>;
    }
}