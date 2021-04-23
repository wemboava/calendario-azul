import styled from 'styled-components';

export const Content = styled.div`
  padding: 40px;
  .actions {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
`;

export const Button = styled.button`
	width: 160px;
	border: none;
	background: #00abec;
	color: #fff;
	padding: 8px 15px;
	border-radius: 30px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
  font-size: 18px;
	& > svg {
		margin-right: 15px;
	}
`;

export const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0 0 0 / 50%);
  z-index: 10;
  & > ul {
    position: absolute;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    right: 10px;
    top: 10px;
    border-radius: 10px;
    & > li {
      padding: 10px 15px;
      font-size: 16px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00abec;
  padding: 12px 25px 12px 15px;
  & > h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
  padding: 7px 0;
  .info-title {
    font-size: 16px;
  }
  .info-content {
    font-weight: 200;
    font-size: 14px;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  .image-wrapper {
    width: 92%;
    max-width: 310px;
    box-shadow: 0px 0px 28px -5px rgb(57 57 57 / 50%);
    border-radius: 20px;
    & > img {
      border-radius: 20px;
    }
  }
`;