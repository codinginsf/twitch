import React, {useState} from 'react'
import styled from 'styled-components';
import {fetchData} from './api';

const Main = styled.div`
  width: 70%;
  padding: 20px 30px;
`;

const SearchBox = styled.div`
  margin: auto;
  width: 50%;
`

const Result = styled.a`
  display: block;
      text-decoration: none;
    color: black;
    border: 1px solid;
    margin: 5px;
    padding: 5px;
    border-radius: 3px;
`;

const RightPanel = styled.div`
  width: 30%;
  background: #eee;
  padding: 20px 30px;
`;

const GameImg = styled.img`
  display: block;
  margin: 20px auto;
`

const SideContent = styled.div`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-grow: 2;
`

const SearchInput = styled.input`
    width: 350px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid;
    font-size: 16px;
`

const BoldText = styled.p`
    margin: 0;
    margin-top: 20px;
    font-weight: 700;
    margin-bottom: 5px;
`

const SideComponent = ({ name, box, popularity }) => (
  <SideContent>
    <h3>{name}</h3>
    <GameImg src={box.large} alt="game" />
    <BoldText>{popularity} viewers</BoldText>
  </SideContent>
)


export const MainContent = () => {
  const initialState = {
    results: [],
    search: '',
    selected: null
  }

  const [
    { results, search, selected },
    setState
  ] = useState(initialState);

  const getSearchResults = async (e) => {
    const { value } = e.target;
    setState(prevState => ({ ...prevState, search: value }));
    const results = await fetchData(value) || [];
    setState(prevState => ({ ...prevState, results }));
  }


  const onClick = selected => e => {
    setState(prevState => ({ ...prevState, selected }));
  }

  return (
    <Container>
      <Main>
        Search for your favorite games in the search box below. Click on their name to find out more information about them.
        <SearchBox>
          <BoldText>Search:</BoldText>
          <SearchInput type="text" value={search} onChange={getSearchResults} />
          {
            Boolean(results.length) && (
              <>
                <BoldText>Games:</BoldText>
                {
                  results.map(({ _id: id, name, box, popularity }) => <Result href="#" key={id} onClick={onClick({ box, popularity, name })}>{name}</Result>)
                }
              </>
            )
          }
        </SearchBox>
      </Main>
        <RightPanel>
          {selected && <SideComponent {...selected} />}
        </RightPanel>

    </Container>
  )
}