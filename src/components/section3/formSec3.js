import React from 'react';

const FormSec3 = () => {

    return (
        <React.Fragment>
            <div className="form" style={{ height: "385px", width: "330px", transform: "translate(27px)" }}>
                <div className="form_container" style={{ paddingLeft: "25px", transform: "translate(-4px)" }}>
                    <div className="header_form">
                        <h4 id="elm_22_headline">CREATE A FREE ACCOUNT</h4>
                    </div>
                    <div className="form1" >

                        <form action="">
                            <div className="fiel_container">
                                <label for="">Name*</label>
                                <div className="input">
                                    <input type="text" name="name" placeholder="Enter your name" />
                                </div>
                            </div>
                            <div className="fiel_container">
                                <label for="">Email*</label>
                                <div className="input">
                                    <input type="text" name="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className="fiel_container">
                                <label for="">Phone*</label>

                                <div className="input">
                                    <input type="text" name="phone" placeholder="Enter your phone" />
                                </div>
                            </div>
                            <div className="fiel_container">
                                <button  >GET STARTED</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default FormSec3