import React, { Fragment } from 'react'
import Header from '../../components/partials/dashboard/HeaderStyle/header'
import SubHeader from '../../components/partials/dashboard/HeaderStyle/sub-header'
import SettingOffCanvas from '../../components/setting/SettingOffCanvas'
import Footer from '../../components/partials/dashboard/FooterStyle/footer'
import Loader from '../../components/Loader'
import AgentSidebar from '../../components/partials/dashboard/SidebarStyle/AgentSidebar'

const AgentLayout = (Component) => function HOC() {

  const properties_routes = [
    { path: '/horizontal', label: 'View Properties', icon: 'V P' },
    { path: '/dual-horizontal', label: 'Add Properties', icon: 'A P' },

  ];
  const properties_routesd = [
    { path: '/horizontal', label: 'View Properties', icon: 'H' },
    { path: '/dual-horizontal', label: 'Add Properties', icon: 'D' },

  ];
    
  return (
    <Fragment>
    <Loader />
    <AgentSidebar app_name={"agent"} arr={{properties_routes,properties_routesd}} />
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

export default AgentLayout