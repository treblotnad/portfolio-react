import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Nav() {
  const currentPage = useLocation().pathname.toLowerCase();
  const [value, setValue] = useState(currentPage);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }} display="flex">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} display="flex">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="About Me" value="/" component={Link} to="/"></Tab>
          <Tab
            label="Portfolio"
            value="/portfolio"
            component={Link}
            to="/portfolio"
          ></Tab>
          <Tab
            label="Contact"
            value="/contact"
            component={Link}
            to="/contact"
          ></Tab>
          <Tab
            label="Resume"
            value="/resume"
            component={Link}
            to="/resume"
          ></Tab>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Nav;
