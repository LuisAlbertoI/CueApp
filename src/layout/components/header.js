import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu, FiUser, FiX } from 'react-icons/fi';
import { Wrapper, FlexBox } from '../../styles';

const Content = styled.header`
  color: white;
  padding: 0.5em 0;
  box-sizing: border-box;
  background-color: #151b26;
  border-bottom: 1px solid #ffffff26;
`;

const Primary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Hidden = styled.div`
  display: none;
  cursor: pointer;
  user-select: none;
  @media (max-width: 576px){
    display: block;
  }
  svg {
    font-size: 1.5em;
  }
`;

const Figure = styled(Link)`
  font-size: 2em;
  font-family: "Magneto";
`;

const Navigate = styled.nav`
  display: flex;
  align-items: center;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    li {
      margin: 0 0 0 2em;
      list-style: none;
    }
  }
  @media (max-width: 576px){
    display: ${props => props.active ? 'flex' : 'none'};
    ul {
      width: 100%;
      margin: 0.5em 0 0 0;
      flex-direction: column;
      li {
        margin: 0;
        padding: 0.5em 0;
        border-top: 1px solid #ffffff26;
        &:last-child {
          display: none;
        }
      }
    }
  }
`;

function Header() {
  const [show, setShow] = useState(false);
  return (
    <Content>
      <Wrapper>
        <FlexBox>
          <Primary>
            <Hidden onClick={() => setShow(!show)}>
              {!show ? <FiMenu /> : <FiX />}
            </Hidden>
            <Figure to="/">Cue</Figure>
            <Hidden>
              <Link to="/">
                <FiUser />
              </Link>
            </Hidden>
          </Primary>
          <Navigate active={show}>
            <ul>
              <li>
                <Link to="/">Expore</Link>
              </li>
              <li>
                <Link to="/">Recent jobs</Link>
              </li>
              <li>
                <Link to="/">Tracks</Link>
              </li>
              <li>
                <Link to="/">Sign In</Link>
              </li>
            </ul>
          </Navigate>
        </FlexBox>
      </Wrapper>
    </Content>
  );
}

export default Header;