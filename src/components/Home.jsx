import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {

            name: '',
            pass: '',
            nameError: '',
            passError: ''
        }
    }

    validName = (e) => {

        let name = e.target.value

        let validChar = ''
        let validNum = ''
        let validlen = ''

        for (let i = 0; i < name.length; i++) {

            if ((name.charAt(i) >= 'a' && name.charAt(i) <= 'z') || (name.charAt(i) >= 'A' && name.charAt(i) <= 'Z')) {
                validChar = 'ok'
            }
            else {
                validNum = 'no'
            }
        }

        if (name.length < 4) {
            validlen = 'no'
        }
        else {
            validlen = 'ok'
        }

        if (validChar == 'ok' && validlen == 'ok' && validNum == '') {
            this.setState({ name: name, nameError: '' })
        }
        else {
            this.setState({ name: '', nameError: 'חייב להיות לפחות 4 תווים וללא מספר' })
        }
    }

    validPass = (e) => {

        let pass = e.target.value

        let validChar = ''
        let validNum = ''
        let validlen = ''

        for (let i = 0; i < pass.length; i++) {

            if ((pass.charAt(i) >= 'a' && pass.charAt(i) <= 'z') || (pass.charAt(i) >= 'A' && pass.charAt(i) <= 'Z')) {
                validChar = 'ok'
            }
            else if (pass.charAt(i) >= 0 && pass.charAt(i) <= 9) {
                validNum = 'ok'
            }

        }

        if (pass.length < 8) {
            validlen = 'no'
        }
        else {
            validlen = 'ok'
        }

        if (validChar == 'ok' && validNum == 'ok' && validlen == 'ok') {
            this.setState({ pass: pass, passError: '' })
        }
        else {
            this.setState({ pass: '', passError: 'חייב להיות לפחות 8 תווים אות אחת וספרה אחת' })
        }
    }

    signUp = () => {

        if (this.state.name != '' && this.state.pass != '') {

            this.props.createUser(this.state.name, this.state.pass)
            this.props.history.push(`/${this.state.name}`)
        }
    }

    render() {
        return (
            <div>

                <h1>הרשמה</h1>
                <div style={{ color: 'red' }}>{this.state.nameError}</div>
                <input type="text" placeholder='שם מלא' onChange={this.validName} /><br />
                <div style={{ color: 'red' }}>{this.state.passError}</div>
                <input type="text" placeholder='סיסמה' onChange={this.validPass} /><br />
                <button onClick={this.signUp}>הירשם</button>
            </div>
        )
    }
}

export default withRouter(Home)