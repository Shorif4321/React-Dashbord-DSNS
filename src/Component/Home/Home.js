import React from 'react';

const Home = () => {
    return (
        <div className='class="hold-transition sidebar-mini"'>
            <div className="wrapper">
                {/* <!-- Start Sidebar All Modals --> */}
                <div class="sidebar_modals">
                    {/* <!-- Profile Modal --> */}
                    <div class="modal profile fade" id="profile" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header flex-column">
                                    <div class="d-flex justify-content-between w-100 pb-2">
                                        <h5 class="modal-title" id="exampleModalLabel">Update Your Profile</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <small class="text-warning">Please enter valid info to create your account.</small>
                                    <small class="text-danger">Required Field *</small>
                                </div>

                                <div class="modal-body">
                                    <div class="more_contact">
                                        <form class="form-group contact_input text-left">
                                            <label for="">First Name<span class="text-danger pl-1">*</span></label>
                                            <input type="text" class="form-control" placeholder="First Name" required />
                                            <label for="">Last Name</label>
                                            <input type="text" class="form-control" placeholder="Last Name" required />
                                            <label for="">Residential Address<span class="text-danger pl-1">*</span></label>
                                            <input type="text" class="form-control" placeholder="Residential Address" required />
                                            <label for="">Office Name</label>
                                            <input type="text" class="form-control" placeholder="Office Name" />
                                            <label for="">Office Address</label>
                                            <input type="text" class="form-control" placeholder="Office Address" />
                                            <label for="">Email Address<span class="text-danger pl-1">*</span></label>
                                            <input type="text" class="form-control" placeholder="Email Address" required />
                                            <label for="">Number<span class="text-danger pl-1">*</span></label>
                                            <input type="number" class="form-control" placeholder="Number" required />
                                            <label for="">Date fof Birth<span class="text-danger pl-1">*</span></label>
                                            <input type="date" class="form-control" placeholder="Date fof Birth" required />
                                            <label for="">NID Number<span class="text-danger pl-1">*</span></label>
                                            <input type="number" class="form-control" placeholder="NID Number" required />

                                            <div class="d-flex align-items-center justify-content-center mt-3">
                                                <button type="button" class="btn primary_btn">Update Profile</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Documents Modal --> */}
                    <div class="modal documents fade" id="documents" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header flex-column">
                                    <div class="title mb-4 w-100">
                                        <div class="section_title text-center">
                                            <h4 class="mb-0"><i class="pr-2 fa-solid fa-file"></i>Documents</h4>
                                        </div>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="doc_instruction">
                                        <h6 class="instru_title">First download the two documents below.</h6>
                                        <div class="inst_btns">
                                            <button class="btn primary_btn mr-2">
                                                <i class="pr-1 fa-solid fa-download"></i>
                                                <span class="">Download</span> 1
                                            </button>
                                            <span class="pr-1">& </span>
                                            <button class="btn primary_btn">
                                                <i class="pr-1 fa-solid fa-download"></i>
                                                <span class="">Download</span> 2
                                            </button>
                                        </div>
                                        <h6 class="mb-0 instru_title">Now, print the downloaded documents on your organization
                                            pad, then upload them with signature and seal, also upload all necessary documents.
                                        </h6>
                                        <small class="text-danger mt-3">Required Field *</small>
                                    </div>
                                </div>
                                <div class="modal-body">
                                    <div class="row row-cols-1">
                                        <div class="col">
                                            <div class="doc_item d-flex align-items-center justify-content-between">
                                                <div class="doc_title">
                                                    <span class="doc_index">1.1</span>
                                                    <span class="doc_name">Authorization Letter GP P1 <span
                                                        class="text-danger">*</span></span>
                                                </div>
                                                <div class="doc_upload">
                                                    <div class="upload-btn-wrapper">
                                                        <button class="btn primary_btn">
                                                            <i class="pr-1 fa-solid fa-upload"></i>
                                                            <span class="d-none d-sm-inline-block">Upload</span>
                                                        </button>
                                                        <input type="file" name="myfile" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="doc_item d-flex align-items-center justify-content-between">
                                                <div class="doc_title">
                                                    <span class="doc_index">1.2</span>
                                                    <span class="doc_name">Authorization Letter GP P2 <span
                                                        class="text-danger">*</span></span>
                                                </div>
                                                <div class="doc_upload">
                                                    <div class="upload-btn-wrapper">
                                                        <button class="btn primary_btn">
                                                            <i class="pr-1 fa-solid fa-upload"></i>
                                                            <span class="d-none d-sm-inline-block">Upload</span>
                                                        </button>
                                                        <input type="file" name="myfile" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="doc_item d-flex align-items-center justify-content-between">
                                                <div class="doc_title">
                                                    <span class="doc_index">2</span>
                                                    <span class="doc_name">Authorization Letter Others <span
                                                        class="text-danger">*</span></span>
                                                </div>
                                                <div class="doc_upload">
                                                    <div class="upload-btn-wrapper">
                                                        <button class="btn primary_btn">
                                                            <i class="pr-1 fa-solid fa-upload"></i>
                                                            <span class="d-none d-sm-inline-block">Upload</span>
                                                        </button>
                                                        <input type="file" name="myfile" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="doc_item d-flex align-items-center justify-content-between">
                                                <div class="doc_title">
                                                    <span class="doc_index">3</span>
                                                    <span class="doc_name">Trade Licence</span>
                                                </div>
                                                <div class="doc_upload">
                                                    <div class="upload-btn-wrapper">
                                                        <button class="btn primary_btn">
                                                            <i class="pr-1 fa-solid fa-upload"></i>
                                                            <span class="d-none d-sm-inline-block">Upload</span>
                                                        </button>
                                                        <input type="file" name="myfile" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="doc_item d-flex align-items-center justify-content-between">
                                                <div class="doc_title">
                                                    <span class="doc_index">4</span>
                                                    <span class="doc_name">BIN/VAT Certificate</span>
                                                </div>
                                                <div class="doc_upload">
                                                    <div class="upload-btn-wrapper">
                                                        <button class="btn primary_btn">
                                                            <i class="pr-1 fa-solid fa-upload"></i>
                                                            <span class="d-none d-sm-inline-block">Upload</span>
                                                        </button>
                                                        <input type="file" name="myfile" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="doc_item d-flex align-items-center justify-content-between">
                                                <div class="doc_title">
                                                    <span class="doc_index">5</span>
                                                    <span class="doc_name">TIN Certificate</span>
                                                </div>
                                                <div class="doc_upload">
                                                    <div class="upload-btn-wrapper">
                                                        <button class="btn primary_btn">
                                                            <i class="pr-1 fa-solid fa-upload"></i>
                                                            <span class="d-none d-sm-inline-block">Upload</span>
                                                        </button>
                                                        <input type="file" name="myfile" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="doc_item d-flex align-items-center justify-content-between">
                                                <div class="doc_title">
                                                    <span class="doc_index">6</span>
                                                    <span class="doc_name">NID <span class="text-danger">*</span></span>
                                                </div>
                                                <div class="doc_upload">
                                                    <div class="upload-btn-wrapper">
                                                        <button class="btn primary_btn">
                                                            <i class="pr-1 fa-solid fa-upload"></i>
                                                            <span class="d-none d-sm-inline-block">Upload</span>
                                                        </button>
                                                        <input type="file" name="myfile" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="doc_item d-flex align-items-center justify-content-between">
                                                <div class="doc_title">
                                                    <span class="doc_index">7</span>
                                                    <span class="doc_name">Photo (selfi) <span
                                                        class="text-danger">*</span></span>
                                                </div>
                                                <div class="doc_upload">
                                                    <div class="upload-btn-wrapper">
                                                        <button class="btn primary_btn">
                                                            <i class="pr-1 fa-solid fa-upload"></i>
                                                            <span class="d-none d-sm-inline-block">Upload</span>
                                                        </button>
                                                        <input type="file" name="myfile" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <!-- Show Uploaded File --> */}
                                    <div class="row mt-3 mt-lg-5 row-cols-4">
                                        <div class="col">
                                            <div class="file_item">
                                                <img src="assets/images/documents/1.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="file_item">
                                                <img src="assets/images/documents/1_1.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="file_item">
                                                <img src="assets/images/documents/2.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="file_item">
                                                <img src="assets/images/documents/3.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="file_item">
                                                <img src="assets/images/documents/4.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="file_item">
                                                <img src="assets/images/documents/5.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="file_item">
                                                <img src="assets/images/documents/6.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="file_item">
                                                <img src="assets/images/documents/7.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-center mt-4">
                                        <button type="button" class="btn btn-success px-4">Submit</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Home;