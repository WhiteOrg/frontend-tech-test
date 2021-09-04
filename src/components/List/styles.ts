import styled from "styled-components";
import { Flex } from "reflexbox";

const StyledSeparator = styled.div`
  height: 1px;
  background-color: #f5f4fe;
`;

const StyledItemWrapper = styled.div`
  color: #000000;
  padding: 10px 5px;
`;

const StyledListWrapper = styled(Flex)`
  flex-direction: column;
  padding: 0 15px 0 10px;
  max-height: 300px;
  overflow-y: auto;
`;

export { StyledSeparator, StyledItemWrapper, StyledListWrapper };
