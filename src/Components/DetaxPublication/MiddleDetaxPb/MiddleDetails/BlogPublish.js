import React from 'react'
import { useSelector } from 'react-redux';



function BlogPublish() {

  let arrayValue = [];
  const { publications } = useSelector(state => state.detaux);

  const chunkSize = 8;
  for (let i = 0; i < publications.people?.length; i += chunkSize) {
    const chunk = publications.people?.slice(i, i + chunkSize);
    arrayValue.push(chunk);
  }

  return (
    <div className="my-5">
      <h1 className="my-5 text-center">56 blogs published from 23 people.</h1>

      <div>
        {arrayValue?.map((t, tdx) => (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(8,1fr)",
            width: "100%",
            rowGap: "20px",
            placeItems: "center"
          }}>
            {t.map((i, idx) => (
              <div
                className={
                  "col-1 " +
                  (idx + 1 == 2
                    ? "mt-1 "
                    : idx + 1 == 2
                      ? "mt-2 "
                      : idx + 1 == 3
                        ? "mt-2  "
                        : idx + 1 == 4
                          ? "mt-3 "
                          : idx + 1 == 5
                            ? "mt-3 "
                            : idx + 1 == 6
                              ? "mt-3 "
                              : idx + 1 == 7
                                ? "mt-2 "
                                : idx + 1 == 8
                                  ? "mt-1 "
                                  : "")
                }
              >
                <img src={i.profilePicture?.link} className="avatar" alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPublish;
