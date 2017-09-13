import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Field, reduxForm } from 'redux-form';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
// import validator from 'validator';
import FormNames from '../../../constants/FormNames';
import userAPI from '../../../api/user';
import { validateForm } from '../../../actions/formActions';
import { pushErrors } from '../../../actions/errorActions';
import { Recaptcha } from '../../fields/bases';
import {
  BsInput as Input,
  BsCheckbox as Checkbox,
  BsRadio as Radio,
} from '../../fields/adapters';
import {
  BsForm as Form,
  BsFormFooter as FormFooter,
  BsField as FormField,
} from '../../fields/widgets';
import configs from '../../../../../configs/project/client';

const validate = (values) => {
  const errors = {};

  // if (values.email && !validator.isEmail(values.email)) {
  //   errors.email = 'Not an email';
  // }

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.uniemail) {
    errors.uniemail = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = 'Required';
  }

  if (configs.recaptcha && !values.recaptcha) {
    errors.recaptcha = 'Required';
  }

  if (values.password !== values.confirmpassword) {
    errors.confirmpassword = 'Password not match';
  }

  return errors;
};

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

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(formData) {
    let { dispatch, apiEngine } = this.props;

    return userAPI(apiEngine)
      .register(formData)
      .catch((err) => {
        dispatch(pushErrors(err));
        throw err;
      })
      .then((json) => {
        dispatch(push('/user/login'));
      });
  }

  render() {
    const {
      handleSubmit,
      submitFailed,
      error,
      pristine,
      asyncValidating,
      submitting,
      invalid,
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)}>
        {submitFailed && error && (<Alert bsStyle="danger">{error}</Alert>)}
        <Field
          name="username"
          component={FormField}
          label="Username"
          adapter={Input}
          type="text"
          placeholder="Username"
        />
        <Field
          name="uid"
          component={FormField}
          label="UID"
          adapter={Input}
          type="number"
          placeholder="UID"
        />
        <Field
          name="lastname"
          component={FormField}
          label="Last Name"
          adapter={Input}
          type="text"
          placeholder="Last Name"
        />
        <Field
          name="firstname"
          component={FormField}
          label="First Name"
          adapter={Input}
          type="text"
          placeholder="First Name"
        />
        <Field
          name="gender"
          component={FormField}
          label="Gender"
          adapter={Radio}
          style={{
            float: 'left',
            paddingRight: 20,
            marginTop: 10,
          }}
          options={[{
            label: 'Male',
            value: 'male',
          }, {
            label: 'Female',
            value: 'female',
          }]}
        />
        <Field
          name="email"
          component={FormField}
          label="Email"
          adapter={Input}
          type="text"
          placeholder="Email"
        />
        <Field
          name="uniemail"
          component={FormField}
          label="University Email"
          adapter={Input}
          type="text"
          placeholder="University Email"
        />
        <Field
          name="curriculum"
          component={FormField}
          label="Curriculum"
          adapter={Input}
          type="text"
          placeholder="Curriculum"
        />
        <Field
          name="phone"
          component={FormField}
          label="Contact Number"
          adapter={Input}
          type="number"
          placeholder="Contact Number"
        />
        <Field
          name="password"
          component={FormField}
          label="Password"
          adapter={Input}
          type="password"
          placeholder="Password"
        />
        <Field
          name="confirmpassword"
          component={FormField}
          label="Confirm Password"
          adapter={Input}
          type="password"
          placeholder="Confirm Password"
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
            disabled={pristine || !!asyncValidating || submitting || invalid}
          >
            Register
          </Button>
        </FormFooter>
      </Form>
    );
  }
};

export default reduxForm({
  form: FormNames.USER_REGISTER,
  initialValues: {
    slide: {
      min: 30,
      max: 40,
    },
  },
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
})(connect(state => ({
  apiEngine: state.apiEngine,
}))(RegisterForm));
