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
        return (
            <div className='container'>
                <Button />
                {
                    this.props.info && this.props.info.map(item => {
                        return <div key={item.key} className='item-container'>
                            <p className='text'>Nome: {item.name}</p>
                            <p className='text'>Idade: {item.age}</p>
                            <p className='text'>Repositório: <a href={item.repository}>{item.repository}</a></p>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, {})(App)
