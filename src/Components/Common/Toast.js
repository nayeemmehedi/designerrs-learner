import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { notifyError, notifyLoading, notifySuccess } from "../../Store/notify/actions"

const Toast = ({ msg, handleShow, bgColor }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(notifyError());
      dispatch(notifySuccess());
      dispatch(notifyLoading());
    }, 4000);
  }, [dispatch]);
    return (
      <>
        <span onClick={handleShow}>
          <div
            className={`toast show position-fixed text-light ${bgColor}`}
            style={{ top: "10px", right: "30%", zIndex: 5000, borderRadius: 0 }}
          >
            {/* <div className={`toast-header ${bgColor} text-light d-flex justify-content-between`}>
              <strong className="mr-auto text-light">{msg.title}</strong>
              <button
                type="button"
                style={{ border: "none", cursor: 'pointer', color: '#fff' }}
                className={`${bgColor}`}
              >
                <h6>X</h6>
              </button>
            </div> */}
  
            <div className="toast-body text-center">{msg.msg}</div>
          </div>
        </span>
      </>
    );
  };
  
  export default Toast;
  