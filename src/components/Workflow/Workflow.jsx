import { styled } from "styled-components";

const Styledworkflow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Workflow = ({ children }) => {
  return <Styledworkflow>{children}</Styledworkflow>;
};

export default Workflow;
 