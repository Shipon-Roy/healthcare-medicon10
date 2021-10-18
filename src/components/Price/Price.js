import React from 'react';

const Price = () => {
    return (
        <div className="container my-5">
            <h3 className="text-center">Monthly Yearly</h3>
            <div class="row row-cols-1 row-cols-md-2 g-4 my-5">
            <div class="col">
                <div class="card shadow">
                <div class="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                        <h5 class="card-title">Diagnostics</h5>
                        <p class="card-text">
                        <ul>
                            <li>Ultrasound diagnostics</li>
                            <li>Laboratory services</li>
                            <li>X-ray diagnostics</li>
                            <li>Functional diagnostics</li>
                            <li>Endoscopic diagnostics</li>
                        </ul>
                    </p>
                        </div>
                        <div className="col-lg-6">
                        <h3 className="mb-5">$50</h3>
                        <button className="btn btn-primary mt-5">Booking</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow">
                <div class="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                        <h5 class="card-title">Pediatrics</h5>
                        <p class="card-text">
                            <ul>
                                <li>Household allergens</li>
                                <li>Fungal allergens</li>
                                <li>Pollen allergens</li>
                                <li>Food allergens</li>
                                <li>Allergens drugs</li>
                            </ul>
                        </p>
                        </div>
                        <div className="col-lg-6">
                        <h3 className="mb-5">$45</h3>
                        <button className="btn btn-primary mt-5">Booking</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow">
                <div class="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                        <h5 class="card-title">Dental</h5>
                        <p class="card-text">
                            <ul>
                                <li>Dental whitening</li>
                                <li>Laser dentistry</li>
                                <li>Tooth implantation</li>
                                <li>Modern techniques</li>
                                <li>Computer scans</li>
                            </ul>
                        </p>
                        </div>
                        <div className="col-lg-6">
                        <h3>$100</h3>
                        <button className="btn btn-primary mt-5">Booking</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow">
                <div class="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                        <h5 class="card-title">Cardiology</h5>
                            <p class="card-text">
                                <ul>
                                    <li>Functional diagnostics</li>
                                    <li>Endoscopic diagnostics</li>
                                    <li>Pollen allergens</li>
                                    <li>Food allergens</li>
                                    <li>Allergens drugs</li>
                                </ul>
                            </p>
                        </div>
                        <div className="col-lg-6">
                        <h3 className="mb-5">$210</h3>
                        <button className="btn btn-primary mt-5">Booking</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* bottom card */}

            <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card h-100">
                <div className="bg-info text-center p-3">
                        <h5 class="card-title">Diagnostics</h5>
                        <p>feature laboratory</p>
                </div>
                <div class="card-body">
                    <h3 className="text-center">$50</h3>
                    <ul>
                        <li>Ultrasound diagnostics</li>
                        <li>Laboratory services</li>
                        <li>X-ray diagnostics</li>
                        <li>Functional diagnostics</li>
                        <li>Endoscopic diagnostics</li>
                    </ul>
                </div>
                <div className="w-75 m-3">
                    <button className="btn btn-primary">Booking</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <div className="bg-info text-center p-3">
                            <h5 class="card-title">Pediatrics</h5>
                            <p>for kids of 2years</p>
                    </div>
                <div class="card-body">
                <h3 className="text-center">$45</h3>
                    <ul>
                        <li>Household allergens</li>
                        <li>Fungal allergens</li>
                        <li>Pollen allergens</li>
                        <li>Food allergens</li>
                        <li>Allergens drugs</li>
                    </ul>
                </div>
                <div className="w-75 m-3">
                    <button className="btn btn-primary">Booking</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <div className="bg-info text-center p-3">
                            <h5 class="card-title">Dental</h5>
                            <p>our dental services</p>
                    </div>
                <div class="card-body">
                <h3 className="text-center">$100</h3>
                    <ul>
                        <li>Dental whitening</li>
                        <li>Laser dentistry</li>
                        <li>Tooth implantation</li>
                        <li>Modern techniques</li>
                        <li>Computer scans</li>
                    </ul>
                </div>
                <div className="w-75 m-3">
                    <button className="btn btn-primary">Booking</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <div className="bg-info text-center p-3">
                            <h5 class="card-title">Cardiology</h5>
                            <p>for mans and womans</p>
                    </div>
                <div class="card-body">
                <h3 className="text-center">$210</h3>
                    <ul>
                        <li>Functional diagnostics</li>
                        <li>Endoscopic diagnostics</li>
                        <li>Pollen allergens</li>
                        <li>Food allergens</li>
                        <li>Allergens drugs</li>
                    </ul>
                </div>
                <div className="w-75 m-3">
                    <button className="btn btn-primary">Booking</button>
                </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Price;