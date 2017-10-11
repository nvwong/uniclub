import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import PageLayout from '../../layouts/PageLayout';
import EditEventForm from '../../forms/events/EditEventForm';

const EditEventPage = (props) => (
  <PageLayout>
    <PageHeader>Edit Event</PageHeader>
    <Row>
      <Col md={9}>
        <EditEventForm />
      </Col>
    </Row>
  </PageLayout>
);

export default EditEventPage;
