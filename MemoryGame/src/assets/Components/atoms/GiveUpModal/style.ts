import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalCard = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 24px;
  max-width: 420px;
  width: 100%;
  text-align: center;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const CancelButton = styled.button`
  flex: 1;
  background: #e0e0e0;
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  flex: 1;
  background: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;
