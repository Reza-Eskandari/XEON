import React from "react";
import styled from "styled-components";

class ModalLogin extends React.Component {
  render() {
    return (
      <Container>
        <Modal>
          <Logo source={require("../assets/logo-dc.png")} />
          <Text>Start Learning. Access Pro Content.</Text>
          <TextInput />
          <TextInput />
          <Button>
            <ButtonText>Log In</ButtonText>
          </Button>
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
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0 0.15);
  align-items: center;
`;
const Logo = styled.Image`
  width: 44px;
  height: 44px;
  margin-top: 50px;
`;
const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 170px;
  text-align: center;
  color: #b8bece;
`;
const TextInput = styled.TextInput``;
const Button = styled.View`
  background: #5263ff;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;
