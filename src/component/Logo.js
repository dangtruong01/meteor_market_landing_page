import { Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Logo = (props) => {
  const history = useHistory();

  return (
    <Box style={{ padding: " 0px 10px", borderRadius: "4px" }}>
      <img
        onClick={() => history.push("/dashboard")}
        src="/images/kian-logo.png"
        alt="Logo"
        {...props}
        width="auto"
      />
    </Box>
  );
};

export default Logo;
