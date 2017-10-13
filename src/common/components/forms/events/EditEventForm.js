import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import FormNames from '../../../constants/FormNames';
import eventAPI from '../../../api/event';
import { pushErrors } from '../../../actions/errorActions';
// import { setCookies } from '../../../actions/cookieActions';
import { AirSingleDate } from '../../fields/bases';
import {
  BsInput as Input,
  BsTextarea as Textarea,
  BsCheckboxList as CheckboxList,
  BsRadio as Radio,
  } from '../../fields/adapters';
import {
  BsForm as Form,
  BsFormFooter as FormFooter,
  BsField as FormField,
} from '../../fields/widgets';
export const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.date) {
    errors.date = 'Required';
  }

  if (!values.location) {
    errors.location = 'Required';
  }

  if (!values.description) {
    errors.description = 'Required';
  }

  if (!values.tag) {
    errors.tag = 'Required';
  }

  if (!values.category) {
    errors.category = 'Required';
  }

  if (!values.price) {
    errors.price = 'Required';
  }

  if (!values.quota) {
    errors.quota = 'Required';
  }

  if (!values.state) {
    errors.state = 'Required';
  }

  return errors;
};

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.init = this._init.bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
  }

  _init(oneEvent) {
    let { initialize } = this.props;

    initialize({
      name: oneEvent.name,
      date: oneEvent.date,
      location: oneEvent.location,
      description: oneEvent.description,
      tag: oneEvent.tag,
      category: oneEvent.category,
      price: oneEvent.price,
      quota: oneEvent.quota,
      state: oneEvent.state,
    });
  }

  componentDidMount() {
    let { dispatch, apiEngine } = this.props;

    eventAPI(apiEngine)
      .readEvent()
      .catch((err) => {
        dispatch(pushErrors(err));
        throw err;
      })
      .then((json) => {
        this.init(json.oneEvent);
      });
  }

  _handleSubmit(formData) {
    let { dispatch, apiEngine } = this.props;

    return eventAPI(apiEngine)
      .update(formData)
      .catch((err) => {
        dispatch(pushErrors(err));
        throw err;
      })
      .then((json) => {
        this.init(json.oneEvent);
        /* dispatch(setCookies({
          oneEvent: json.oneEvent,
        }))*/;
      });
  }

  render() {
    const {
      handleSubmit,
      submitSucceeded,
      submitFailed,
      error,
      pristine,
      submitting,
      invalid,
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)}>
        {submitSucceeded && (<Alert bsStyle="success">Profile Saved</Alert>)}
        {submitFailed && error && (<Alert bsStyle="danger">{error}</Alert>)}
        <Field
          name="name"
          component={FormField}
          label="Event Name"
          adapter={Input}
          type="text"
          placeholder="Event Name"
        />
        <Field
          name="date"
          component={FormField}
          label="Event Date"
          adapter={AirSingleDate}
          displayFormat="YYYY/MM/DD"
          showClearDate
        />
        <Field
          name="location"
          component={FormField}
          label="Location"
          adapter={Input}
          type="text"
          placeholder="Location"
        />
        <Field
          name="description"
          component={FormField}
          label="Description of Event"
          adapter={Textarea}
          rows="4"
        />
        <Field
          name="tag"
          component={FormField}
          label="Tag"
          adapter={CheckboxList}
          style={{
            float: 'left',
            paddingRight: 20,
            marginTop: 10,
          }}
          options={[{
            label: 'Fun',
            value: 'Fun',
          }, {
            label: 'Ocamp',
            value: 'Ocamp',
          }, {
            label: 'Concert',
            value: 'Concert',
          }]}
        />
        <Field
          name="category"
          component={FormField}
          label="Category"
          adapter={CheckboxList}
          style={{
            float: 'left',
            paddingRight: 20,
            marginTop: 10,
          }}
          options={[{
            label: 'Category1',
            value: 'Category1',
          }, {
            label: 'Category2',
            value: 'Category2',
          }, {
            label: 'Category3',
            value: 'Category3',
          }]}
        />
        <Field
          name="price"
          component={FormField}
          label="Price"
          adapter={Input}
          type="number"
          placeholder="Price"
        />
        <Field
          name="quota"
          component={FormField}
          label="Quota"
          adapter={Input}
          type="number"
          placeholder="Quota"
        />
        <Field
          name="state"
          component={FormField}
          label="State"
          adapter={Radio}
          style={{
            float: 'left',
            paddingRight: 20,
            marginTop: 10,
          }}
          options={[{
            label: 'Open',
            value: 'Open',
          }, {
            label: 'Not Yet Open',
            value: 'Not Yet Open',
          }]}
        />
        <FormFooter>
          <Button type="submit" disabled={pristine || submitting || invalid}>
            Save
            {submitting && (
              <i className="fa fa-spinner fa-spin" aria-hidden="true" />
            )}
          </Button>
        </FormFooter>
      </Form>
    );
  }
};

export default reduxForm({
  form: FormNames.EDIT_EVENT,
  validate,
})(connect(state => ({
  apiEngine: state.apiEngine,
}))(EditForm));
