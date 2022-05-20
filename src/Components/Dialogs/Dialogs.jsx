import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsItem} from "./DialogsItem/DialogsItem";


export const Dialogs = (props) => {


    let dialogsElement = props.state.dialogsData.map( t => <DialogsItem name={t.name} id={t.id}/>)
    let messageElements = props.state.messageData.map(t => <Message message={t.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

