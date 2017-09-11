import React from 'react';
import Autosuggest from 'react-autosuggest';

const result = [
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
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expression
// s#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return result.map(section => {
    return {
      title: section.title,
      results: section
        .results
        .filter(result => regex.test(result.name)),
    };
  }).filter(section => section.results.length > 0);
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

function renderSectionTitle(section) {
  return (
    <strong>{section.title}</strong>
  );
}

function getSectionSuggestions(section) {
  return section.results;
}

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, {newValue, method}) => {
    this.setState({value: newValue});
  };

  onSuggestionsFetchRequested = ({value}) => {
    this.setState({suggestions: getSuggestions(value)});
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
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderSectionTitle={renderSectionTitle}
      getSectionSuggestions={getSectionSuggestions}
      inputProps={inputProps}/>);
  }
}

export default SearchBar;
