import AgentLayout from "./AgentLayout";
import AgentOwnerLayout from "./AgentOwnerLayout";
import OwnerLayout from "./OwnerLayout";
import TenantLayout from "./TenentLayout";


export function Layout(Component) {
    try {
      let str = localStorage.getItem("user_category");
      const localUser = str.toUpperCase();
      if (localUser === "ADMIN") {
        return AgentLayout(Component);
      }
      if (localUser === "CHECKER") {
        return AgentOwnerLayout(Component);
      }
      if (localUser === "MAKER") {
        return TenantLayout(Component);
      }
      if (localUser === "MAKER") {
        return OwnerLayout(Component);
      }
    } catch (error) {
      errorNotification(error);
    }
  }