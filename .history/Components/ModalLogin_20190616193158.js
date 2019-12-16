import React from "react";
import styled from "styled-components";

class ModalLogin extends React.Component {
  render() {
    return (
      <Container>
        <Modal>
          <Logo />
          <Text />
          <TextInput />
          <TextInput />
          <Button />
        </Modal>
      </Container>
    );
  }
}
export default ModalLogin;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;
const Modal = styled.View`
  width: 335px;
  height: 370px;
`;
const Logo = styled.Image``;
const Text = styled.Text``;
const TextInput = styled.TextInput``;
const Button = styled.View``;
