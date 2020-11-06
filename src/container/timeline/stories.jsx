import React, { useState, useEffect } from "react";
import './Stories.css';

const Stories = props => {
    const [state, setState] = useState({
        loading: false,
        rows: []
    });
    const { loading, rows } = state;

    useEffect(() => {
        // handleRequest()
    }, []);


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div class="pd-b-20 mg-t-20">
                                <div class="pos-rel asp-ratio r-16-9">
                                    <img src="/images/200_34761593587074.jpg"
                                        style={{ width: "100%" }}
                                        alt="2021 Bentley Bentayga (facelift) SUV unveiled: Check what's new"
                                        title="2021 Bentley Bentayga (facelift) SUV unveiled: Check what's new"
                                        className="br-rd-10 dp-bl wd-full" />
                                </div>
                            </div>
                            <div className="t-qnt-article-section">
                                <h1 className="t-qnt-heading">2021 Bentley Bentayga (facelift) SUV unveiled: Check what's new</h1>
                                <p className="t-qnt-bold t-qnt-sfz">Glance</p>
                                <p className="t-qnt-pt">
                                    British luxury carmaker Bentley has finally unveiled the facelifted version
                                    of its flagship SUV, the Bentayga. The mid-cycle update comes with a revamped
                                    design, updated interiors, and a host of tech features.
                            </p>
                                <p class="t-qnt-pt">
                                    The new Bentayga is the first product to be introduced as part of the company's
                                    'Beyond100' business strategy that focuses on sustainable luxury mobility.
                            </p>
                                <p class="t-qnt-pt">Here's our roundup.</p>
                                <div className="row">
                                    <h1 className="t-qnt-tl">2021 Bentley Bentayga: At a glance</h1>

                                    <p class="t-qnt-pt">
                                        The 2021 Bentley Bentayga
                                        (facelift) retains the profile of the outgoing model but sports an updated matrix grille and
                                a clamshell-shaped bonnet. </p>
                                    <p class="t-qnt-pt">
                                        On the sides, it is flanked by roof rails, blacked-out B-pillars,
                                 body-colored ORVMs, new side vents, and 22-inch alloy wheels. </p>
                                    <p class="t-qnt-pt">
                                        The SUV also gets matrix-LED headlights with cut-crystal design, 3D ellit-qnt-ptical tail-lamps with animated LEDs,
                                 heated wipers, and a larger rear spoiler.</p>
                                </div>
                                <div className="row">
                                    <h1 className="t-qnt-tl">Power and performance</h1>
                                    <p class="t-qnt-pt">
                                        The 2021 Bentley Bentayga is powered by a 4.0-liter, twin-turbocharged V8 petrol engine which generates 550hp of power. The motor comes mated to an eight-speed gearbox and an all-wheel-drive system.
                                        A new variant with V6 petrol-electric plug-in hybrid powertrain will also be available. </p>
                                </div>
                                <div className="row">
                                    <h1 className="t-qnt-tl">A peek inside the cabin</h1>
                                    <p class="t-qnt-pt">
                                        Inside the cabin, the Bentayga offers a premium dashboard, ventilated seats, sunroof, multiple airbags, and a multifunctional power steering wheel.</p>
                                    <p class="t-qnt-pt">
                                        At the center, there is a new 10.9-inch touchscreen infotainment panel with Apple CarPlay and Android Auto support. For rear passengers, a 5.0-inch removable touchscreen tablet is available.</p>
                                    <p class="t-qnt-pt">Other additions include air ionizers, wireless smartphone charging support, and an embedded SIM card.</p>
                                </div>
                                <div className="row">
                                    <h1 className="t-qnt-tl">What about the pricing?</h1>
                                    <p class="t-qnt-pt">
                                        The Bentley Bentayga (facelift) will go on sale in Europe in the coming months. In India,
                                        this version is expected to arrive sometime next year and it should carry a significant premium over the outgoing model which starts at Rs. 3.78 crore.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div class="pd-b-20 mg-t-20">
                                <div class="pos-rel asp-ratio r-16-9">
                                    <img src="/images/197_14491602599468.jpg"
                                        style={{ width: "100%" }}
                                        alt="2021 Bentley Bentayga (facelift) SUV unveiled: Check what's new"
                                        title="2021 Bentley Bentayga (facelift) SUV unveiled: Check what's new"
                                        className="br-rd-10 dp-bl wd-full" />
                                </div>
                            </div>
                            <div className="t-qnt-article-section">
                                <h1 className="t-qnt-heading">
                                    IPL: Maxwell highlights 'frequent changes' for batting failure
                                </h1>
                                <p className="t-qnt-bold t-qnt-sfz">13 Oct 2020</p>
                                <p className="t-qnt-pt">
                                    Australian batsman Glenn Maxwell hasn't been able to make his mark in the ongoing IPL, so far.
                                </p>
                                <p class="t-qnt-pt">
                                    Speaking to PTI, Maxwell explained the reason of his inconsistency this season.
                                </p>
                                <p class="t-qnt-pt">
                                    He believes the franchise hasn't given him a clear picture regarding his role in the batting order.
                                </p>
                                <p class="t-qnt-pt">
                                    The 31-year-old also said he does well for the national side due to lesser changes.
                                </p>
                                <div className="row">
                                    <h1 className="t-qnt-tl">My role in IPL changes frequently: Maxwell</h1>
                                    <p class="t-qnt-pt">
                                        Speaking on his inconsistent run, Maxwell lamented the change of role by the KXIP management.
                                    </p>
                                    <p class="t-qnt-pt">
                                        "My role in IPL changes probably for most games. In IPL, a lot of teams change their sides a lot.
                                        In the Australian set-up we have the same eleven for most of the games, we all know our roles really well," said Maxwell.
                                    </p>
                                </div>
                                <div className="row">
                                    <h1 className="t-qnt-tl">'The Australian team has a clearer role'</h1>
                                    <p class="t-qnt-pt">
                                        "I probably would not compare IPL and Australia career. The way I have played international cricket, it has been more of a clearer role. I know exactly how the guys will bat around me in the games," added Maxwell.
                                    </p>
                                </div>
                                <div className="row">
                                    <h1 className="t-qnt-tl">Maxwell's IPL form has dipped of late</h1>
                                    <p class="t-qnt-pt">
                                        Maxwell's IPL performance has plunged significantly in recent times.
                                        </p>
                                    <p class="t-qnt-pt">
                                        Since 2015, he has managed to score 861 runs from 55 matches.
                                    </p>
                                    <p class="t-qnt-pt">
                                        Interestingly, his last 50+ score came in 2016, when he tallied a 42-ball 68 against Kolkata Knight Riders.
                                    </p>
                                    <p class="t-qnt-pt">
                                        Also, Maxwell has aggregated 58 runs from six games at 14.50 this year.
                                    </p>
                                    <p class="t-qnt-pt">
                                        His scores read as - 1, 5, 13*, 11, 11*, 7, 10*.
                                    </p>
                                </div>
                                <div className="row">
                                    <h1 className="t-qnt-tl">KXIP will aim to bounce back</h1>
                                    <p class="t-qnt-pt">
                                        The Kings XI Punjab have managed to secure only one victory in the IPL 2020, so far.
                                    </p>
                                    <p class="t-qnt-pt">
                                        Interestingly, their only win came against Royal Challengers Bangalore, against whom they will play their next game.
                                    </p>
                                    <p class="t-qnt-pt">
                                        Notably, they lost their previous game to Kolkata Knight Riders by two runs from a winning position.
                                    </p>
                                    <p class="t-qnt-pt">
                                        It remains to be seen if he could bounce back against RCB.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Stories;
