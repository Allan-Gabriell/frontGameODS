import React from "react";
import {
  ModalOverlay,
  ModalCard,
  ModalActions,
  CancelButton,
  ConfirmButton,
} from "./style";

interface GiveUpModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const GiveUpModal: React.FC<GiveUpModalProps> = ({
  open,
  onCancel,
  onConfirm,
}) => {
  if (!open) return null;

  return (
    <ModalOverlay>
      <ModalCard>
        <h3>Desistir da partida?</h3>

        <p>
          Se você desistir, o andamento atual da partida será salvo e
          <strong> não será possível recuperar ou continuar</strong> nesta
          versão do game.
        </p>

        <ModalActions>
          <CancelButton onClick={onCancel}>
            Continuar jogando
          </CancelButton>

          <ConfirmButton onClick={onConfirm}>
            Confirmar desistência
          </ConfirmButton>
        </ModalActions>
      </ModalCard>
    </ModalOverlay>
  );
};

export default GiveUpModal;
