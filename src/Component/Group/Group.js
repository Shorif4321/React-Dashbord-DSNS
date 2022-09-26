import React from 'react';

const Group = () => {
    return (
        <div>
            <div class="content-wrapper">
                {/* <!-- Start Group Section --> */}
                <section id="group" class="group phonebook section_gap">
                    <div class="container">
                        <div class="section_title pt-5">
                            <h4 className='mt-4'><i class="pr-2 fa-solid fa-user-group"></i>Group</h4>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-10">
                                <div class="group_wrap phobook_wrap mb-5 mt-3">
                                    <div class="row row-cols-1 justify-content-center text-left">
                                        <div class="col">
                                            <div class="phone_search">
                                                <div class="form-group">
                                                    <label>Add Group</label>
                                                    <div class="add_group">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Group Name" aria-label="Group Name" aria-describedby="basic-addon1" />
                                                        </div>
                                                        <div class="d-flex justify-content-end">
                                                            <button class="btn primary_btn">Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="phone_search">
                                                <div class="form-group">
                                                    <label>Delete Group</label>
                                                    <div class="add_group">
                                                        <div class="input-group">
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
                                                        <div class="d-flex justify-content-end">
                                                            <button class="btn primary_btn danger_btn">Delete</button>
                                                        </div>
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

export default Group;