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
import { AirSingleDate, Recaptcha } from '../../fields/bases';
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
// import configs from '../../../../../configs/project/client';

const validate = (values) => {
  const errors = {};

  // if (values.email && !validator.isEmail(values.email)) {
  //   errors.email = 'Not an email';
  // }

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

  if (!values.organiser) {
    errors.organiser = 'Required';
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

/* let asyncValidate = (values, dispatch) => {
  return dispatch(validateForm(FormNames.NEW_EVENT, 'email', values.email))
    .then((json) => {
      let validationError = {};
      if (!json.isPassed) {
        validationError.email = json.message;
        throw validationError;
      }
    });
}; */

class NewEventForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(formData) {
    let { dispatch, apiEngine } = this.props;

    return eventAPI(apiEngine)
      .create(formData)
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
          name="organiser"
          component={FormField}
          label="Organiser"
          adapter={Input}
          type="text"
          placeholder="Organiser"
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
        <Field
          name="recaptcha"
          component={FormField}
          label=""
          adapter={Recaptcha}
        />
        <FormFooter>
          <Button
            type="submit"
            disabled={pristine || submitting || invalid}
          >
            Register
          </Button>
        </FormFooter>
      </Form>
    );
  }
};

export default reduxForm({
  form: FormNames.NEW_EVENT,
  initialValues: {
    slide: {
      min: 30,
      max: 40,
    },
  },
  validate,
  // asyncValidate,
  // asyncBlurFields: ['email'],
})(connect(state => ({
  apiEngine: state.apiEngine,
}))(NewEventForm));
