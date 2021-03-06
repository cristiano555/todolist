import React, { Component } from 'react';
import ToDoItem from '../../components/ToDoItem'
import NewTodoForm from '../../components/NewTodoForm'
import styled from 'styled-components'


const Container = styled.div`
background: #2b2e39;
margin: 0 auto;
width: 80%;
max-width: 600px;
padding: 14px;
border-radius: 14px;
margin-top: 14px;
`

const Header = styled.h1`
color: #fff;
`
const DestroyButton = styled.button`
background: red;
margin: 10px 0;
padding: 10px;
color: #fff;
border-radius: 5px;
border: 1px solid red;
`

class ToDoList extends Component {
  static defaultProps = {
    tasks: [
        {text: 'Go for a walk'},
        {text: 'Learning JS and ReactJS'}
      ],
    title: "To do List"
  }
  
    state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = event => {
    this.setState({draft: event.target.value})
  }

  addToDo = () => {
    const { tasks, draft } = this.state
    const list = tasks
    list.push({text: draft, done: false})
    this.setState({tasks: list, draft: ''})
  }

removeAll = () => {

  this.setState({tasks: []})
}


  render() {
    const { title } = this.props
    const {tasks, draft} = this.state
    return (
      <Container>
        <Header>{title}</Header>
        <DestroyButton onClick={this.removeAll}>Remove all</DestroyButton>
        {tasks.map(task => <ToDoItem text={task.text} done={task.done} />)}
        <NewTodoForm
          onSubmit={this.addToDo}
          onChange={this.updateDraft}
          draft={draft} />

      </Container>
    )

  }
}



export default ToDoList