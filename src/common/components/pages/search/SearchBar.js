import React, { Component } from 'react';
import { connect, store } from 'react-redux';
import { push } from 'react-router-redux';
import logger from 'redux-logger';
import Autosuggest from 'react-autosuggest';
import searchAPI from '../../../api/search';
import Resources from '../../../constants/Resources';
import { pushErrors } from '../../../actions/errorActions';
import { setSearch } from '../../../actions/searchActions';

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expression
// s#Using_Special_Characters
// TODO: connect({search}) is undefined
@connect(({ apiEngine, search, dispatch }) => ({ apiEngine, search, dispatch }))
class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      result: [],
      value: '',
      suggestions: [],
    };
    this.fetchResult = this._fetchResult.bind(this);
  }

  componentDidUpdate(prevProps) {
    this.fetchResult(this.state.value);
    console.log(this.props);
  }

  _fetchResult(value) {
    let { apiEngine, type, dispatch } = this.props;
    searchAPI(apiEngine)
      .list(value, type)
      .catch((err) => {
        pushErrors(err);
        throw err;
      })
      .then((json) => {
        dispatch(setSearch(json));
      });
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getSuggestions(value) {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');
    return this.state.result.map(section => {
      return {
        title: section.title,
        results: section
          .results
          .filter(result => regex.test(result.name)),
      };
    }).filter(section => section.results.length > 0);
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }

  renderSectionTitle(section) {
    return (
      <strong>{section.title}</strong>
    );
  }

  getSectionSuggestions(section) {
    return section.results;
  }

  onChange = (event, {newValue, method}) => {
    let { page } = this.props;
    this.setState({value: newValue});
  };

  onSuggestionsFetchRequested = ({value}) => {
    this.setState({suggestions: this.getSuggestions(value)});
  };

  onSuggestionsClearRequested = () => {
    this.setState({suggestions: []});
  };

  render() {
    const {value, suggestions} = this.state;
    const inputProps = {
      placeholder: 'Search by Event',
      value,
      onChange: this.onChange,
    };

    return (<Autosuggest
      multiSection={true}
      suggestions={suggestions}
      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
      onSuggestionsClearRequested={this.onSuggestionsClearRequested}
      getSuggestionValue={this.getSuggestionValue}
      renderSuggestion={this.renderSuggestion}
      renderSectionTitle={this.renderSectionTitle}
      getSectionSuggestions={this.getSectionSuggestions}
      inputProps={inputProps}/>);
  }
}

export default SearchBar;
