import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-3 p-5">
                        <img
                            src="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-19/s150x150/97566921_2973768799380412_5562195854791540736_n.jpg?tp=1&amp;_nc_ht=scontent-dfw5-2.cdninstagram.com&amp;_nc_ohc=9tzq_P07DRYAX_RrUup&amp;oh=0998f21181c37b9fba0572f163ec66c6&amp;oe=60736467"
                            class="rounded-circle"
                        />
                    </div>
                    <div class="col-9 pt-5">
                        <div>
                            <h1>USERNAME PLACEHOLDER</h1>
                        </div>
                        <div class="d-flex">
                            <div class="pr-5">
                                <strong>153</strong> posts
                            </div>
                            <div class="pr-5">
                                <strong>23k</strong> followers
                            </div>
                            <div class="pr-5">
                                <strong>212</strong> following
                            </div>
                        </div>
                        <div class="pt-4 font-weight-bold">
                            freeCodeCamp.org
                        </div>
                        <div>
                            We're a global community of millions of people
                            learning to code together. We're an open source,
                            donor-supported, 501(c)(3) nonprofit.
                        </div>
                        <div>
                            <a href="#">www.freecodecamp.org</a>
                        </div>
                    </div>
                </div>

                <div class="row pt-5">
                    <div class="col-4">
                        <img
                            src="https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.129.1034.1034a/s640x640/159113925_224405209391401_5023734514820725236_n.jpg?tp=1&_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=101&_nc_ohc=ATuBXzXbXIwAX-nKTcL&oh=35d22c28e3855cc9f92e71f70c0feaf7&oe=60758DD9"
                            class="w-100"
                        />
                    </div>
                    <div class="col-4">
                        <img
                            src="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/157712100_495573674790980_9025787082838431165_n.jpg?tp=1&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_ohc=USqWyjiP-acAX9lxBk2&oh=1346a875205dd083773b421b62084b1c&oe=6073C09F"
                            class="w-100"
                        />
                    </div>
                    <div class="col-4">
                        <img
                            src="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.128.1034.1034a/s640x640/155930641_449057102970296_7520574586017729636_n.jpg?tp=1&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_ohc=w5BVTYRm-ZcAX-3aNwY&oh=93eac034dc94672bbef84b0acfc93d87&oe=60767F0B"
                            class="w-100"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

ReactDOM.render(<Profile />, document.getElementById("profile"));
