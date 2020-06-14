import React, { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Popup = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <>
           <button onClick={() => setOpen(true)} className="btn btn-primary">
               aaaaaaa
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