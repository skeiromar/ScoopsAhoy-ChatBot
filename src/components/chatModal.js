import React, {useState} from 'react';
import Modal from 'react-modal';
import ChatButton from './chatButton';
import ChatBot from './chatBot';

Modal.setAppElement("#root");

function ChatModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <ChatButton openModal={openModal}/>
            <Modal 
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Captain Steve Modal"
            >
            <ChatBot />

            </Modal>
        </div>
    )
}

const modalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default ChatModal;
