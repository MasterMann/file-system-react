import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import CreateNew from '../CreateNew';

export default function Add() {
  const [open, handleOpen] = useState(false);
  return (
    <Fragment>
      <Container onClick={() => handleOpen(true)}>+</Container>
      {open ? (
        <CreateNew title="Create New" closeFn={() => handleOpen(false)} />
      ) : (
        ''
      )}
    </Fragment>
  );
}

const Container = styled.div`
  height: 109px;
  width: 96px;
  border: 3px dashed #dee0e4;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  font-size: 30px;
  color: #dee0e4;
  margin: -6px 21px;
  cursor: copy;
`;
