import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = (): any => {
  const { error } = useContext(GlobalContext);

  if (error !== undefined) {
    toast.error(error);
    return (
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
      />
    );
  }
  return <></>;
};
