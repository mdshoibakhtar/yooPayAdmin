import React from 'react'
import {
    Routes, Route, Navigate
} from 'react-router-dom';
import ContentBody from '../../commonComponents/contentBody/ContentBody'
import UsersList from '../../pages/userList'
import DashBoard from '../../pages/dashboard/DashBoard'
import CreateUserList from '../userList/createUserList/CreateUserList';

function PagesRoutes() {
    return (
        <div className="content-body">
            <ContentBody />
            <Routes>
                <Route path="/" element={<Navigate to="/users-Lists" />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/users-Lists" element={<UsersList />} />
                <Route path="/create-users" element={<CreateUserList />} />
            </Routes>
        </div>
    )
}
export default PagesRoutes
