import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BlogPublish from "./MiddleDetails/BlogPublish";
import FormMiddle from "./MiddleDetails/FormMiddle";
import DetauxSmallCard from '../../../Components/Detox/DetauxSmallCard';
import DetauxUxCard from '../../../Components/Detox/DetauxUxCard';

import Style from "../../../Style/detaux.module.scss";

import DetauxSmallCardImgOne from "../../../Assets/Images/Detox/small-card-img1.png";
import DetauxSmallCardImgTwo from "../../../Assets/Images/Detox/small-card-img2.png";
import UxUiImage from "../../../Assets/Images/Detox/uxui.svg";
import { getPublications } from '../../../Store/Detaux/actions';


function MiddleDetaxPb() {
  const dispatch = useDispatch();
  const { publications } = useSelector(state => state.detaux);
  useEffect(() => {
    dispatch(getPublications());
  }, [])
  console.log(publications)
  return (
    <div>
      <div className="text-center" style={{ height: "40vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>
          <h1>Detaux Publication</h1>
          <p>
            Carefully curated articles to help you deepen and expand your
            knowledge.
          </p>
        </div>
      </div>

      <div style={{
        width: "90%",
        margin: "auto"
      }}>
        {/* <DetauxUxCard image={UxUiImage} /> */}
        {publications?.publications && publications.publications?.map((el, index) => (
          <DetauxUxCard image={UxUiImage} publication={el} />
        ))}
      </div>
      <div style={{
        width: "90%",
        margin: "30px auto"
      }}>
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "64px",
          margin: "auto"
        }}>
          <DetauxSmallCard img={DetauxSmallCardImgOne} />
          <DetauxSmallCard img={DetauxSmallCardImgTwo} />
        </div>
      </div>
      <div style={{
        width: "90%",
        margin: "30px auto"
      }}>
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "64px",
          margin: "auto"
        }}>
          <DetauxSmallCard img={DetauxSmallCardImgOne} />
          <DetauxSmallCard img={DetauxSmallCardImgTwo} />
        </div>
      </div>
      <div style={{
        width: "90%",
        margin: "30px auto"
      }}>
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "64px",
          margin: "auto"
        }}>
          <DetauxSmallCard img={DetauxSmallCardImgOne} />
          <DetauxSmallCard img={DetauxSmallCardImgTwo} />
        </div>
      </div>

      <div style={{
        width: "80%",
        margin: "auto"
      }}>
        <div className="my-5" style={{ width: "100%" }}>
          <BlogPublish></BlogPublish>
        </div>


      </div>
      <div style={{ width: "70%", margin: "auto" }}>
        <div className="my-4">
          <FormMiddle></FormMiddle>
        </div>
      </div>
    </div>
  );
}

export default MiddleDetaxPb;
