import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { notifyError, notifyLoading, notifySuccess } from "../../Store/notify/actions"
import Toast from "./Toast"


const Alert = () => {
  const notify = useSelector(state => state.notify)
  const dispatch = useDispatch()

  return (
    <>
      {/* {notify.loading && <Loading />} */}
      {notify?.error && (
        <Toast
          msg={{ msg: notify.error, title: "Error" }}
          handleShow={() => dispatch(notifyError())}
          bgColor="bg-danger"
        />
      )}

      {notify?.success && (
        <Toast
          msg={{ msg: notify.success, title: "Success" }}
          handleShow={() => dispatch(notifySuccess())}
          bgColor="bg-success"
        />
      )}

      {notify?.loading && (
        <Toast
          msg={{ msg: "Loading...", title: "Loading" }}
          handleShow={() => dispatch(notifyLoading())}
          bgColor="bg-success"
        />
      )}
    </>
  )
}

export default Alert
