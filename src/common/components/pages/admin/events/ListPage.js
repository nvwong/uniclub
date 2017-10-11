import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Table from 'react-bootstrap/lib/Table';
import Resources from '../../../../constants/Resources';
import eventAPI from '../../../../api/event';
import { pushErrors } from '../../../../actions/errorActions';
import { setCrrentPage } from '../../../../actions/pageActions';
import { setEvents } from '../../../../actions/eventsActions';
import PageLayout from '../../../layouts/SocPageLayout';
import Pager from '../../../utils/BsPager';

class EventListPage extends Component {
  constructor() {
    super();
    this.handlePageChange = this._handlePageChange.bind(this);
    this.fetchEvents = this._fetchEvents.bind(this);
  }

  componentDidMount() {
    let { location } = this.props;

    this.fetchEvents(location.query.page || 1);
  }

  componentDidUpdate(prevProps) {
    let { page, events } = this.props;

    if (events.length === 0 && prevProps.page.current !== page.current) {
      this.fetchEvents(page.current);
    }
  }

  _handlePageChange(pageId) {
    let { dispatch } = this.props;

    dispatch(setCrrentPage(Resources.EVENTS, pageId));
  }

  _fetchEvents(page) {
    let { dispatch, apiEngine, location } = this.props;

    eventAPI(apiEngine)
      .list({ page })
      .catch((err) => {
        dispatch(pushErrors(err));
        throw err;
      })
      .then((json) => {
        dispatch(setEvents(json));
        dispatch(push({
          pathname: location.pathname,
          query: { page: json.page.current },
        }));
      });
  }

  render() {
    let { events, page } = this.props;

    return (
      <PageLayout>
      <PageHeader>Event List ({`${page.current} / ${page.total}`})</PageHeader>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Name</th>
              <th>Organiser</th>
              <th>Price</th>
              <th>Quota</th>
              <th>State</th>
              <th>Participants</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {events.map((oneEvent) => (
              <tr key={oneEvent._id}>
                <td>{oneEvent.date}</td>
                <td>{oneEvent.Location}</td>
                <td>{oneEvent.name}</td>
                <td>{oneEvent.organiser}</td>
                <td>{oneEvent.price}</td>
                <td>{oneEvent.quota}</td>
                <td>{oneEvent.state}</td>
                <td>{oneEvent.participants}</td>
                <td>
                  // <Link to={'a'} params={ oneEvent }>
                    <Button bsStyle="primary">Edit</Button>
                  // </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pager
          page={page}
          onPageChange={this.handlePageChange}
        />
      </PageLayout>
    );
  }
}

export default connect(({ apiEngine, pagination, entity }) => {
  let { page } = pagination.events;
  let eventPages = pagination.events.pages[page.current] || { ids: [] };
  let events = eventPages.ids.map(id => entity.events[id]);

  return {
    apiEngine,
    events,
    page,
  };
})(EventListPage);
