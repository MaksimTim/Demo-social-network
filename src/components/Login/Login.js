import React from "react"
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import {required} from "../../utils/validators/validators"
import {connect} from "react-redux"
import {login} from "../../redux/auth-reducer"
import {Navigate} from "react-router-dom"
import styles from './../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'}
                   name={'email'}
                   validate={[required]}
                   component={Input}
            />
        </div>
        <div>
            <Field placeholder={'Password'}
                   name={'password'}
                   type={'password'}
                   validate={[required]}
                   component={Input}
            />
        </div>
        <div>
            <Field type={'checkbox'}
                   name={'rememberMe'}
                   component={Input}
            /> remember me
        </div>
        {props.captchaUrl && <img src={props.captchaUrl}/>}
        {props.captchaUrl && <Field placeholder={'captcha'}
                                    name={'captcha'}
                                    validate={[required]}
                                    component={Input}
        />}
        {props.error && <div className={styles.formSummaryError}>
            {props.error}
        </div>}

        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)