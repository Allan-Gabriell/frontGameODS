import styled from 'styled-components';

export const ToastWrapper = styled.div<{
  type: 'success' | 'info' | 'warning' | 'error';
}>`
  display: flex;
  max-width: 600px;
  width: 100%;
  align-items: center;
  padding: 12px 16px;
  border-radius: 6px;
  color: white;
  gap: 12px;
  font-size: 16px;

  background-color: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#2e7d32';
      case 'info':
        return '#1976d2';
      case 'warning':
        return '#ef6c00';
      case 'error':
        return '#d32f2f';
      default:
        return '#333';
    }
  }};
`;