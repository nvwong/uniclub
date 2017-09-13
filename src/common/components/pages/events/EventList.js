import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Table from 'react-bootstrap/lib/Table';
import Resources from '../../../constants/Resources';
import eventAPI from '../../../api/event';
import { pushErrors } from '../../../actions/errorActions';
import { setCrrentPage } from '../../../actions/pageActions';
import { setEvents } from '../../../actions/eventsActions';
import PageLayout from '../../layouts/PageLayout';
import Pager from '../../utils/BsPager';

class EventList extends Component {
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
        <PageHeader>Events List ({`${page.current} / ${page.total}`})
        </PageHeader>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
              <th>Tag</th>
              <th>Organiser</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quota</th>
              <th>State</th>
              <th>Participants</th>
            </tr>
          </thead>
          <tbody>
            {events.map((oneEvent) => (
              <tr key={oneEvent._id}>
                <td>{oneEvent.name}</td>
                <td>{oneEvent.date}</td>
                <td>{oneEvent.location}</td>
                <td>{oneEvent.description}</td>
                <td>{oneEvent.tag}</td>
                <td>{oneEvent.organiser}</td>
                <td>{oneEvent.category}</td>
                <td>{oneEvent.price}</td>
                <td>{oneEvent.quota}</td>
                <td>{oneEvent.state}</td>
                <td>{oneEvent.participants}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pager
          page={ page }
          onPageChange={this.handlePageChange}
        />
      </PageLayout>
    );
  }
};

export default connect(({ apiEngine, pagination, entity }) => {
  let { page } = pagination.events;
  let eventPages = pagination.events.pages[page.current] || { ids: [] };
  let events = eventPages.ids.map(id => entity.events[id]);

  return {
    apiEngine,
    events,
    page,
  };
})(EventList);
