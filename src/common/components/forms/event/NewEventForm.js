import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Field, reduxForm } from 'redux-form';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
// import validator from 'validator';
import FormNames from '../../../constants/FormNames';
import eventAPI from '../../../api/event';
// import { validateForm } from '../../../actions/formActions';
import { pushErrors } from '../../../actions/errorActions';
import AirSingleDate from '../../fields/bases';
import {
  BsInput as Input,
  BsTextarea as Textarea,
  // BsSelect as Select,
  // BsCheckbox as Checkbox,
  // BsCheckboxList as CheckboxList,
  BsRadio as Radio,
} from '../../fields/adapters';
import {
  BsForm as Form,
  BsFormFooter as FormFooter,
  BsField as FormField,
} from '../../fields/widgets';

const validate = (values) => {
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

  if (!values.organiser) {
    errors.organiser = 'Required';
  }

  if (!values.quota) {
    errors.quota = 'Required';
  }

  if (!values.price) {
    errors.price = 'Required';
  }

  return errors;
};

/*
let asyncValidate = (values, dispatch) => {
  return dispatch(validateForm(FormNames.USER_REGISTER, 'email', values.email))
    .then((json) => {
      let validationError = {};
      if (!json.isPassed) {
        validationError.email = json.message;
        throw validationError;
      }
    });
};
*/

class NewEventForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(formData) {
    let { dispatch, apiEngine } = this.props;

    return eventAPI(apiEngine)
      .register(formData)
      .catch((err) => {
        dispatch(pushErrors(err));
        throw err;
      })
      .then((json) => {
        dispatch(push('/events/all'));
      });
  }

  render() {
    const {
      handleSubmit,
      submitFailed,
      error,
      pristine,
      // asyncValidating,
      submitting,
      invalid,
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)}>
        {submitFailed && error && (<Alert bsStyle="danger">{error}</Alert>)}
        <Field
          name="name"
          component={FormField}
          label="Event Name"
          adapter={Input}
          type="text"
          placeholder="Name?"
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
          placeholder="Where?"
        />
        <Field
          name="description"
          component={FormField}
          label="Description"
          adapter={Textarea}
          rows="6"
        />
        <Field
          name="organiser"
          component={FormField}
          label="Organiser"
          adapter={Input}
          type="text"
          placeholder="Who?"
        />
        <Field
          name="price"
          component={FormField}
          label="Price"
          adapter={Input}
          type="number"
          placeholder="How much?"
        />
        <Field
          name="quota"
          component={FormField}
          label="Quota"
          adapter={Input}
          type="number"
          placeholder="How many people?"
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
            label: 'Open for application',
            value: 'open',
          }, {
            label: 'Closed',
            value: 'closed',
          }]}
        />
        <FormFooter>
          <Button
            type="submit"
            disabled={pristine || submitting || invalid}
          >
            Enter
          </Button>
        </FormFooter>
      </Form>
    );
  }
};

export default reduxForm({
  form: FormNames.EVENT_ADD,
  validate,
  // asyncValidate,
  // asyncBlurFields: ['email'],
})(connect(state => ({
  apiEngine: state.apiEngine,
}))(NewEventForm));
