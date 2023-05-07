import { NavLink, Outlet } from "react-router-dom";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

export const SharedLayout = () => {
  return (
    <>
      <Box paddingX="36px" paddingY="30px" fontWeight="semibold" fontSize="xl">
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={NavLink} _activeLink={{ color: "red" }} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              as={NavLink}
              to="/tweets"
              _activeLink={{ color: "red" }}
            >
              Tweets
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Outlet />
    </>
  );
};
