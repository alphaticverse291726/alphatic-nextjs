'use client';
import { useEffect } from 'react';
import { useModal } from '@/lib/ModalContext';

export default function Modal() {
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [closeModal]);

  return (
    <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={(e) => e.target === e.currentTarget && closeModal()}>
      <div className="modal-box">
        <button className="modal-close" onClick={closeModal}>✕</button>
        <iframe src="https://tally.so/r/lbOeYp" title="Alphatic Labs — Get Started" allow="fullscreen" />
      </div>
    </div>
  );
}
