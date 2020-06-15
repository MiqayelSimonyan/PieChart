import React, { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Popup = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                className={`btn btn-primary float-right ml-3 mt-1 mb-3 ${props.className}`}
                onClick={() => setOpen(true)}>
                {props.value}
            </button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
            >
                {props.children}
            </Modal>
        </>
    )
};

export default Popup;