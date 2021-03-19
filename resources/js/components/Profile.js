import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
    const [username] = useState(GUSERNAME);

    return (
        <>
            <div className="container">
                <div className="profile">
                    <div className="profile-pic-container">
                        <img
                            src="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-19/s150x150/97566921_2973768799380412_5562195854791540736_n.jpg?tp=1&amp;_nc_ht=scontent-dfw5-2.cdninstagram.com&amp;_nc_ohc=9tzq_P07DRYAX_RrUup&amp;oh=0998f21181c37b9fba0572f163ec66c6&amp;oe=60736467"
                            className="profile-pic"
                        />
                    </div>
                    <div className="profile-information">
                        <div>
                            <h1>Welcome {username}!</h1>
                        </div>
                        <div className="d-flex">
                            <div className="pr-5">
                                <strong>6</strong> posts
                            </div>
                            <div className="pr-5">
                                <strong>2,465</strong> followers
                            </div>
                            <div className="pr-5">
                                <strong>212</strong> following
                            </div>
                        </div>
                        <div className="pt-4 font-weight-bold">
                            Music Taste Summary
                        </div>
                        <div>
                            I love a little bit of everything! From Prince to
                            Biggie Smalls to Nightwish and Metallica -- I rarely
                            meet a band I don't like! Always looking for new
                            music to check out.
                        </div>
                        <div>
                            <a href="#">could put a link to something here</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <img
                            src="https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.129.1034.1034a/s640x640/159113925_224405209391401_5023734514820725236_n.jpg?tp=1&_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=101&_nc_ohc=ATuBXzXbXIwAX-nKTcL&oh=35d22c28e3855cc9f92e71f70c0feaf7&oe=60758DD9"
                            className="w-100"
                        />
                    </div>
                    <div className="col-4">
                        <img
                            src="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/157712100_495573674790980_9025787082838431165_n.jpg?tp=1&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_ohc=USqWyjiP-acAX9lxBk2&oh=1346a875205dd083773b421b62084b1c&oe=6073C09F"
                            className="w-100"
                        />
                    </div>
                    <div className="col-4">
                        <img
                            src="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.128.1034.1034a/s640x640/155930641_449057102970296_7520574586017729636_n.jpg?tp=1&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_ohc=w5BVTYRm-ZcAX-3aNwY&oh=93eac034dc94672bbef84b0acfc93d87&oe=60767F0B"
                            className="w-100"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

ReactDOM.render(<Profile />, document.getElementById("profile"));
