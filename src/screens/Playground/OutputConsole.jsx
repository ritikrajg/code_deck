import React from 'react'
import { Console, Header, TextArea } from './InputConsole'
import { BiExport } from 'react-icons/bi'
import styled from 'styled-components'

const ErrorMessage = styled.div`
  color: #ff5555;
  margin: 10px 0;
  padding: 8px;
  border-radius: 4px;
  background-color: rgba(255, 0, 0, 0.1);
`

const LoadingIndicator = styled.div`
  margin: 10px 0;
  padding: 8px;
  text-align: center;
  color: var(--primary-color);
`

const OutputConsole = ({ currentOutput, isLoading, error }) => {
  return (
    <Console>
      <Header>
        Output:

        <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(currentOutput)}`} download="output.txt">
          <BiExport /> Export Output
        </a>
      </Header>
      
      {isLoading && <LoadingIndicator>Running your code...</LoadingIndicator>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <TextArea
        value={currentOutput}
        disabled
      />
    </Console>
  )
}

export default OutputConsole