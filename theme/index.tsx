import styled from 'styled-components';

export const SectionWrapper = styled.div`
  max-width: 1780px;
  padding: 64px 2rem;

  @media (max-width: 960px) {
    padding: 48px 1rem;
  }
`;

export const NormalButton = styled.button`
  display: flex;
  padding: 13px 17px;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 48px;
  border: 1px solid #ff7a1c;
  background: #ef6402;

  font-size: 16px;
  font-weight: 300;

  &.shadow {
    box-shadow: 0px 0px 8px 0px #f88523;
  }
`;

export const ColorButton = styled.button`
  gap: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  background: #ff7a1c;
  color: #fafafa;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 24px;

  &:hover {
    background: #eb5d02;
    box-shadow: 0px 0px 6px 0px #eb5d02;
  }

  &.grey {
    background: #747fa6;

    &:hover {
      background: #818baf;
    }
  }

  &:disabled {
    background: #747fa6;
    box-shadow: none;
  }
`;
