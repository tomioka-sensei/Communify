import React from "react";
import './Container.css'
import './Utils.css'
import { Link } from "react-router-dom";


const Profile = () => {


    return (
        <>
            <div className="width98 Cover flexi">
                <div className="Container flexi">
                    <img src="./disable2.png" id="Profile_pic" alt="Profile Picture" />
                    <div className="cluster">
                        <div className="onesection flexi">
                            <span id="span1"><b>Rebekah Taussig</b></span>
                            <div className="logos flexi">
                                <button className="Create flexi_center">
                                    <span id="span2"><Link to="/Upload">
       Create
      </Link></span>
                                    <img src="./Add.png" id="Create" alt="" />
                                </button>
                                <button className="Edit flexi_center">
                                    <span id="span3">Edit Profile</span>
                                    <img src="./Edit.png" id="Edit" alt="" />
                                </button>
                            </div>
                        </div>
                        <h3 id="firsth3">@rebekah007..</h3>
                        <p id="firstp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, doloremque sequi iste maxime consectetur animi similique obcaecati harum ullam! Deserunt?</p>
                        <div className="secondsection flexi">
                            <span ><b>100</b> followers</span>
                            <span ><b>100</b> Following</span>
                            <span ><b>100</b> Hacks</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr id="hr1" />
            <div className="width98 Imgcover">
                <div className="selection flexi">
                    <span><b id="first">Media Hacks</b></span>
                    <span><b id="second">Quote Hacks</b></span>
                </div>
                <img src="./Upload_Images.png" id="Upload" alt="Upload imgages" />
            </div>

        </>
    )
}

export default Profile