import React, { useEffect } from 'react'
import { useState } from "react";
import { userList } from '../../commonComponents/allMockData/userList'
import "../userList/createUserList/CreateUserList.css"
import CreateUserList from './createUserList/CreateUserList'
import InviteUsers from './inviteUsers/InviteUsers';

function UserList() {
    const [show, setShow] = useState(false);
    const [usersShow, setUserShow] = useState(false);
    const [usersData, setUsersData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const inviteShow = () => setUserShow(true);
    const inviteClose = () => setUserShow(false);
    useEffect(() => {
        setUsersData(userList?.userListData)
        setTotalPages(Math.ceil(userList?.userListData?.length / 10));
    }, []);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    };


    const itemPages = 10;
    const startIndex = (currentPage - 1) * itemPages;
    const endtIndex = startIndex + itemPages;
    const iteToDishplay = usersData.slice(startIndex, endtIndex);
    return <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-body p-0">
                        <div class="table-responsive active-projects style-1">
                            <div class="tbl-caption">
                                <h4 class="heading mb-0">User List</h4>
                                <div>
                                    <button class="btn btn-primary btn-sm mx-2" data-toggle="modal" data-target="#myModal2" role="button" onClick={handleShow}>+ Add Users</button>
                                    <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={inviteShow}>
                                        + Invite User
                                    </button>
                                </div>
                            </div>
                            <CreateUserList handleClose={handleClose} show={show} />
                            <InviteUsers inviteClose={inviteClose} usersShow={usersShow} />
                            {iteToDishplay && <table id="empoloyees-tblwrapper" class="table">
                                <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>User Name</th>
                                        <th>Department</th>
                                        <th>Email Address</th>
                                        <th>Contact Number</th>
                                        <th>Gender</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        iteToDishplay && iteToDishplay.length > 0 ? iteToDishplay.map((item, i) => {
                                            return <tr key={i}>
                                                <td><span>{item.id}</span></td>
                                                <td>
                                                    <div class="products">
                                                        <img src={item.userPic} class="avatar avatar-md" alt="" />
                                                        <div>
                                                            <h6>{item.userName}</h6>
                                                            <span>{item.userDegnition}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span>{item.department}</span></td>
                                                <td><span class="text-primary">{item.emailAdd}</span></td>
                                                <td>
                                                    <span>{item.contactNo}</span>
                                                </td>
                                                <td>
                                                    <span>{item.gender}</span>
                                                </td>
                                                <td>
                                                    <span>{item?.location}</span>
                                                </td>
                                                <td>
                                                    <span class="badge badge-success light border-0">{item.Status}</span>
                                                </td>
                                            </tr>
                                        }) : ""
                                    }



                                </tbody>

                            </table>}
                        </div>
                    </div>
                    <div className='d-flex p-2 pb-4 justify-content-end'>

                        {Array.from({ length: totalPages }, (_, i) => {
                            return <button className='me-2 btn btn-outline-dark px-2 py-1 rounded-1' key={i} onClick={() => handlePageChange(i + 1)} disabled={i + 1 == currentPage}>
                                {i + 1}
                            </button>
                        })}
                    </div>
                </div>
            </div >
        </div>

    </div>
}

export default UserList
