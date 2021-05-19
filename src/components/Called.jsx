import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Called extends Component {

    constructor(props) {
        super(props)

        this.state = {

            display: 'none',
            disabled: false,
            pass1: false,
            pass2: false,
            caunter: 1
        }
    }

    changeDisplay = () => {
        if (this.state.display == 'none') {
            this.setState({ display: 'inline-block' })
        }
        else {
            this.setState({ display: 'none' })
        }
    }

    validPass1 = (e) => {

        let pass = e.target.value

        if (pass == this.props.user.pass) {
            this.setState({ pass1: true })
        }
        else {
            this.setState({ pass1: false })
        }
    }

    validPass2 = (e) => {

        let pass = e.target.value

        if (pass == this.props.user.pass) {
            this.setState({ pass2: true })
        }
        else {
            this.setState({ pass2: false })
        }
    }

    Cancel = () => {

        this.changeDisplay()

        if (this.state.pass1 && this.state.pass2) {

            this.props.history.push(`/${this.props.user.name}`)
        }
        else {

            if (this.state.caunter < 3) {

                this.setState({ caunter: this.state.caunter + 1 })
            }
            else {
                this.setState({ disabled: true })
            }
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.user.Called}</h2>
                <h2>{this.props.user.name}</h2>
                <button disabled={this.state.disabled} onClick={this.changeDisplay}>ביטול</button><br />

                <div style={{ display: this.state.display }} >

                    <input onChange={this.validPass1} placeholder='הקש סיסמה' /><br />
                    <input onChange={this.validPass2} placeholder='אשר סיסמה' /><br />
                    <button onClick={this.Cancel}>אישור</button>

                </div>
            </div>
        )
    }
}
export default withRouter(Called)