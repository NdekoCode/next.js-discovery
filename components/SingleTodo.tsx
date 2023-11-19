'use client'
import { FC, useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const SingleTodo:FC = ()=>{
    const  [modalOpen,setModalOpen] = useState<boolean>(false);
    const toggleModalHandler =<T,> (value:boolean|null|T = null):void=>{
        if(value && typeof value=="boolean"){
            setModalOpen(value);
        }
        setModalOpen(v=>!v);
        
    }
    return (<div className="p-3 border border-gray-100 flex flex-col gap-y-5 rounded-md shadow-md shadow-gray-200 min-w-[250px] w-max">

        <h1>My todos</h1>
        <div className="flex flex-col gap-y-5">
            <h1 className="text-3xl font-bold">TITLE</h1>
            <div>
            <button onClick={toggleModalHandler} className="btn btn-alert">Delete </button></div>
        </div>
        {modalOpen && <>
        <Modal onActive={toggleModalHandler}/>
        <Backdrop  onActive={toggleModalHandler}/>
        </>}
    </div>)
}

export default SingleTodo;