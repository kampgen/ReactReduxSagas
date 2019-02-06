import React, { Component } from 'react';
import Button from './components/button';
import './App.css';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { addTodo } from './actions/todoActions';

const mapStateToProps = state => ({
    status: state.todo.status,
    item: state.todo.item
});

const mapDispatchToProps = dispatch => ({
    addTodoItem: item => dispatch(addTodo(item))
})

const TodosQuery = gql`
  query {
    allTodoes {
      id
      text
    }
  }
`;

const TodoMutation = gql`
  mutation ($text: String!) {
    createTodo ( text: $text ) {
      text
    }
  }
`;


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todoText: ''
        }
    }

    addTodo = () => {
        const { todoText } = this.state;

        this.props.addTodo({
            variables: { text: todoText },
            update: (proxy, { data: { createTodo } }) => {
              this.props.todos.refetch();
              console.log('teste', todoText);
              this.setState({ todoText: '' })

            },
          })
    }

    render() {
        return (
            <div className='container'>
                <input type='text' value={this.state.todoText} onChange={text => this.setState({ todoText: text.target.value })} />
                <button style={{ padding: 5, borderRadius: 5, width: 100, marginTop: 10 }} onClick={() => this.addTodo()}>Adicionar tarefa</button>
                <ul>
                    {
                        this.props.todos && this.props.todos.allTodoes ?
                            this.props.todos.allTodoes.map(item => {
                                return <li key={item.id} className='item-container'>
                                    Tarefa: {item.text}
                                </li>
                            })
                            :
                            <li className='item-container'>Nenhum item</li>
                    }
                </ul>
            </div>
        )
    }
}

export default compose(
    graphql(TodosQuery, { name: 'todos' }),
    graphql(TodoMutation, { name: 'addTodo' }),
    connect(mapStateToProps, mapDispatchToProps))
    (App);
