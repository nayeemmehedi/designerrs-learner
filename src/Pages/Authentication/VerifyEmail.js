import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import Loading from "../../Components/Common/Loading"
import axiosApi from "../../Helper/api"
import { notifyError } from "../../Store/notify/actions"

const VerifyEmail = () => {
  const { string } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    axiosApi
      .post(`/learners/${string}/verify`)
      .then(res => {
        console.log(res.data)
        dispatch(notifyError(res.data))
        history.push("/account-settings")
      })
      .catch(err => {
        console.log(err)
        dispatch(notifyError(err?.response?.data?.error))
      })
  })
  return <Loading />
}

export default VerifyEmail
