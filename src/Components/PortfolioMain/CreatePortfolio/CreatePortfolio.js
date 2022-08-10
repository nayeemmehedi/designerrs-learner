import { useState } from "react"
import { Link } from "react-scroll"
import NewPortfolio from "./NewPortfolio"
import UploadPortfolio from "./UploadPortfolio"

function CreatePortfolio() {
  const [active, setActive] = useState("uploadResume")
  const createPortfolioNav = [
    { name: "About You" },
    { name: "Social Media Profile" },
    { name: "Skills and Tools" },
    { name: "Work Experience" },
    { name: "Work Preferences" },
    { name: "Education" },
    { name: "Portfolio" },
  ]
  const [nav, setNav] = useState("About You")
  return (
    <div>
      <div className="row">
        <div className="col-3">
          {active == "createProfile" && (
            <div className="p-3 mt-5 sticky-nav">
              {createPortfolioNav.map((i, idx) => (
                <Link
                  to={i.name}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                  activeClassName="activeTab"
                >
                  <ul
                    key={idx}
                    onClick={() => setNav(i.name)}
                    className="text-secondary p-2 cursor px-2"
                    style={
                      nav === i.name
                        ? {
                            borderLeft: "4px solid red",
                            backgroundColor: "#fff",
                            padding: "10px",
                            color: "red",
                          }
                        : {}
                    }
                  >
                    {i.name}
                  </ul>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="col-7">
          <div>
            <div className="my-5">
              <span
                onClick={() => {
                  setActive("uploadResume")
                }}
                style={
                  active == "uploadResume"
                    ? { borderBottom: "3px solid #cd2026" }
                    : { borderBottom: "3px solid #daf4df" }
                }
                className="cursor px-3 py-2"
              >
                <span className="fs-6">Upload Resume</span>
              </span>{" "}
              <span
                onClick={() => {
                  setActive("createProfile")
                }}
                className="cursor px-3 py-2"
                style={
                  active == "createProfile"
                    ? { borderBottom: "3px solid #cd2026" }
                    : { borderBottom: "3px solid #daf4df" }
                }
              >
                <span className="fs-6">Create Profile</span>
              </span>
            </div>
          </div>
          {active == "uploadResume" ? (
            <UploadPortfolio active={active} setActive={setActive} />
          ) : (
            <NewPortfolio />
          )}
        </div>
        {/* <div className="col-1"></div> */}
      </div>
    </div>
  )
}

export default CreatePortfolio
