import Icons from "../../Icons";
import SecondaryButton from "../Buttons/OutlinedButton";
import Icon from "../Icon";
import Search from "../Search";
import StyledSelect from "../Select";

//css
import {
  ButtonsWrapper,
  GettheApp,
  Header,
  HeaderWrapper,
  SearchContainer,
  SubTitle,
  Title,
  TitleContainer,
} from "./index.styles";

const StyledHeader = () => {
  return (
    <HeaderWrapper>
      <Header>
        <Icon src={Icons.Logo} alt="logo" width={78} height={63} />
        <ButtonsWrapper>
          <SecondaryButton>For Business</SecondaryButton>
          <StyledSelect
            value="check"
            options={[{ label: "check", value: "check" }]}
          />
        </ButtonsWrapper>
      </Header>
      <SearchContainer>
        <TitleContainer>
          <Title>Cool vibes</Title>
          <Icon src={Icons.BlinkingStar} alt="stars" width={75} height={71} />
          <Title>Feel Amazing & </Title>
          <SubTitle>Unforgettable</SubTitle>
          <Title>Experiences"</Title>
        </TitleContainer>
        <Search />
        <GettheApp
          iconSrc={Icons.ScanBarcode}
          iconPosition="right"
          iconAlt="app"
          iconWidth={20}
          iconHeight={20}
        >
          Get the App
        </GettheApp>
      </SearchContainer>
    </HeaderWrapper>
  );
};

export default StyledHeader;
