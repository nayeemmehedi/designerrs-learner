import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Layouts from "./Layouts";
import NavBar from "./Layouts/Navbar";
import { PrivateRoute } from "./Routes/middleware/AuthMiddleware";
import { errorRoute, protectedRoutes, publicRoutes } from "./Routes/Routes";
import "../src/Style/css/main.css";
import Amplify, { Auth } from "aws-amplify";
import { Prompt } from "react-router";
import { BrowserTabsEvent } from "browser-tabs-event";
import axiosApi from "./Helper/api";
import { getSiteInfo } from "./Store/pages/actions";
import Loading from "./Components/Common/Loading";
import Alert from "./Components/Common/Alert";

export const logout = () => {
  localStorage.clear();
  window.location = "/login";
};

const uid = localStorage.getItem("uid");
const refreshToken = localStorage.getItem("refreshToken");
export const loadToken = () => {
  if (uid && refreshToken) {
    Auth.currentSession()
      .then((data) => {
        console.log(data);

        localStorage.setItem("accessToken", data.accessToken.jwtToken);
        localStorage.setItem("refreshToken", data.refreshToken.token);
      })
      .catch((err) => console.log(err));
  }
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadToken();
    dispatch(getSiteInfo());
  }, []);

  // //Use Effort
  // // first time load app
  const handleOnFirstTimeLoadApp = (tabId, isFirstTimeLoadApp) => {
    let date = Date.now();
    const timrDif = localStorage.getItem("timrDif");
    const timrDifDate = localStorage.getItem("timrDifDate");
    console.log(isFirstTimeLoadApp, { time: timrDif, date: timrDifDate });
    if (timrDif && refreshToken) {
      // localStorage.setItem("timrDif", diff);
      axiosApi
        .patch(`/learner/effort`, { time: timrDif, date: timrDifDate })
        .then((res) => {
          console.log(res);
          // localStorage.removeItem("timrDif");
          localStorage.setItem("saving time", JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err);
          localStorage.setItem("err", JSON.stringify(err));
        });
    }
    if (isFirstTimeLoadApp) {
      localStorage.setItem("startTime", date);
    }
  };

  // // handle on unmount tab
  const handleOnUnMountTab = async (tabId) => {
    let date = Date.now();
    let ISONdate = new Date().toISOString();
    const firstDate = localStorage.getItem("startTime");
    const diff = date - firstDate;
    localStorage.setItem("timrDif", diff);
    localStorage.setItem("timrDifDate", ISONdate);
  };

  //   useEffect(() => {
  //     window.addEventListener('beforeunload', alertUser)
  //     window.addEventListener('unload', handleTabClosing)
  //     return () => {
  //         window.removeEventListener('beforeunload', alertUser)
  //         window.removeEventListener('unload', handleTabClosing)
  //     }
  // })

  // const handleTabClosing = () => {
  //     // removePlayerFromGame()
  // }

  console.log("role", localStorage.getItem("role"));
  const { loading } = useSelector((state) => state.pages);
  if (loading) return <Loading />;
  return (
    <React.Fragment>
      <BrowserTabsEvent
        handleOnFirstTimeLoadApp={handleOnFirstTimeLoadApp}
        // handleOnFirstTimeLoadTab={handleOnFirstTimeLoadTab}
        handleOnUnMountTab={handleOnUnMountTab}
      />
       <Alert />
      <Router>
        {/* <Prompt message="Are you sure you want to leave?" /> */}
        <NavBar />
        <Switch>
          {publicRoutes.map((route, idx) => (
            <Route
              exact
              layout={Layouts}
              path={route.path}
              component={route.component}
              key={idx}
            />
          ))}
          ;
          {protectedRoutes.map((route, idx) => (
            <PrivateRoute
              isAuthProtected
              exact
              layout={Layouts}
              path={route.path}
              component={route.component}
              key={idx}
            />
          ))}
          ;
          {errorRoute.map((route, idx) => (
            <Route
              exact
              layout={Layouts}
              path={route.path}
              component={route.component}
              key={idx}
            />
          ))}
          ;
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
