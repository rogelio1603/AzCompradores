import React from "react";
import {ModalStyles, CloseModalButton} from "../shared/Modal.styles"

function Modal({showModal, setShowModal, infoModal}) {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

  return (
    <>
        {showModal ? 
            (<ModalStyles onClick={() => setShowModal(prev => !prev)}>
                <div className="modalWrapper" showModal={showModal}>
                {
                    infoModal != {} ?
                    <div className="modal-content" onClick={handleModalDialogClick}>
                        <div className="image-content">
                            <img src={infoModal.image.url} />
                        </div>
                        <div className="description-content">
                            <h2>{infoModal.title}</h2>
                            <a>{infoModal.category}</a>
                            <p>{infoModal.content}</p>
                            <div className="buttons-content">
                                <a className="button-modal" href={infoModal.mxLink} target="_blank">Comprar en MEX <img src={infoModal.mxImage.url} /></a>
                                <a className="button-modal" href={infoModal.usLink} target="_blank">Comprar en USA <img src={infoModal.usImage.url} /></a>
                            </div>
                            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                        </div>
                    </div>
                    : {}
                }
                </div>
            </ModalStyles>) 
        : null}
    </>
  );
}

export { Modal };
