import { CircularProgress } from "@material-ui/core"
import firebase from "firebase"
import { isUndefined } from "lodash-es"
import moment from "moment"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
//i18n
import { withTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "reactstrap"
import { fetchRecievedFiles } from "redux/FileRecieved/action"
import { fetchFiles } from "redux/FileSent/action"
import { fetchRecieveInvoice } from "redux/invoice/recieve/actions"
import { fetchSentInvoice } from "redux/invoice/send/actions"
import SimpleBar from "simplebar-react"
//Import images

const NotificationDropdown = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)
  const [loading, setLoading] = useState(true)
  const [newNotifications, setNewNotifications] = useState([])
  // const { notifications } = props
  const dispatch = useDispatch()

  const { recievedFiles, recieve_invoices, files, sent_invoices } = useSelector(
    state => state
  )

  const uid = JSON.parse(localStorage.getItem("authUser"))?.uid

  useEffect(() => {
    dispatch(fetchRecievedFiles())
    dispatch(fetchFiles())
    dispatch(fetchRecieveInvoice())
    dispatch(fetchSentInvoice())
  }, [])

  useEffect(() => {
    var dbRef = firebase.database().ref(`/notifications/${uid}`)

  
    if (
      !recievedFiles.loading &&
      !files.loading &&
      !recieve_invoices.loading &&
      !sent_invoices.loading
    ) {
      dbRef.on(
        "value",
        snapshot => {
          const data = snapshot.val()
          console.log(data,"notification")
          let newNotifications = []
          for (const obj in data) {
            var notification = data[obj]
            notification.id = obj
            if (
              notification.type === "Receive File" &&
              // !recievedFiles.loading &&
              recievedFiles.files.filter(
                item => item._id === notification.receiveFileId
              ).length === 0
            ) {
              continue
            } else if (
              notification.type === "View File" &&
              files.files.filter(item => item._id === notification.sendFileId)
                .length === 0
            ) {
              continue
            } else if (
              notification.type === "Receive Invoice" &&
              // !recieve_invoices.loading &&
              recieve_invoices.recieve_invoices.filter(
                item => item.orderId === notification.orderId
              ).length === 0
            ) {
              continue
            } else if (
              notification.type === "View Invoice" &&
              sent_invoices.sent_invoices.filter(
                item => item.orderId === notification.orderId
              ).length === 0
            ) {
              continue
            } else {
              // newNotifications.push(notification)
              newNotifications.push(notification)
            }
          }
          setNewNotifications(newNotifications)
        },
        err => console.log(err)
      )
      setLoading(false)
    }
  }, [
    recievedFiles.loading,
    recieve_invoices.loading,
    sent_invoices.loading,
    files.loading,
  ])

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon "
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="bx bx-bell bx-tada" />
          <span className="badge bg-danger rounded-pill">
            {newNotifications
              ?.filter(item => !isUndefined(item))
              .reduce(
                (count, notification) => !notification.seen && count + 1,
                0
              ) || 0}
          </span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0"> {props.t("Notifications")} </h6>
              </Col>
              
            </Row>
          </div>

          <SimpleBar style={{ height: "230px" }}>
            {loading ? (
              "Loading..."
            ) : newNotifications.length > 0 ? (
              newNotifications
                .filter(item => !isUndefined(item))
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((notification, index) => {
                  return (
                    <Link
                      to={{
                        pathname: notification.type?.includes("Receive File")
                          ? "/file-received"
                          : notification.type?.includes("Receive Invoice")
                          ? "/recieved"
                          : "",
                        state: notification.type?.includes("Receive File")
                          ? notification.receiveFileId
                          : notification.type?.includes("Receive Invoice")
                          ? notification.orderId
                          : null,
                      }}
                      onClick={() => {
                        firebase
                          .database()
                          .ref(
                            `/notifications/${
                              JSON.parse(localStorage.getItem("authUser")).uid
                            }`
                          )
                          .child(notification.id)
                          .update({
                            seen: true,
                          })
                        if (notification.type?.includes("Receive")) {
                          setMenu(!menu)
                        }
                      }}
                      className={`text-reset notification-item ${
                        notification.seen ? "seen" : ""
                      }`}
                      key={index}
                    >
                      <div className="media">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title bg-primary rounded-circle font-size-16">
                            <i
                              className={
                                notification.type?.includes("File")
                                  ? "fas fa-file-image"
                                  : "fas fa-file-invoice"
                              }
                              style={{ fontSize: 14 }}
                            />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">
                            {props.t(notification.type)}
                          </h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">
                              {props.t(
                                notification.type?.includes("Receive")
                                  ? notification.type?.includes("File")
                                    ? `${notification.senderName.firstName} ${
                                        notification.senderName.lastName
                                      } sent ${
                                        notification.fileName.length > 20
                                          ? notification.fileName
                                              .split(".")[0]
                                              .substr(0, 10) +
                                            "..." +
                                            notification.fileName
                                              .split(".")[0]
                                              .substr(-8) +
                                            "." +
                                            notification.fileName.split(".")[1]
                                          : notification.fileName
                                      }`
                                    : `${
                                        notification.senderName
                                      } sent Invoice No. ${
                                        notification.orderId.includes("_")
                                          ? notification.orderId.split("_")[1]
                                          : notification.orderId
                                      }`
                                  : notification.type?.includes("File")
                                  ? `${
                                      notification.receiverName.firstName ||
                                      notification.receiverId
                                    } ${
                                      notification.receiverName.lastName
                                    } viewed ${
                                      notification.fileName.length > 20
                                        ? notification.fileName
                                            .split(".")[0]
                                            .substr(0, 10) +
                                          "..." +
                                          notification.fileName
                                            .split(".")[0]
                                            .substr(-8) +
                                          "." +
                                          notification.fileName.split(".")[1]
                                        : notification.fileName
                                    }`
                                  : `${
                                      notification.receiverName.firstName ||
                                      notification.receiverId
                                    } ${
                                      notification.receiverName.lastName
                                    } viewed Invoice No. ${
                                      notification.orderId.includes("_")
                                        ? notification.orderId.split("_")[1]
                                        : notification.orderId
                                    }`
                              )}
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              {props.t(
                                moment(notification.timestamp).fromNow()
                              )}{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })
            ) : (
              <p style={{ textAlign: "center", marginTop: "90px" }}>
                No Notifications
              </p>
            )}
          </SimpleBar>
        
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

export default withTranslation()(NotificationDropdown)

NotificationDropdown.propTypes = {
  t: PropTypes.any,
}
