import React from 'react'
import Aside from '../../commonComponents/asidebar/Aside'
import PagesRoutes from '../mainBody/PagesRoutes'

function Main() {
    return (
        <div className="d-flex ">
            <Aside />
            <PagesRoutes />
        </div>
    )
}

export default Main
