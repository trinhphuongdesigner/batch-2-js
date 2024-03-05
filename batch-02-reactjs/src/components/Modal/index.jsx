import React from 'react';
import AppModal from './AppModal';

function AppModalContainer() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <AppModal modalIsOpen={modalIsOpen} closeModal={setIsOpen} />
    </div>
  );
}

export default AppModalContainer;