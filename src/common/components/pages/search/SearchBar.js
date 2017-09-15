import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import searchAPI from '../../../api/search';
import { setSearch } from '../../../actions/searchActions';

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expression
// s#Using_Special_Characters

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: [
        {
          title: 'Talk',
          results: [
            {
              name: 'Tat Gor Gong Talk',
            },
          ],
        }, {
          title: 'Camp',
          results: [
            {
              name: 'BA OCamp',
            }, {
              name: 'Winter Trip',
            }, {
              name: 'CUTN',
            },
          ],
        }, {
          title: 'Gathering',
          results: [
            {
              name: 'Candle Night',
            }, {
              name: 'Camp ReU',
            },
          ],
        },
      ],
      value: '',
      suggestions: [],
    };
    this.fetchResult = this._fetchResult.bind(this);
  }

  _fetchResult(value) {
    let { apiEngine, type } = this.props;
    searchAPI(apiEngine)
      .list(value, type)
      .catch((err) => {
        pushErrors(err);
        throw err;
      })
      .then((data) => {
        setSearch(data);
        this.setState({ result: data });
        this.setState({ value: value });
        this.onSuggestionsFetchRequested(this.state);
      });
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getSuggestions(value) {
    // console.log('2' + value);
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
    this.fetchResult(newValue);
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
