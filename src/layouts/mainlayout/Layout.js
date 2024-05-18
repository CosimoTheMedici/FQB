import { jwtDecode } from "jwt-decode";
import useAuth from "../../hooks/useAuth";
import AgentLayout from "./AgentLayout";
import AgentOwnerLayout from "./AgentOwnerLayout";
import OwnerLayout from "./OwnerLayout";
import TenantLayout from "./TenantLayout";


export function Layout(Component) {

    //const { auth } = useAuth();

    var localUser = jwtDecode(localStorage.getItem('token')).role;
    console.log("decoded",localUser)
    try {
      //let str = localStorage.getItem("user_category");
      //const localUser = AGENT//str.toUpperCase();
      if (localUser === "AGENT") {
        return AgentLayout(Component);
      }
    //   if (localUser === "AGENT") {
    //     return AgentOwnerLayout(Component);
    //   }
      if (localUser === "MAKER") {
        return TenantLayout(Component);
      }
      if (localUser === "MAKER") {
        return OwnerLayout(Component);
      }
    } catch (error) {
      //errorNotification(error);
    }
  }