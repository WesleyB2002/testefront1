import React from 'react';
import '../assets/styles/modal.css'; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title: string;
  content: string;
  confirmText?: string;
  cancelText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  content,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <header className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </header>
        <div className="modal-body">
          <p>{content}</p>
        </div>
        <footer className="modal-footer">
          <button className="modal-button cancel" onClick={onClose}>{cancelText}</button>
          {onConfirm && (
            <button className="modal-button confirm" onClick={onConfirm}>{confirmText}</button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Modal;
