import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import PageLayout from '../../layouts/PageLayout';
import NewEventForm from '../../forms/event/NewEventForm';

const NewEventPage = (props) => (
  <PageLayout>
    <PageHeader>New Event</PageHeader>
    <Row>
      <Col md={9}>
        <NewEventForm />
      </Col>
    </Row>
  </PageLayout>
);

export default NewEventPage;
