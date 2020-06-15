import React from 'react';

import CreateFiled from './create-field';
import Popup from '../common/popup';

import '../../assets/styles/layout/add-field.scss';

const AddField = (props) => {
    return (
        <div className="col-md-12 clearfix add-field-wrapper">
            <Popup value="+" className="add-field">
                <CreateFiled
                    id={props.id}
                    addField={true}
                />
            </Popup>
        </div>
    );
};

export default AddField;