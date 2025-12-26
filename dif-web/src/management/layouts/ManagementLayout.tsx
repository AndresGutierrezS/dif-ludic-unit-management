import { Outlet } from "react-router-dom"
import { CustomHeader } from "../components/CustomHeader"
import { CustomFooter } from "../components/CustomFooter"

export const ManagementLayout = () => {
  return (
    <>
      <CustomHeader />
      <Outlet />
      <CustomFooter />
    </>
  )
}
