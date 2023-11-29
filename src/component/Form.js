 
import "./Main.css";
 


function Main() {
    return (
        <div className="row container-fluid p-0 m-0">
            {/* <div className="row ">
                <div className="col-lg-7 Main">
                    
                </div> */}

            <div className="col-lg-12 col-sm-12 ">
                <div className="Box text-center">
                    <div className=""><h5 className="text-center Enquire">ENQUIRE NOW</h5></div>

                    <div>
                        <input className="inp " type="text" placeholder="Enter Name* "></input><br />

                        <input className="inp" type="text" placeholder="Enter Email Address* "></input><br />

                       
                        <select name="countryCode" id="" class="  mob text-muted ">
                             
                            <option data-countryCode="GB" value="44" class="" selected>+91</option>
                            <option data-countryCode="US" value="1">USA (+1)</option>
                            <optgroup label="Other countries">
                                <option data-countryCode="DZ" value="213">
                                    Alge(+213)
                                </option>
                                <option data-countryCode="AD" value="376">
                                    Andorra (+376)
                                </option>
                                <option data-countryCode="AO" value="244">
                                    Angola (+244)
                                </option>
                                <option data-countryCode="AI" value="1264">
                                    Anguilla (+1264)
                                </option>
                                <option data-countryCode="AG" value="1268">
                                    Antigua &amp; Barbuda (+1268)
                                </option>
                                <option data-countryCode="AR" value="54">
                                    Argentina (+54)
                                </option>
                                <option data-countryCode="AM" value="374">
                                    Armenia (+374)
                                </option>
                                <option data-countryCode="AW" value="297">
                                    Aruba (+297)
                                </option>
                                <option data-countryCode="AU" value="61">
                                    Australia (+61)
                                </option>
                                <option data-countryCode="AT" value="43">
                                    Austria (+43)
                                </option>
                                <option data-countryCode="AZ" value="994">
                                    Azerbaijan (+994)
                                </option>
                                <option data-countryCode="BS" value="1242">
                                    Bahamas (+1242)
                                </option>
                                <option data-countryCode="BH" value="973">
                                    Bahrain (+973)
                                </option>
                                <option data-countryCode="BD" value="880">
                                    Bangladesh (+880)
                                </option>
                                <option data-countryCode="BB" value="1246">
                                    Barbados (+1246)
                                </option>
                                <option data-countryCode="BY" value="375">
                                    Belarus (+375)
                                </option>
                                <option data-countryCode="BE" value="32">
                                    Belgium (+32)
                                </option>
                                <option data-countryCode="BZ" value="501">
                                    Belize (+501)
                                </option>
                                <option data-countryCode="BJ" value="229">
                                    Benin (+229)
                                </option>
                                <option data-countryCode="BM" value="1441">
                                    Bermuda (+1441)
                                </option>
                                <option data-countryCode="BT" value="975">
                                    Bhutan (+975)
                                </option>
                                <option data-countryCode="BO" value="591">
                                    Bolivia (+591)
                                </option>
                                <option data-countryCode="BA" value="387">
                                    Bosnia Herzegovina (+387)
                                </option>
                                <option data-countryCode="BW" value="267">
                                    Botswana (+267)
                                </option>
                                <option data-countryCode="BR" value="55">
                                    Brazil (+55)
                                </option>
                                <option data-countryCode="BN" value="673">
                                    Brunei (+673)
                                </option>
                                <option data-countryCode="BG" value="359">
                                    Bulgaria (+359)
                                </option>
                                <option data-countryCode="BF" value="226">
                                    Burkina Faso (+226)
                                </option>
                                <option data-countryCode="BI" value="257">
                                    Burundi (+257)
                                </option>
                                <option data-countryCode="KH" value="855">
                                    Cambodia (+855)
                                </option>
                                <option data-countryCode="CM" value="237">
                                    Cameroon (+237)
                                </option>
                                <option data-countryCode="CA" value="1">
                                    Canada (+1)
                                </option>
                                <option data-countryCode="CV" value="238">
                                    Cape Verde Islands (+238)
                                </option>
                                <option data-countryCode="KY" value="1345">
                                    Cayman Islands (+1345)
                                </option>
                                <option data-countryCode="CF" value="236">
                                    Central African Republic (+236)
                                </option>
                                <option data-countryCode="CL" value="56">
                                    Chile (+56)
                                </option>
                                <option data-countryCode="CN" value="86">
                                    China (+86)
                                </option>
                                <option data-countryCode="CO" value="57">
                                    Colombia (+57)
                                </option>
                                <option data-countryCode="KM" value="269">
                                    Comoros (+269)
                                </option>
                                <option data-countryCode="CG" value="242">
                                    Congo (+242)
                                </option>
                                <option data-countryCode="CK" value="682">
                                    Cook Islands (+682)
                                </option>
                                <option data-countryCode="CR" value="506">
                                    Costa Rica (+506)
                                </option>
                                <option data-countryCode="HR" value="385">
                                    Croatia (+385)
                                </option>
                                <option data-countryCode="CU" value="53">
                                    Cuba (+53)
                                </option>
                                <option data-countryCode="CY" value="90392">
                                    Cyprus North (+90392)
                                </option>
                                <option data-countryCode="CY" value="357">
                                    Cyprus South (+357)
                                </option>
                                <option data-countryCode="CZ" value="42">
                                    Czech Republic (+42)
                                </option>
                                <option data-countryCode="DK" value="45">
                                    Denmark (+45)
                                </option>
                                <option data-countryCode="DJ" value="253">
                                    Djibouti (+253)
                                </option>
                                <option data-countryCode="DM" value="1809">
                                    Dominica (+1809)
                                </option>
                                <option data-countryCode="DO" value="1809">
                                    Dominican Republic (+1809)
                                </option>
                                <option data-countryCode="EC" value="593">
                                    Ecuador (+593)
                                </option>
                                <option data-countryCode="EG" value="20">
                                    Egypt (+20)
                                </option>
                                <option data-countryCode="SV" value="503">
                                    El Salvador (+503)
                                </option>
                                <option data-countryCode="GQ" value="240">
                                    Equatorial Guinea (+240)
                                </option>
                                <option data-countryCode="ER" value="291">
                                    Eritrea (+291)
                                </option>
                                <option data-countryCode="EE" value="372">
                                    Estonia (+372)
                                </option>
                                <option data-countryCode="ET" value="251">
                                    Ethiopia (+251)
                                </option>

                                {/* <input className="inp" type="text" placeholder="Enter Mobile Number* "></input> */}
                            </optgroup>

                        </select>
                        <input className="mob_no" type="text" placeholder="  Enter Mobile Number* "></input>
                        <input className="inp text-muted" type="text" placeholder="Enter OTP "></input><br />

                        {/* <input className="inpt" type="text" placeholder="Select State* "></input> */}
                        <select class=" inpt text-muted  ">
                            <option value="state">Select State</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antartica">Antarctica</option>
                            <option value="Antigua and Barbuda">
                                Antigua and Barbuda
                            </option>

                        </select>
                        {/* 
                        <input className="inpt" type="text" placeholder="Select City* "></input>   <br /> */}
                        <select class="inpt1 text-muted">
                            <option value="state">Select city</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antartica">Antarctica</option>
                            <option value="Antigua and Barbuda">
                                Antigua and Barbuda
                            </option>

                        </select>
                        <input className="inp" type="text" placeholder="MBA* "></input>   <br />

                        <input className="inp" type="text" placeholder="Select Cource Lead "></input><br />

                        <div className="text pl-3">
                            <span><input className="check text-center" type="checkbox"></input>
                                <small className="agree">I agree to receive information regarding my  submitted application by signing up on MIT-WPU *</small></span><br />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="but">SUBMIT</button>
                            {/* <Button   lable="SUBMIT"/> */}
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        // </div>
    );
}
export default Main;