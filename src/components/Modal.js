import React from "react";
import { ShowcaseTeams } from "./ShowcaseTeams";
import Exit from "../assets/images/modal-exit.svg";
import { Container, Row, Col } from "react-grid-system";
import ImageCarousel from "./ImageCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Modal(props) {
    const idx = props.index;
    const current_team = ShowcaseTeams[idx];

    return (
        <div>
            {props.show && (
                <div className="team-modal">
                    <div className="inner-modal">
                        <Container>
                            <Row className="modal-top">
                                <Col 
                                    xs={12} 
                                    id="modal-exit"
                                >
                                    <img 
                                        src={Exit}
                                        width="30px"
                                        height="30px"
                                        onClick={props.onHide}
                                    />
                                </Col>
                            </Row>
                            <Row className="modal-info">
                                <Col xs={12} md={6} className="left-modal">
                                    <Row align="center">
                                        <Col xs={9}>
                                            <h1 className="mobile-modal">{current_team.team_name}</h1>
                                        </Col>
                                        <Col xs={3}>
                                            <img
                                                src={current_team.icon.default} 
                                                className="mobile-modal"
                                            />
                                        </Col>
                                    </Row>
                                    <img
                                        src={current_team.icon.default} 
                                        className="desktop-modal"
                                    />
                                    <h1 className="desktop-modal">{current_team.team_name}</h1>
                                    <ul>
                                        <li>
                                            <a href={current_team.instagram} target="_blank">INSTAGRAM</a>
                                        </li>
                                        <li>
                                            <a href={current_team.facebook} target="_blank">FACEBOOK</a>
                                        </li>
                                        <li>
                                            <a href={current_team.website} target="_blank">WEBSITE</a>
                                        </li>
                                        <li>
                                            <a href={current_team.yelp} target="_blank">YELP</a>
                                        </li>
                                    </ul>
                                    <p>{current_team.description}</p>
                                    <a href={current_team.case_study_link} target="_blank" id="case-button">
                                        <div id="case-study">
                                            <h3>VIEW CASE STUDY</h3>
                                        </div>
                                    </a>
                                </Col>
                                <Col xs={12} md={6} className="right-modal">
                                    <ImageCarousel index={props.index}>
                                    </ImageCarousel>
                                </Col>
                            </Row>
                            <Row>
                                <div className="line"></div>
                            </Row>
                            <Row>
                                <h2>The Team</h2>
                            </Row>
                            <Row justify="center" className="team">
                                {current_team.team.map(member => {
                                    return (
                                        <Col xs={6} md={2}>
                                            <div className="inner-person">
                                                <img
                                                    src={member.member_image.default}
                                                    className="member-img"
                                                />
                                                <h3>{member.member_name}</h3>
                                                <p>{member.position}</p>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                            <Row>
                                <div className="line"></div>
                            </Row>
                            <Row>
                                <h2>Mentors</h2>
                            </Row>
                            <Row justify="center" className="mentors">
                                {current_team.mentor.map(member => {
                                    return (
                                        <Col xs={6} md={2}>
                                            <div className="inner-person">
                                                <img
                                                    src={member.mentor_image.default}
                                                    className="member-img"
                                                />
                                                <h3>{member.mentor_name}</h3>
                                                <p>{member.position}</p>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                            <Row>
                                <div className="cards-red" id="modal-red"></div>
                            </Row>
                        </Container>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
