import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

const ShortSelector = () => {
  return (
    <Menu>
      <MenuButton marginY={"10px"} as={Button} rightIcon={<BsChevronDown />}>
        orderby: Relevance
      </MenuButton>
          <MenuList>
              <MenuItem>Relevance</MenuItem>
              <MenuItem>Date added</MenuItem>
              <MenuItem>Name</MenuItem>
              <MenuItem>Release Date</MenuItem>
              <MenuItem>Popularity</MenuItem>
              <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ShortSelector;
