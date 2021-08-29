import React from "react";
import { BiUserCircle, BiBulb, BiBattery } from "react-icons/bi";
import './MainResume.css'

import { FaUserGraduate, FaAward } from "react-icons/fa";
import { HiBriefcase, HiOutlineDesktopComputer, HiAcademicCap } from "react-icons/hi";

export function MainBodyPart() {

    return (<div>
        <div>
            <div id="left-div">
                <div class="logo">
                    <BiUserCircle class="profile-logo"></BiUserCircle>
                </div>
                <div class="text">
                    <b class='text-size'>PROFILE</b>
                    <hr class="hr-line" noshade></hr>
                    <p><i>"HI, my name is Gopala krishna ym, im software engineer.I like expanding my knowledge and to explore opportunities for my professional growth".</i></p>
                </div>
            </div>
            <div id="right-div">
                <div class="logo">
                    <HiBriefcase class="profile-logo"></HiBriefcase>
                </div>
                <div class="text1">
                    <b class='text-size'>WORK EXPERIENCE</b>
                    <hr class="hr-line-right" noshade></hr>
                    <b>Perfios software pvt ltd</b>
                    <br /><br />Worked in Perfios software pvt ltd as software developer for two years.
                    <br /><br /><b>A6 technologies</b>
                    <br />Interned at A6 technologies as a web designer.
                </div>
            </div>
        </div>

        <div>
            <div id="left-div">
                <div class="logo">
                    <HiOutlineDesktopComputer class="profile-logo"></HiOutlineDesktopComputer>
                </div>
                <div class="text">
                    <b class='text-size'>PRO SKILLS</b>
                    <hr class="hr-line" noshade></hr>
                    <ul>
                        <li>Java,C,SpringBoot,Python</li>
                        <li>React JS</li>
                        <li>MySQL</li>
                        <li>Elastic Search and Kibana</li>
                        <li>JspreadSheet,Param Query</li>
                    </ul>
                </div>
            </div>
            <div id="right-div">
                <div class="logo">
                    <FaUserGraduate class="profile-logo"></FaUserGraduate>
                </div>
                <div class="text1">
                    <b class='text-size'>EDUCATION</b>
                    <hr class="hr-line-right" noshade></hr>
                    <div class="text1">
                        <div>
                            <br />
                            <b>Dayananda Sagar College of Engineering</b><br />
                    Completed my B.E in computer science during 2016-20.<br /><br />

                            <b>Sri chaitanya pu college</b><br />
                    Completed my PUC during 2014-2016.<br /><br />

                            <b>S.E.S eng med schoool</b><br />
                           Completed my schooling 10th in this school.<br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div id="left-div">
                <div class="logo">
                    <BiBulb class="profile-logo"></BiBulb>
                </div>
                <div class="text">
                    <b class='text-size'>SKILLS</b>
                    <hr class="hr-line" noshade></hr>
                    <ul>
                        <li>Clay modeling</li>
                        <br />
                        <li>Upcycling.</li>
                        <br />
                    </ul>
                </div>
            </div>
            <div id="right-div">
                <div class="logo">
                    <FaAward class="profile-logo"></FaAward>
                </div>
                <div class="text1">
                    <b class='text-size'>AWARDS</b>
                    <hr class="hr-line-right" noshade></hr>
                    <ul>
                        <li>Certified with Elite and Silver Tag in programming in java by NPTEL</li>
                        <br />
                        <li>Certified in Special Mention of Mini Project Fair at DSCE.</li>
                        <br /><li>Certified in web designing by web development club of DSI.</li>
                        <br /><li>Awarded with second place in hackathon conducted by socio-tech innovation lab.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div id="footer">
                <p className="foo"><b>gopala krishna/</b>software developer</p>
            </div>
        </div>
    </div>);
}
