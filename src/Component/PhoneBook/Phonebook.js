import React from 'react';

const Phonebook = () => {
    return (
        <div>
            <div class="content-wrapper">
                <section id="phonebook" class="phonebook section_gap">
                    <div class="container">
                        <div class="section_title pt-5">
                            <h4 className='mt-4'><i class="pr-2 fa-solid fa-address-book"></i>Phone Book</h4>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-10">
                                <div class="phobook_wrap text-left mb-5">
                                    <div class="row row-cols-1">
                                        <div class="col">
                                            <div class="sms_group">
                                                <div class="form-group" data-select2-id="76">
                                                    <label className='text-left'>Select Group</label>
                                                    <select class="phoneGroupSelect form-control select2bs4 select2-hidden-accessible" placeholder="Select Group" data-select2-id="17" tabindex="-1" aria-hidden="true">
                                                        <option></option>
                                                        <option data-select2-id="19">Group 1</option>
                                                        <option data-select2-id="78">Group 2</option>
                                                        <option data-select2-id="79">Group 3</option>
                                                        <option data-select2-id="80">Group 4</option>
                                                        <option data-select2-id="81">Group 5</option>
                                                        <option data-select2-id="82">Group 6</option>
                                                        <option data-select2-id="83">Group 7</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="phone_search">
                                                <div class="form-group">
                                                    <label className=''>Search Contacts</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="Search Contacts" aria-describedby="basic-addon1" />
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1">
                                                                <i class="fa fa-search"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row justify-content-center">
                                        <div class="col">
                                            <div class="contact_list">
                                                <div class="add_more mb-2">
                                                    <button type="button" class="btn add_icon" data-toggle="modal" data-target="#addmore">
                                                        <i class="fa-solid fa-user-plus"></i>
                                                        Add More
                                                    </button>
                                                    {/* <!-- Modal --> */}
                                                    <div class="modal fade" id="addmore" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div class="modal-dialog modal-dialog-centered">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">Group : Desktop IT</h5>
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <div class="more_contact">
                                                                        <div class="form-group contact_input">
                                                                            <input type="text" class="form-control" placeholder="Name" />
                                                                            <input type="number" class="form-control" placeholder="Number" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn primary_btn">Add</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row row-cols-1">
                                                    <div class="col contact_item">
                                                        <div class="card shadow-sm">
                                                            <div class="icon user_icon">
                                                                <i class="fa fa-user"></i>
                                                            </div>
                                                            <div class="contact">
                                                                <span class="contact_name">Aminul</span>
                                                                <span class="contact_number">01743724256</span>
                                                            </div>
                                                            <div class="icon delete_icon">
                                                                <i class="fa fa-minus-circle"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col contact_item">
                                                        <div class="card shadow-sm">
                                                            <div class="icon user_icon">
                                                                <i class="fa fa-user"></i>
                                                            </div>
                                                            <div class="contact">
                                                                <span class="contact_name">Shad</span>
                                                                <span class="contact_number">01743724256</span>
                                                            </div>
                                                            <div class="icon delete_icon">
                                                                <i class="fa fa-minus-circle"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col contact_item">
                                                        <div class="card shadow-sm">
                                                            <div class="icon user_icon">
                                                                <i class="fa fa-user"></i>
                                                            </div>
                                                            <div class="contact">
                                                                <span class="contact_name">Morsalin</span>
                                                                <span class="contact_number">01743724256</span>
                                                            </div>
                                                            <div class="icon delete_icon">
                                                                <i class="fa fa-minus-circle"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col contact_item">
                                                        <div class="card shadow-sm">
                                                            <div class="icon user_icon">
                                                                <i class="fa fa-user"></i>
                                                            </div>
                                                            <div class="contact">
                                                                <span class="contact_name">Rakib</span>
                                                                <span class="contact_number">01743724256</span>
                                                            </div>
                                                            <div class="icon delete_icon">
                                                                <i class="fa fa-minus-circle"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col contact_item">
                                                        <div class="card shadow-sm">
                                                            <div class="icon user_icon">
                                                                <i class="fa fa-user"></i>
                                                            </div>
                                                            <div class="contact">
                                                                <span class="contact_name">Hasan</span>
                                                                <span class="contact_number">01743724256</span>
                                                            </div>
                                                            <div class="icon delete_icon">
                                                                <i class="fa fa-minus-circle"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col contact_item">
                                                        <div class="card shadow-sm">
                                                            <div class="icon user_icon">
                                                                <i class="fa fa-user"></i>
                                                            </div>
                                                            <div class="contact">
                                                                <span class="contact_name">Rabbir</span>
                                                                <span class="contact_number">01743724256</span>
                                                            </div>
                                                            <div class="icon delete_icon">
                                                                <i class="fa fa-minus-circle"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="download_btns">
                                                    <div class="excel">
                                                        <button class="btn primary_btn">
                                                            <i class="fa-solid fa-download pr-1"></i>
                                                            <span>Download Contacts</span>
                                                            <i class="fa-solid fa-file-excel pl-1"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-3 justify-content-center">
                                        <div class="col">
                                            <div class="contact_import_wrap">
                                                <label class="mb-0">Import Contacts</label>
                                                <div class="contact_import">

                                                    <div class="file_upload">
                                                        <div class="custom-file contact_input">
                                                            <input type="file" class="custom-file-input" id="exampleInputFile" />
                                                            <label class="custom-file-label" for="exampleInputFile">Select File</label>
                                                        </div>
                                                        <button class="btn primary_btn">
                                                            <i class="fa-solid fa-upload"></i>
                                                            <span>Upload</span>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        </div>
    );
};

export default Phonebook;