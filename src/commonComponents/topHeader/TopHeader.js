import React from 'react'
import logo from "../../assets/images/logo/logo-full.png"
function TopHeader() {
    return (
        <div className='position-sticky top-0 ' style={{ zIndex: "99" }}>
            {/* Nav header start */}
            <div className="nav-header">
                <a href="index.html" className="brand-logo">
                    <img src={logo} alt="logo is missing" width={150} />
                </a>
                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
            </div>


            {/* Nav header end */}
            {/* Chat box start */}
            <div className="chatbox">
                <div className="chatbox-close" />
                <div className="custom-tab-1">
                    <h4 className="heading ps-3 pt-2">Messages</h4>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#notes">Notes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#alerts">Alerts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab" href="#chat">Chat</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade active show" id="chat">
                            <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
                                <div className="card-header chat-list-header text-center">
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect fill="#000000" x={4} y={11} width={16} height={2} rx={1} /><rect fill="#000000" opacity={1.0} transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x={4} y={11} width={16} height={2} rx={1} /></g></svg></a>
                                    <div>
                                        <h6 className="mb-1">Chat List</h6>
                                        <p className="mb-0">Show All</p>
                                    </div>
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
                                </div>
                                <div className="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
                                    <ul className="contacts">
                                        <li className="name-first-letter">A</li>
                                        <li className="active dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Archie Parker</span>
                                                    <p>Kalid is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon offline" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Alfie Mason</span>
                                                    <p>Taherah left 7 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon" />
                                                </div>
                                                <div className="user_info">
                                                    <span>AharlieKane</span>
                                                    <p>Sami is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon offline" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Athan Jacoby</span>
                                                    <p>Nargis left 30 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">B</li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon offline" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Bashid Samim</span>
                                                    <p>Rashid left 50 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dz- -user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Breddie Ronan</span>
                                                    <p>Kalid is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon offline" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Ceorge Carson</span>
                                                    <p>Taherah left 7 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">D</li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Darry Parker</span>
                                                    <p>Sami is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon offline" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Denry Hunter</span>
                                                    <p>Nargis left 30 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">J</li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon offline" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Jack Ronan</span>
                                                    <p>Rashid left 50 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Jacob Tucker</span>
                                                    <p>Kalid is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon offline" />
                                                </div>
                                                <div className="user_info">
                                                    <span>James Logan</span>
                                                    <p>Taherah left 7 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Joshua Weston</span>
                                                    <p>Sami is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">O</li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon offline" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Oliver Acker</span>
                                                    <p>Nargis left 30 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dz-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                                                    <span className="online_icon offline" />
                                                </div>
                                                <div className="user_info">
                                                    <span>Oscar Weston</span>
                                                    <p>Rashid left 50 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card chat dz-chat-history-box d-none">
                                <div className="card-header chat-list-header text-center">
                                    <a href="javascript:void(0);" className="dz-chat-history-back">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><polygon points="0 0 24 0 24 24 0 24" /><rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) " x={14} y={7} width={2} height={10} rx={1} /><path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) " /></g></svg>
                                    </a>
                                    <div>
                                        <h6 className="mb-1">Chat with Khelesh</h6>
                                        <p className="mb-0 text-success">Online</p>
                                    </div>
                                    <div className="dropdown">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li className="dropdown-item"><i className="fa fa-user-circle text-primary me-2" /> View profile</li>
                                            <li className="dropdown-item"><i className="fa fa-users text-primary me-2" /> Add to btn-close friends</li>
                                            <li className="dropdown-item"><i className="fa fa-plus text-primary me-2" /> Add to group</li>
                                            <li className="dropdown-item"><i className="fa fa-ban text-primary me-2" /> Block</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body msg_card_body dz-scroll" id="DZ_W_Contacts_Body3">
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                        <div className="msg_cotainer">
                                            Hi, how are you samim?
                                            <span className="msg_time">8:40 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            Hi Khalid i am good tnx how about you?
                                            <span className="msg_time_send">8:55 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                        <div className="msg_cotainer">
                                            I am good too, thank you for your chat template
                                            <span className="msg_time">9:00 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            You are welcome
                                            <span className="msg_time_send">9:05 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                        <div className="msg_cotainer">
                                            I am looking for your next templates
                                            <span className="msg_time">9:07 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            Ok, thank you have a good day
                                            <span className="msg_time_send">9:10 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                        <div className="msg_cotainer">
                                            Bye, see you
                                            <span className="msg_time">9:12 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                        <div className="msg_cotainer">
                                            Hi, how are you samim?
                                            <span className="msg_time">8:40 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            Hi Khalid i am good tnx how about you?
                                            <span className="msg_time_send">8:55 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                        <div className="msg_cotainer">
                                            I am good too, thank you for your chat template
                                            <span className="msg_time">9:00 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            You are welcome
                                            <span className="msg_time_send">9:05 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                        <div className="msg_cotainer">
                                            I am looking for your next templates
                                            <span className="msg_time">9:07 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            Ok, thank you have a good day
                                            <span className="msg_time_send">9:10 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                                        </div>
                                        <div className="msg_cotainer">
                                            Bye, see you
                                            <span className="msg_time">9:12 AM, Today</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer type_msg">
                                    <div className="input-group">
                                        <textarea className="form-control" placeholder="Type your message..." defaultValue={""} />
                                        <div className="input-group-append">
                                            <button type="button" className="btn btn-primary"><i className="fa fa-location-arrow" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="alerts">
                            <div className="card mb-sm-3 mb-md-0 contacts_card">
                                <div className="card-header chat-list-header text-center">
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
                                    <div>
                                        <h6 className="mb-1">Notications</h6>
                                        <p className="mb-0">Show All</p>
                                    </div>
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity={1} /><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" /></g></svg></a>
                                </div>
                                <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body1">
                                    <ul className="contacts">
                                        <li className="name-first-letter">SEVER STATUS</li>
                                        <li className="active">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont primary">KK</div>
                                                <div className="user_info">
                                                    <span>David Nester Birthday</span>
                                                    <p className="text-primary">Today</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">SOCIAL</li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont success">RU</div>
                                                <div className="user_info">
                                                    <span>Perfection Simplified</span>
                                                    <p>Jame Smith commented on your status</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">SEVER STATUS</li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont primary">AU</div>
                                                <div className="user_info">
                                                    <span>AharlieKane</span>
                                                    <p>Sami is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont info">MO</div>
                                                <div className="user_info">
                                                    <span>Athan Jacoby</span>
                                                    <p>Nargis left 30 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer" />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="notes">
                            <div className="card mb-sm-3 mb-md-0 note_card">
                                <div className="card-header chat-list-header text-center">
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect fill="#000000" x={4} y={11} width={16} height={2} rx={1} /><rect fill="#000000" opacity={1.0} transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x={4} y={11} width={16} height={2} rx={1} /></g></svg></a>
                                    <div>
                                        <h6 className="mb-1">Notes</h6>
                                        <p className="mb-0">Add New Nots</p>
                                    </div>
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity={1} /><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" /></g></svg></a>
                                </div>
                                <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body2">
                                    <ul className="contacts">
                                        <li className="active">
                                            <div className="d-flex bd-highlight">
                                                <div className="user_info">
                                                    <span>New order placed..</span>
                                                    <p>10 Aug 2020</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                                                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="user_info">
                                                    <span>Youtube, a video-sharing website..</span>
                                                    <p>10 Aug 2020</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                                                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="user_info">
                                                    <span>john just buy your product..</span>
                                                    <p>10 Aug 2020</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                                                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="user_info">
                                                    <span>Athan Jacoby</span>
                                                    <p>10 Aug 2020</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                                                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat box End */}
            {/* Header start */}
            <div className="header">
                <div className="header-content">
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left">
                                <div className="input-group search-area">
                                    <span className="input-group-text"><a href="javascript:void(0)">
                                        <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8.78605" cy="8.78605" r="8.23951" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14.5168 14.9447L17.7471 18.1667" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a></span>
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </div>
                            <ul className="navbar-nav header-right">
                                <li className="nav-item dropdown notification_dropdown">
                                    <a className="nav-link " href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.8067 7.62358L20.1842 6.54349C19.6577 5.62957 18.4907 5.31429 17.5755 5.83869V5.83869C17.1399 6.09531 16.6201 6.16812 16.1307 6.04106C15.6413 5.91399 15.2226 5.59749 14.9668 5.16134C14.8023 4.88412 14.7139 4.56836 14.7105 4.24601V4.24601C14.7254 3.72919 14.5304 3.22837 14.17 2.85764C13.8096 2.48691 13.3145 2.27783 12.7975 2.27805H11.5435C11.037 2.27804 10.5513 2.47988 10.194 2.83891C9.83669 3.19795 9.63717 3.68456 9.63961 4.19109V4.19109C9.6246 5.23689 8.77248 6.07678 7.72657 6.07667C7.40421 6.07332 7.08846 5.98491 6.81123 5.82038V5.82038C5.89606 5.29598 4.72911 5.61126 4.20254 6.52519L3.53435 7.62358C3.00841 8.53636 3.3194 9.70258 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2056 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2346C4.41265 17.6798 4.8266 18.0083 5.31619 18.1474C5.80578 18.2866 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9489 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70286 21.3264 8.54346 20.8067 7.63274V7.63274V7.62358Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12.1751" cy="11.889" r="2.63616" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <div id="DZ_W_TimeLine02" className="widget-timeline dz-scroll style-1 p-3 height370">
                                            <ul className="timeline">
                                                <li>
                                                    <div className="timeline-badge primary" />
                                                    <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>10 minutes ago</span>
                                                        <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className="timeline-badge info">
                                                    </div>
                                                    <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>20 minutes ago</span>
                                                        <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                                                        <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className="timeline-badge danger">
                                                    </div>
                                                    <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>30 minutes ago</span>
                                                        <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className="timeline-badge success">
                                                    </div>
                                                    <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>15 minutes ago</span>
                                                        <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className="timeline-badge warning">
                                                    </div>
                                                    <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>20 minutes ago</span>
                                                        <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className="timeline-badge dark">
                                                    </div>
                                                    <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>20 minutes ago</span>
                                                        <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown notification_dropdown">
                                    <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3" style={{ height: 380 }}>
                                            <ul className="timeline">
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2">
                                                            <img alt="image" width={50} src="images/avatar/1.jpg" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-info">
                                                            KG
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Resport created successfully</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-success">
                                                            <i className="fa fa-home" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2">
                                                            <img alt="image" width={50} src="images/avatar/1.jpg" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-danger">
                                                            KG
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Resport created successfully</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-primary">
                                                            <i className="fa fa-home" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2">
                                                            <img alt="image" width={50} src="images/avatar/1.jpg" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-info">
                                                            KG
                                                        </div>
                                                        {<div className="media-body">
                                                            <h6 className="mb-1">Resport created successfully</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>}
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-success">
                                                            <i className="fa fa-home" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2">
                                                            <img alt="image" width={50} src="images/avatar/1.jpg" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-danger">
                                                            KG
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Resport created successfully</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-primary">
                                                            <i className="fa fa-home" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <a className="all-notification" href="javascript:void(0);">See all notifications <i className="ti-arrow-end" /></a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown notification_dropdown">
                                    <a className="nav-link bell-link" href="javascript:void(0);">
                                        <svg width={20} height={22} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.9026 6.85114L12.4593 10.4642C11.6198 11.1302 10.4387 11.1302 9.59922 10.4642L5.11844 6.85114" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item align-items-center header-border"><a href="page-login.html" className="btn btn-primary btn-sm">Logout</a></li>
                                <li className="nav-item ps-3">
                                    <div className="dropdown header-profile2">
                                        <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="header-info2 d-flex align-items-center">
                                                <div className="header-media">
                                                    <img src="images/tab/1.jpg" alt />
                                                </div>
                                                {/*  <div className="header-info">
                                                    <h6>Thomas Fleming</h6>
                                                    <p>info@gmail.com</p>
                                                </div> */}
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end" style={{}}>
                                            <div className="card border-0 mb-0">
                                                <div className="card-header py-2">
                                                    <div className="products">
                                                        <img src="images/tab/1.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6>Thomas Fleming</h6>
                                                            <span>Web Designer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body px-0 py-2">
                                                    <a href="app-profile.html" className="dropdown-item ai-icon ">
                                                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9848 15.3462C8.11714 15.3462 4.81429 15.931 4.81429 18.2729C4.81429 20.6148 8.09619 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9848 15.3462Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38857 4.8716 7.38857 7.40969C7.38 9.93922 9.42381 11.9973 11.9524 12.0059H11.9848Z" stroke="var(--primary)" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span className="ms-2">Profile </span>
                                                    </a>
                                                    <a href="app-profile.html" className="dropdown-item ai-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                                                        <span className="ms-2">My Project</span><span className="badge badge-sm badge-secondary light rounded-circle text-white ms-2">4</span>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item ai-icon ">
                                                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.9026 8.85114L13.4593 12.4642C12.6198 13.1302 11.4387 13.1302 10.5992 12.4642L6.11844 8.85114" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span className="ms-2">Message </span>
                                                    </a>
                                                    <a href="email-inbox.html" className="dropdown-item ai-icon ">
                                                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M14.3888 20.8572C13.0247 22.372 10.8967 22.3899 9.51947 20.8572" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span className="ms-2">Notification </span>
                                                    </a>
                                                </div>
                                                <div className="card-footer px-0 py-2">
                                                    <a href="javascript:void(0);" className="dropdown-item ai-icon ">
                                                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.8066 7.62355L20.1842 6.54346C19.6576 5.62954 18.4907 5.31426 17.5755 5.83866V5.83866C17.1399 6.09528 16.6201 6.16809 16.1307 6.04103C15.6413 5.91396 15.2226 5.59746 14.9668 5.16131C14.8023 4.88409 14.7139 4.56833 14.7105 4.24598V4.24598C14.7254 3.72916 14.5304 3.22834 14.17 2.85761C13.8096 2.48688 13.3145 2.2778 12.7975 2.27802H11.5435C11.0369 2.27801 10.5513 2.47985 10.194 2.83888C9.83666 3.19791 9.63714 3.68453 9.63958 4.19106V4.19106C9.62457 5.23686 8.77245 6.07675 7.72654 6.07664C7.40418 6.07329 7.08843 5.98488 6.8112 5.82035V5.82035C5.89603 5.29595 4.72908 5.61123 4.20251 6.52516L3.53432 7.62355C3.00838 8.53633 3.31937 9.70255 4.22997 10.2322V10.2322C4.82187 10.574 5.1865 11.2055 5.1865 11.889C5.1865 12.5725 4.82187 13.204 4.22997 13.5457V13.5457C3.32053 14.0719 3.0092 15.2353 3.53432 16.1453V16.1453L4.16589 17.2345C4.41262 17.6797 4.82657 18.0082 5.31616 18.1474C5.80575 18.2865 6.33061 18.2248 6.77459 17.976V17.976C7.21105 17.7213 7.73116 17.6515 8.21931 17.7821C8.70746 17.9128 9.12321 18.233 9.37413 18.6716C9.53867 18.9488 9.62708 19.2646 9.63043 19.5869V19.5869C9.63043 20.6435 10.4869 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9088 18.6 15.2681 18.2407C15.6274 17.8814 16.1154 17.6806 16.6236 17.6831C16.9451 17.6917 17.2596 17.7797 17.5389 17.9393V17.9393C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8066 16.1453C21.0617 15.7074 21.1317 15.1859 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6717 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8872 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8213 10.3981 20.111 10.2322V10.2322C21.0161 9.70283 21.3264 8.54343 20.8066 7.63271V7.63271V7.62355Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <circle cx="12.175" cy="11.889" r="2.63616" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span className="ms-2">Settings </span>
                                                    </a>
                                                    <a href="page-login.html" className="dropdown-item ai-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg>
                                                        <span className="ms-2">Logout </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Header end ti-comment-alt */}
        </div>


    )
}

export default TopHeader
