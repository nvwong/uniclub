import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Table from 'react-bootstrap/lib/Table';
import Resources from '../../../constants/Resources';
import searchAPI from '../../../api/search';
import { pushErrors } from '../../../actions/errorActions';
import { setCrrentPage } from '../../../actions/pageActions';
import { setSearch } from '../../../actions/searchActions';
import PageLayout from '../../layouts/PageLayout';
import Pager from '../../utils/BsPager';
import SearchBar from './SearchBar';
// import Autosuggest from 'react-autosuggest';
import './styles.css';
import './styles.scss';

class SearchItem extends Component {

}

class SearchPage extends Component {
  constructor() {
    super();
    this.handlePageChange = this._handlePageChange.bind(this);
    this.fetchSearchItems = this._fetchSearchItems.bind(this);
  }

  componentDidMount() {
    let { location } = this.props;

    this.fetchSearchItems(location.query.page || 1);
  }

  componentDidUpdate(prevProps) {
    let { page, SearchItems } = this.props;

    if (SearchItems.length === 0 && prevProps.page.current !== page.current) {
      this.fetchSearchItems(page.current);
    }
  }

  _handlePageChange(pageId) {
    let { dispatch } = this.props;

    dispatch(setCrrentPage(Resources.SEARCH, pageId));
  }

  _fetchSearchItems(page) {
    let { dispatch, apiEngine, location } = this.props;

    // searchAPI(apiEngine)
    //   .list({ page })
    //   .catch((err) => {
    //     dispatch(pushErrors(err));
    //     throw err;
    //   })
    //   .then((json) => {
    //     dispatch(setSearch(json));
    //     dispatch(push({
    //       pathname: location.pathname,
    //       query: { page: json.page.current },
    //     }));
    //   });
  }

  render() {
    let { page } = this.props;

    return (
      <PageLayout>
        <PageHeader>
          Search
        </PageHeader>
        <Table striped>
          <thead>
            <tr>
              <td>
                <SearchBar
                  apiEngine={this.props.apiEngine}
                  dispatch={this.props.dispatch}
                  type="name"
                />
              </td>
              <td>
                <SearchBar
                  apiEngine={this.props.apiEngine}
                  dispatch={this.props.dispatch}
                  type="tag"
                />
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.SearchItems.map((search) =>
              <tr>
                {search.date}
                <SearchItem />
              </tr>
            )}
          </tbody>
        </Table>
      </PageLayout>
    );
  }
};

export default connect(({ apiEngine, pagination, entity }) => {
  let { page } = pagination.search;
  let SearchPages = pagination.search.pages[page.current] || { ids: [] };
  let SearchItems = SearchPages.ids.map(id => entity.SearchItems[id]);

  return {
    apiEngine,
    SearchItems,
    page,
  };
})(SearchPage);