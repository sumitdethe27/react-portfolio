import React from "react";
import "./qualification.css";
import { HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My Journey</span>

            <div className="qualification__container container">
                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Unthinkable Solutions</h3>
                                <span className="qualification__subtitle">Jr. Associate Software Engineer</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Oct 2023-present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Cloud Engineer</h3>
                                <span className="qualification__subtitle">Freelance - Remote</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Feb 2023-May 2023
                                </div>
                            </div>
                        </div>



                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">DevOps Engineer</h3>
                                <span className="qualification__subtitle">Freelance - Remote</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Jan 2022-Mar 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
