import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './components/button';
import './App.css';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    status: state.user.status,
    info: state.user.info
})
class App extends Component {

    render() {
        console.log(this.props.status)
        console.log('user', this.props.info)
        return (
            <div className='container'>
                <Button />
                {
                    this.props.info && this.props.info.map(info => {
                        return <div key={info.key}>
                            <p className='text'>Nome: {info.name}</p>
                            <p className='text'>Idade: {info.age}</p>
                            <p className='text'>Repositório: {info.repository}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, {})(App)
