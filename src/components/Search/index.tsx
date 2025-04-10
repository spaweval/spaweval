import Button from "../Buttons/Button";
import DatePicker from "../DatePicker";
import SearchableSelect from "../SearchableSelect";
import TimePicker from "../TimePicker";
import VerticalSeperator from "../VerticalSeperator";

//css
import { SearchWrapper, Wrapper } from "./index.styles";

const Search = () => {
  return (
    <SearchWrapper>
      <Wrapper>
        <SearchableSelect />
        <VerticalSeperator height={"38px"} />
        <DatePicker />
        <VerticalSeperator height={"38px"} />
        <TimePicker />
      </Wrapper>
      <Button>Search</Button>
    </SearchWrapper>
  );
};

export default Search;
