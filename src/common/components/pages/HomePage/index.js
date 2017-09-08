import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import './styles.scss';
import './styles.css';

const HomePage = (props) => (
  <PageLayout className="rwd-background">
    <PageHeader>Express-React-HMR-Boilerplate</PageHeader>
  </PageLayout>
);

export default HomePage;
