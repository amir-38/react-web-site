import styled from "styled-components";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div className="aaa" />
      <div className="bbb" />
      <div className="ccc" />
    </StyledBurger>
  );
};
const StyledBurger = styled.button`
  position: absolute;
  top: 40%;
  right: 3rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
  @media screen and (max-width: 576px) {
    display: flex;
    bacgraund-color: black;
  }
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &.aaa {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &.bbb {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &.ccc {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default Burger;
