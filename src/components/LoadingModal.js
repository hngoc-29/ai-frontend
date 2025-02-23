import React from 'react';

const LoadingModal = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <div id="loadingModal" style={styles.modal}>
            <div className="modal-content" style={styles.modalContent}>
                <img
                    src="https://cdn3.iconfinder.com/data/icons/mobile-banking-ver-4b/100/1-57-512.png"
                    alt="loading"
                    style={styles.loadingImage}
                />
            </div>
        </div>
    );
};

const styles = {
    modal: {
        display: 'flex',
        userSelect: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: 'transparent',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
    },
    loadingImage: {
        width: '100px',
        height: '100px',
        animation: 'rotate 2s linear infinite',
    },
};

export default LoadingModal;