import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [errorMsg, setErrorMsg] =
    useState('')

  const [showErrorMsg,
    setShowErrorMsg] =
    useState(false)

  const submitOnSuccess = jwtToken => {
    Cookies.set(
      'jwt_token',
      jwtToken,
      { expires: 30 }
    )

    navigate('/', {
      replace: true
    })

    setShowErrorMsg(false)
  }

  const submitOnFailure = errorMessage => {
    setErrorMsg(errorMessage)
    setShowErrorMsg(true)
  }

  const onSubmitForm = async event => {
    event.preventDefault()

    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(
        userDetails
      ),
    }

    const response = await fetch(
      'https://apis.ccbp.in/login',
      options
    )

    const data =
      await response.json()

    if (response.ok) {
      submitOnSuccess(
        data.jwt_token
      )
    } else {
      submitOnFailure(
        data.error_msg
      )
    }
  }

  const setDemoDetails = () => {
    setUsername('rahul')
    setPassword('rahul@2021')
  }

  return (
    <div className="login-container">

      <div className="card-container">

        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="logo-img"
            alt="website logo"
          />
        </div>

        <form
          className="form-container"
          onSubmit={onSubmitForm}
        >

          <label htmlFor="username">
            Username
          </label>

          <input
            id="username"
            type="text"
            placeholder="Username"
            className="username-ip"
            value={username}
            onChange={e =>
              setUsername(
                e.target.value
              )
            }
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Password"
            className="username-ip"
            value={password}
            onChange={e =>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            className="login-btn"
            type="submit"
          >
            Login
          </button>

          {showErrorMsg && (
            <p className="error-msg">
              {errorMsg}
            </p>
          )}
        </form>

        <button
          className="demo-btn"
          type="button"
          onClick={setDemoDetails}
        >
          Demo
        </button>

      </div>

    </div>
  )
}

export default Login