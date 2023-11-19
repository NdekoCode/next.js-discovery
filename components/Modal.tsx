import { FC } from "react";

const Modal: FC<{onActive:<T,>(v:boolean|T)=>void}> = ({onActive}) => {
  return (
    <div className="modal" onClick={(e)=>e.stopPropagation()}>
      <div className="flex flex-col items-center w-full h-full p-5 gap-y-5">
        <p className="text-lg"> Are you sure ?</p>
        <div className="flex items-center gap-x-3">
          <button className="btn" onClick={()=>onActive(false)}>Cancel</button>
          <button onClick={onActive} className="btn btn-alert">Confirm</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
