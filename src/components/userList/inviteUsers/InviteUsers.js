import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function InviteUsers({ inviteClose, usersShow }) {
    return (
        <Modal show={usersShow} onHide={inviteClose} animation={true} className='modal-center'>
            <Modal.Header closeButton>
                <Modal.Title><h1 className="modal-title fs-5" id="exampleModalLabel1">Invite Employee</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-xl-12">
                        <label className="form-label">Email ID<span className="text-danger">*</span></label>
                        <input type="email" className="form-control" placeholder="hello@gmail.com" />
                        <label className="form-label mt-3">Employment date<span className="text-danger">*</span></label>
                        <input className="form-control" type="date" />
                        <div className="row">
                            <div className="col-xl-6">
                                <label className="form-label mt-3">First Name<span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <label className="form-label mt-3">Last Name<span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Surname" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 invite">
                            <label className="form-label">Send invitation email<span className="text-danger">*</span></label>
                            <input type="email" className="form-control " placeholder="+ invite" />
                        </div>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={inviteClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={inviteClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InviteUsers
