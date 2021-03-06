import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { Input } from '../Common/FormControls/FormsControls';
import styles from './../Common/FormControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/* <input placeholder={'Login'} /> */}
                <Field placeholder={'Email'} name={'email'} component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                    validate={[required]} type={'password'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
            </div>
            { props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

// export default Login;
export default connect(mapStateToProps, {login}) (Login);