import React from 'react';
import Style from '../../Style/course.module.scss';

const CourseSection10 = () => {
    let style = { width: "95%" }
    return (
        <div className="my-5">
            <h4 className="mb-1">Best In-Class Mentors</h4>
            <p className="mb-4">Learn about the latest design methods and strategies followed in the industry from experienced storytellers.</p>

            <div className="my-4">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className={`${Style.box_border_two}`}>
                            <div className={Style.box_border_one_img}>
                                <img src={require('../../Assets/Images/mentors/image1.svg').default} alt="" style={style} />
                            </div>
                            <div className='my-3 d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className="m-0">Sheneille Patil</h6>
                                    <span style={{ fontSize: 10, margin: 0 }}>Co-founder at Ooloi Labs</span>
                                </div>
                                <span>
                                    <i className="fab fa-linkedin" style={{ fontSize: 20, color: "#0077B7" }}></i>
                                </span>
                            </div>
                            <p className='font_12'>Being a trained UX & Product Designer with a knack for front-end development, Sheneille is an expert in grid systems and visual design and will give you developer hand-off tips.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className={`${Style.box_border_two}`}>
                            <div className={Style.box_border_one_img}>
                                <img src={require('../../Assets/Images/mentors/image2.svg').default} alt="" style={style} />
                            </div>
                            <div className='my-3 d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className="m-0">Niloptal Nayan</h6>
                                    <span style={{ fontSize: 10, margin: 0 }}>Founder at my CampusCart</span>
                                </div>
                                <span>
                                    <i className="fab fa-linkedin" style={{ fontSize: 20, color: "#0077B7" }}></i>
                                </span>
                            </div>
                            <p className='font_12'>An enterpreneur and an IIT Graduate, Niloptal loves teaching Design using real world examples and maintains high energy during his sessions. </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className={`${Style.box_border_two}`}>
                            <div className={Style.box_border_one_img}>
                                <img src={require('../../Assets/Images/mentors/image1.svg').default} alt="" style={style} />
                            </div>
                            <div className='my-3 d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className="m-0">Sheneille Patil</h6>
                                    <span style={{ fontSize: 10, margin: 0 }}>Co-founder at Ooloi Labs</span>
                                </div>
                                <span>
                                    <i className="fab fa-linkedin" style={{ fontSize: 20, color: "#0077B7" }}></i>
                                </span>
                            </div>
                            <p className='font_12'>Being a trained UX & Product Designer with a knack for front-end development, Sheneille is an expert in grid systems and visual design and will give you developer hand-off tips.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSection10;