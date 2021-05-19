import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class User extends Component {

    constructor(props) {
        super(props)

        this.state = {

            org: 'מדא 101',
            orgNum: 101,
            display: 'none',
            PoliceBg: 'gray',
            FireBg: 'gray',
            HelpBg: 'lightgray'
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

    Police = () => {

        this.setState({
            org: 'משטרה 100',
            orgNum: 100,
            PoliceBg: 'lightgray',
            FireBg: 'gray',
            HelpBg: 'gray'
        })
        this.changeDisplay()
    }

    Help = () => {

        this.setState({
            org: 'מדא 101',
            orgNum: 101,
            PoliceBg: 'gray',
            FireBg: 'gray',
            HelpBg: 'lightgray'
        })
        this.changeDisplay()
    }

    Fire = () => {

        this.setState({
            org: 'כיבוי אש 102',
            orgNum: 102,
            PoliceBg: 'gray',
            FireBg: 'lightgray',
            HelpBg: 'gray'
        })
        this.changeDisplay()
    }


    call = () => {

        this.props.createCall(this.state.org, this.state.orgNum)
        this.props.history.push(`/${this.state.orgNum}`)
    }

    render() {
        return (
            <div>

                <button onClick={this.changeDisplay}>תפריט</button><br /><br />

                <div style={{ display: this.state.display }} >
                    <button style={{ backgroundColor: this.state.PoliceBg }} onClick={this.Police}>משטרה 100</button><br />
                    <button style={{ backgroundColor: this.state.HelpBg }} onClick={this.Help}>מדא 101</button><br />
                    <button style={{ backgroundColor: this.state.FireBg }} onClick={this.Fire}>כיבוי אש 102</button><br />
                </div>

                <h2>{this.state.org}</h2>
                <button style={{ width: '100px', height: '100px', backgroundColor: 'red', color: 'white', borderRadius: '50px' }} onClick={this.call}>הצילו</button>
            </div>
        )
    }
}
export default withRouter(User)