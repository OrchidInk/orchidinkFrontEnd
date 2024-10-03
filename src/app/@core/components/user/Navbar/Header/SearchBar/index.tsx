import { InputGroup, Input, InputRightElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FC } from "react";

const SearchBar: FC = () => {
  return (
    <InputGroup>
      <Input
        placeholder="Search..."
        borderRadius="full"
        border="1px solid"
        size="sm"
      />
      <InputRightElement h="full">
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          variant="ghost"
          borderRadius="full"
          size="sm"
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
