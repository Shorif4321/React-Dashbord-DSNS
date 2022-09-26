import React from 'react';

const Package = () => {
    return (
        <div>
            <div class="content-wrapper">
                {/* <!-- Start Package Section --> */}
                <section id="package" class="package report section_gap">
                    <div class="container">
                        <div class="section_title pt-5">
                            <h4 className='pt-5'><i class="pr-2 fa-solid fa-file-invoice-dollar"></i>Packages</h4>
                        </div>
                        <div class="row">
                            <div class="col-12 col-lg-10">
                                <div class="report_wrap mb-5">
                                    <div class="report_table shadow-sm">
                                        <h5 class="table_title">Tariff</h5>
                                        <table class="table  table-hover ">
                                            <tbody>
                                                <tr class="border-bottom">
                                                    <td>Apps & Masking Price</td>
                                                    <td><del class="pr-2">19000 /-</del> 5500 /-</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="report_table table-responsive shadow-sm">
                                        {/* <!-- <h5 class="table_title">Masking Package</h5> --> */}
                                        <table class="table table-hover">
                                            <thead class="main_title">
                                                <tr>
                                                    <th colspan="4" scope="col" class="p-0">
                                                        <h5 class="table_title">Masking Package</h5>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <thead class="sub_title">
                                                <tr>
                                                    <th scope="col">Package</th>
                                                    <th scope="col">SMS</th>
                                                    <th scope="col">Rate</th>
                                                    <th scope="col">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>1,000</td>
                                                    <td>1.00/-</td>
                                                    <td>1,000/-</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>5,000</td>
                                                    <td>0.90/-</td>
                                                    <td>4,500</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>10,000</td>
                                                    <td>0.80/-</td>
                                                    <td>8,000</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>25,000</td>
                                                    <td>0.70/-</td>
                                                    <td>17,500</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>50,000</td>
                                                    <td>0.60/-</td>
                                                    <td>30,000</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>1,00,000</td>
                                                    <td>0.50/-</td>
                                                    <td>50,000</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>2,50,000</td>
                                                    <td>0.48/-</td>
                                                    <td>1,20,000</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>5,00,000</td>
                                                    <td>0.45/-</td>
                                                    <td>2,25,000</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>10,00,000</td>
                                                    <td>0.43/-</td>
                                                    <td>4,30,000</td>
                                                </tr>
                                                <tr class="border-bottom">
                                                    <td>10</td>
                                                    <td>25,00,000</td>
                                                    <td>0.41/-</td>
                                                    <td>10,25,000</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <span class="text-warning text-bold">** Validity 1 Year **</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Package;