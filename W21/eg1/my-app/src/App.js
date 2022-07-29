import styled from 'styled-components';

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;

  padding: 5px;

  & + & {
    margin-top: 4px;
  }
`;

const TodoContent = styled.div`
  color: blue;
  font-size: 10px;

  ${ props => props.size === 'XL' && `
    font-size: 20px;
    font-weight: bold;
  `}
`;

const ButtonWrapper = styled.div``;

const TodoButton = styled.button`
  color: black;

  & + & {
    margin-left: 4px;
  }
`;

function TodoItem({ size, content }) {
  return (
    <TodoWrapper>
      <TodoContent size={size}>{content}</TodoContent>
      <ButtonWrapper>
        <TodoButton>已完成</TodoButton>
        <TodoButton>刪除</TodoButton>
      </ButtonWrapper>
    </TodoWrapper>
  );
}

function App() {
  return (
    <div className='App'>
      <TodoItem content={123}/>
      <TodoItem content={456} size="XL"/>
    </div>
  );
}

export default App;
