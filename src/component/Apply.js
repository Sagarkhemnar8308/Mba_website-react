import "./Main.css"

export function Apply() {
    return (
        <div className="container-fluid">
            <div className="Apply shadow-lg bg-body rounded-5 d-lg-block d-sm-none">
            <div className="row  ">
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <p className="Date">Last Date to <br/>Apply</p>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <p className=""><b className="two">28th</b><b className="feb">February</b></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <p className="Date">Course <br />Duration</p>
                            </div>

                            <div className="col-lg-6 col-sm-12">
                                <p><b className="two">02</b><b className="feb">Years Full Time</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Date2() {
    return (
        <div>
            <div className='Box2 d-lg-none d-sm-block'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='flex'>
                            <div className="pt-5">
                                <i className="fa-regular fa-clock fs-2"></i>
                                <h3><b className="course">Course<br /> Duration</b></h3>
                            </div>
                            <div className="vl2 mt-4">
                            </div>
                            <div className="yr2">
                                <span className="Two">2</span>
                                <span className="Year">Years<br />Full Time</span>

                            </div>
                        </div>
                        <div className="border_hr"></div>
                    </div>
                    {/ ----------------- /}
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <div className='flex'>
                            <div className="pt-5">
                                <i className="fa-regular fa-calendar  fs-2"></i>
                                <h3><b className="course">Last Date<br /> to Apply</b></h3>
                            </div>
                            <div className="vl2 mt-4">
                            </div>
                            <div className="yr2">
                                <span className="Two">28th</span><br />
                                <span className="Year">February</span>
                            </div>
                        </div>
                        <div className="border_hr"></div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                    </div>
                </div>
            </div>
        </div>
    );
}



