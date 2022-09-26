import React from 'react';

const Sms = () => {
    return (
        <div class="content-wrapper">
            <section id="sms" class="sms section_gap">
                <div class="container">
                    <div class="section_title pt-5">
                        <h4 className='mt-4'><i class="pr-2 fa-solid fa-envelope"></i>Send SMS</h4>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-10">
                            <form action="#" class="sms_wrap mb-5">
                                <div class="row row-cols-1">
                                    <div class="col">
                                        <div class="type_sms">
                                            <div class="form-group">
                                                <div class="type_sms_top">
                                                    <label >Message</label>
                                                    <button type="button" class="sms_template btn" data-toggle="modal" data-target="#messageTemplate">
                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                        <span>SMS Template</span>
                                                    </button>
                                                    {/* <!-- Modal --> */}
                                                    <div class="modal fade" id="messageTemplate" aria-labelledby="smsTemplate" aria-hidden="true">
                                                        <div class="modal-dialog modal-dialog-centered">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title text-center" id="smsTemplate">SMS Template</h5>
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <textarea class="form-control" rows="3" placeholder="Write Message ..."></textarea>
                                                                    <div class="template_btns mt-4 d-flex justify-content-center">
                                                                        <button class="btn primary_btn mr-4">Copy Text</button>
                                                                        <button class="btn primary_btn">Save</button>
                                                                    </div>
                                                                    <div class="template_list mt-4">
                                                                        <ul class="list-group">
                                                                            <li class="list-group-item list-group-item-action">
                                                                                <span class="list_index">1.</span>
                                                                                <span class="list_text">Hello, Aminul</span>
                                                                            </li>
                                                                            <li class="list-group-item list-group-item-action">
                                                                                <span class="list_index">2.</span>
                                                                                <span class="list_text">Good Morning</span>
                                                                            </li>
                                                                            <li class="list-group-item list-group-item-action">
                                                                                <span class="list_index">3.</span>
                                                                                <span class="list_text">Welcome to DIT</span>
                                                                            </li>
                                                                            <li class="list-group-item list-group-item-action">
                                                                                <span class="list_index">4.</span>
                                                                                <span class="list_text">Come Here</span>
                                                                            </li>

                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <textarea class="form-control" rows="2" placeholder="Write Message ..."></textarea>
                                                <span class="limit">(0/0)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="sms_group">
                                            <div class="form-group text-left" data-select2-id="76">
                                                <label >SMS Group</label>
                                                <select class="smsGroupSelect form-control select2bs4 select2-hidden-accessible" multiple="" placeholder="Select SMS Group" style={{ width: "100%" }} data-select2-id="17" tabindex="-1" aria-hidden="true">
                                                    <option></option>
                                                    <option data-select2-id="19">Group 1</option>
                                                    <option data-select2-id="78">Group 2</option>
                                                    <option data-select2-id="79">Group 3</option>
                                                    <option data-select2-id="80">Group 4</option>
                                                    <option data-select2-id="81">Group 5</option>
                                                    <option data-select2-id="82">Group 6</option>
                                                    <option data-select2-id="83">Group 7</option>
                                                </select>
                                                <span class="limit">(0/0)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="contact_input text-left">
                                            <label>Add Individual Contacts</label>
                                            <div class="more_input">
                                                <div class="form-group" data-select2-id="5">
                                                    <input type="number" name="tags" class="form-control" placeholder="Input individual Contacts" />
                                                </div>
                                                <span class="limit">(0/0)</span>
                                                <div class="d-flex justify-content-center">
                                                    <button class="btn primary_btn">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="group_summery  text-left">
                                            <label>Select / Deselect Contacts</label>
                                            <div class="group_list">
                                                <span class="group_item">Aminul</span>
                                                <span class="group_item">Shad</span>
                                                <span class="group_item">Morsalin</span>
                                                <span class="group_item">Rakib</span>
                                                <span class="group_item">Hasan</span>
                                                <span class="group_item">Rabbir</span>
                                                <span class="group_item">Habib</span>
                                                <span class="group_item">Anup</span>
                                                <span class="group_item">Ashad</span>
                                                <span class="group_item">Aminul</span>
                                                <span class="group_item">Shad</span>
                                                <span class="group_item">Morsalin</span>
                                                <span class="group_item">Rakib</span>
                                                <span class="group_item">Hasan</span>
                                                <span class="group_item">Rabbir</span>
                                                <span class="group_item">Rakib</span>
                                                <span class="group_item">Hasan</span>
                                                <span class="group_item">Rabbir</span>

                                            </div>
                                            <span class="limit">(0/0)</span>
                                        </div>
                                    </div>

                                </div>

                                <div class="submit_contact">
                                    <div class="message_btn">
                                        <input type="button" value="Send Message" class="btn primary_btn" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Sms;