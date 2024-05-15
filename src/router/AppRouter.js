import { CSSTransition, TransitionGroup } from "react-transition-group";
import PersistLogin from "../hooks/PersistLogin";
import RequireAuth from "../hooks/RequireAuth";
import SignIn from "../pages/auth/Sign-in";
import AgentOwnerProperties from "../pages/properties/AgentOwnerProperties";
import { Route, Routes } from "react-router-dom";
import AgentDashboard from "../pages/dashboards/AgentDashboard";
import AgentOwnerDashboard from "../pages/dashboards/AgentOwnerDashboard";
import OwnerDashboard from "../pages/dashboards/OwnerDashboard";
import TenantDashboard from "../pages/dashboards/TenantDashboard";
import AddProperties from "../pages/properties/AddProperties";
import Addunit from "../pages/units/Addunit";
import AgentOwnerUnits from "../pages/units/AgentOwnerUnits";
import AddTenant from "../pages/tenant/AddTenant";
import AgentOwnerTenant from "../pages/tenant/AgentOwnerTenant";
import AddUser from "../pages/usermanagement/AddUser";

export const AppRouter = () => {
    return (
      <TransitionGroup>
        <CSSTransition classNames="fadein" timeout={300}>
  
          <Routes>
            {/* public routes  */}
             <Route path="/" element={<SignIn />} />
            {/* <Route path="/" element={<Login />} />
            <Route path="/unauthorised" element={<Unauthorised />} />
            <Route path="/404" element={<Four0Four />} />
  
            <Route path="/main" element={<Main />} />
            <Route path="/table" element={<Table />} /> */}
  
            {/* protected */}
  
            <Route element={<PersistLogin />}>
              {/* <Route path="/login" element={<Login />} /> */}
  
              <Route element={<RequireAuth allowedRoles={['AGENT']} />}>
                <Route path="/home/agent" element={<AgentDashboard />} />
                <Route path="/agent/properties" element={<AgentOwnerProperties />} />
                <Route path="/add/properties" element={<AddProperties />} />
              </Route>
  
              {/* protected agents */}
              <Route element={<RequireAuth allowedRoles={['AGENT','AGENTOWNER']} />}>
                <Route path="/home/agentowner" element={<AgentOwnerDashboard />} />
                <Route path="/properties" element={<AgentOwnerProperties />} />
                <Route path="/units" element={<AgentOwnerUnits />} />
                <Route path="/tenants" element={<AgentOwnerTenant />} />
                <Route path="/add/units" element={<Addunit />} />
                <Route path="/add/tenant" element={<AddTenant />} />
                <Route path="/add/user" element={<AddUser />} />
              </Route>
  
              <Route element={<RequireAuth allowedRoles={['OWNER']} />}>
                <Route path="/home/owner" element={<OwnerDashboard />} />
                <Route path="/owner/properties" element={<OwnerDashboard />} />
              </Route>
  
              <Route element={<RequireAuth allowedRoles={['Tenent']} />}>
                <Route path="/home/tenant" element={<TenantDashboard />} />
                <Route path="/unit" element={<TenantDashboard />} />
              </Route>
  
              <Route element={<RequireAuth allowedRoles={[5000]} />}>
                <Route
                  path="/home/agent_owner" element={<AgentOwnerProperties />}
                />
              </Route>
              <Route element={<RequireAuth allowedRoles={[6000]} />}>
                <Route path="/home/superuser" element={<AgentOwnerProperties />} />
              </Route>
  
              <Route element={<RequireAuth allowedRoles={[2003]} />}>
                <Route path="/lounge" element={<AgentOwnerProperties />} />
              </Route>
  
              <Route path="/admin" element={<AgentOwnerProperties />} />
            </Route>
  
            {/* <Route path='*' element={<Missing />} /> */}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    );
  };
  