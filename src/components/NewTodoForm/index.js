import React, { Component } from 'react';
import styled from 'styled-components'


const Button = styled.button`
background: #232632;
color: #00a7fa;
cursor: pointer;
width: 100px;
height: 32px;
font-size: 1.2em;
border: 0px;
display: flex;
justify-content: center;
align-items: center;
`

const TextInput = styled.input`
padding: 5px;
font-size: .7em;
background: #232632;
color: #d3d4d6;
width: 100%;
margin-right: 7px;
border: 0px;
-webkit-appearance: none;
`

const Container = styled.div`
display: flex;
justify-content: space-beetwen;
border: 2px solid #343744;
background: #232632;
border-radius: 10px;
padding: 5px;
`


const NewTodoForm = ({onChange, draft, onSubmit}) => (
    <Container>
      <TextInput type="text" onChange={onChange} value={draft} />
      <Button onClick={onSubmit}>Add</Button>
    </Container>
  )

  export default NewTodoForm
