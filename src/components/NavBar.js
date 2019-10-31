import React from 'react';
import twitchLogo from '../twitch.svg'
import styled from "styled-components";

const TwitchImage = styled.img`
  width: 40px;
  margin: 0 20px;
`
const TwitchTitle = styled.h1`
  color: white;
`;

const TwitchHeader = styled.header`
  background: #65459B;
  width: 100vw;
  display: flex;
`;

export const NavBar = () => (
  <TwitchHeader>
    <TwitchImage src={twitchLogo} alt="twitch logo"/>
    <TwitchTitle>Twitch Game Search</TwitchTitle>
  </TwitchHeader>
)