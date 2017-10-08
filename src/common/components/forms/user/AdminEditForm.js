import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import FormNames from '../../../constants/FormNames';
import userAPI from '../../../api/user';
import { pushErrors } from '../../../actions/errorActions';
import { setCookies } from '../../../actions/cookieActions';
import { BsInput as Input } from '../../fields/adapters';
import {
  BsForm as Form,
  BsFormFooter as FormFooter,
  BsField as FormField,
} from '../../fields/widgets';
export const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  return errors;
};

class AdminEditForm extends Component {
  constructor(props) {
    super(props);
    this.init = this._init.bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
  }

  _init(user) {
    let { initialize } = this.props;

    initialize({
      username: user.username,
      lastname: user.lastname,
      firstname: user.firstname,
      uniemail: user.uniemail,
      curriculum: user.curriculum,
      phone: user.phone,
    });
  }

  componentDidMount() {
    let { dispatch, apiEngine } = this.props;

    userAPI(apiEngine)
      .readAny()
      .catch((err) => {
        dispatch(pushErrors(err));
        throw err;
      })
      .then((json) => {
        this.init(json.user);
      });
  }

  _handleSubmit(formData) {
    let { dispatch, apiEngine } = this.props;

    return userAPI(apiEngine)
      .update(formData)
      .catch((err) => {
        dispatch(pushErrors(err));
        throw err;
      })
      .then((json) => {
        this.init(json.user);
        dispatch(setCookies({
          user: json.user,
        }));
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
          name="username"
          component={FormField}
          label="Username"
          adapter={Input}
          type="text"
          placeholder="Username"
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
  form: FormNames.ADMIN_EDIT_USER,
  validate,
})(connect(state => ({
  apiEngine: state.apiEngine,
}))(AdminEditForm));
