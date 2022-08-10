import React, { useEffect, useState } from "react";
import { Input, Label } from "reactstrap";
import discountIcon from "../../../Assets/Images/discount.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { useParams } from "react-router-dom";
import axiosApi from "../../../Helper/api";
import { useDispatch } from "react-redux";
import Loading from "../../Common/Loading";

const CouponCode = ({ submitValue, cuponToggle, courses }) => {
  const price = courses?.basePrice;
  const { id } = useParams();
  const dispatch = useDispatch();
  const [codeData, setCodeData] = useState([]);
  const [code, setCode] = useState("");

  const [load,  setLoad] = useState(true);
  useEffect(() => {
    setLoad(true)
    axiosApi
      .get(`/learners/course/${id}/promotions`)
      .then((res) => {
        setCodeData(res?.data?.promotions);
        setLoad(false)
      })
      .catch((err) => {
        setLoad(false)
      });
  }, []);
  const apply = (data) => {
    console.log(data);
    if (data?.promotionType == "sale") {
      const deductedPrice = price - data?.discount;
      console.log(price, deductedPrice);
      localStorage.setItem(
        "sale",
        JSON.stringify({ price: price, netPrice: deductedPrice, ...data })
      );
      dispatch({
        type: "COUPON_CODE",
        payload: { price: price, netPrice: deductedPrice, ...data },
      });
      cuponToggle();
    } else {
      const deductedPrice = (price * data?.discount) / 100;
      localStorage.setItem(
        "sale",
        JSON.stringify({
          price: price,
          netPrice: price - deductedPrice,
          ...data,
        })
      );
      dispatch({
        type: "COUPON_CODE",
        payload: { price: price, netPrice: price - deductedPrice, ...data },
      });
      cuponToggle();
    }
  };
  const applyCode = () => {
    console.log(code, codeData);
    const data = codeData.find((i) => i?.couponCode === code);
    if (data) {
      if (data?.promotionType == "sale") {
        const deductedPrice = price - data?.discount;
        console.log(price, deductedPrice);
        localStorage.setItem(
          "sale",
          JSON.stringify({ price: price, netPrice: deductedPrice, ...data })
        );
        dispatch({
          type: "COUPON_CODE",
          payload: { price: price, netPrice: deductedPrice, ...data },
        });
        cuponToggle();
      } else {
        const deductedPrice = (price * data?.discount) / 100;
        localStorage.setItem(
          "sale",
          JSON.stringify({
            price: price,
            netPrice: price - deductedPrice,
            ...data,
          })
        );
        dispatch({
          type: "COUPON_CODE",
          payload: { price: price, netPrice: price - deductedPrice, ...data },
        });
        cuponToggle();
      }
    }
  };
  if(load) return <Loading />;
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h4>Apply Coupon Code</h4>{" "}
        <h3 className="cursor" onClick={() => cuponToggle()}>
          X
        </h3>
      </div>
      <hr></hr>

      <div className="col-md-6">
        <Label>
          <small>Coupon Code</small>
        </Label>
        <Input onChange={(e) => setCode(e.target.value)} />
      </div>
      <div className="bgSecondary mt-4" style={{height: '50vh', overflow: "scroll"}}>
        {codeData.map((i) => (
          <>
            <div className="d-flex justify-content-between align-items-center p-2">
              <img
                src={discountIcon}
                alt="percent"
                style={{ height: "50px", width: "50px" }}
              />
              <div>
                <small>
                  {i?.name}{" "}
                  <span className="fw-bold">Code: {i?.couponCode}</span>
                </small>
              </div>
              <div>
                <span className="txtColor cursor" onClick={() => apply(i)}>
                  Apply <BsArrowRightShort size="20" />
                </span>
              </div>
            </div>
            <hr></hr>
          </>
        ))}
      </div>
      <button className="btn btn-main2 form-control my-2" onClick={applyCode}>
        Apply
      </button>
    </div>
  );
};

export default CouponCode;
