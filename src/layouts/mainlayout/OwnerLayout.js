import React, { Fragment } from 'react'
import Header from '../../components/partials/dashboard/HeaderStyle/header'
import SubHeader from '../../components/partials/dashboard/HeaderStyle/sub-header'
import SettingOffCanvas from '../../components/setting/SettingOffCanvas'
import Footer from '../../components/partials/dashboard/FooterStyle/footer'
import Loader from '../../components/Loader'
import OwnerSidebar from '../../components/partials/dashboard/SidebarStyle/OwnerSidebar'

    const OwnerLayout = (Component) => function HOC() {

      return (
        <Fragment>
        <Loader />
        <OwnerSidebar app_name={"agent"} />
        {/* <Tour /> */}
        <main className="main-content">
          <div className="position-relative">
            <Header />
            <SubHeader />
          </div>
          <div className="py-0 conatiner-fluid content-inner mt-n5">
            {/* <DefaultRouter /> */}
             <Component /> 
          </div>
       
          <Footer />
        </main>
        <SettingOffCanvas />
      </Fragment>
      )
    }


export default OwnerLayout