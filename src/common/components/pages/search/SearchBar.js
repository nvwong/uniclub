import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import logger from 'redux-logger';
import Autosuggest from 'react-autosuggest';
import Resources from '../../../constants/Resources';
import { pushErrors } from '../../../actions/errorActions';
import {
  loadSuggestions,
  updateInputValue,
  clearSuggestions,
} from '../../../actions/searchActions';

function mapStateToProps(state) {
  const { eventSearchValue, tagSearchValue, suggestions, isLoading } = state.search;

  return {
    eventSearchValue,
    tagSearchValue,
    suggestions,
    isLoading,
  };
}

@connect(({ search, entity, dispatch, mapStateToProps }) =>
({ search, entity, dispatch, mapStateToProps }))
class SearchBar extends Component {

  // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters

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

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  onChange = (event, { newValue }) => {
    let { dispatch, type } = this.props;
    dispatch(updateInputValue(newValue, type));
  }

  onSuggestionsFetchRequested = ({ value }) => {
    let { dispatch, type } = this.props;
    dispatch(loadSuggestions(value, type));
  }

  onSuggestionsClearRequested = () => {
    let { dispatch } = this.props;
    dispatch(clearSuggestions());
  }

  render() {
    const {
      eventSearchValue,
      tagSearchValue,
      suggestions,
      isLoading } = this.props.search;

    let value = '', placeholder = '';
    if (this.props.type === 'name') {
      value = eventSearchValue;
      placeholder = 'Event Name';
    } else {
      value = tagSearchValue;
      placeholder = 'Tag';
    }

    const inputProps = {
      placeholder: placeholder,
      value: value,
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

export default connect(mapStateToProps)(SearchBar);
