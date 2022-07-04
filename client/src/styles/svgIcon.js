import styled from "styled-components";
import { ReactComponent as TranslateSvg } from "@assets/Translate-ko.svg";
import { ReactComponent as ShareIconSvg } from "@assets/ShareIcon.svg";
import { ReactComponent as ScrapIconSvg } from "@assets/ScrapIcon.svg";
import { ReactComponent as ExpandMoreIconSvg } from "@assets/ExpandMoreIcon.svg";
import { ReactComponent as GlobalMoyaSvg } from "@assets/globalMOYA.svg";
import { ReactComponent as IconsFacebookSvg } from "@assets/icons-facebook.svg";
import { ReactComponent as IconsInstagramSvg } from "@assets/icons-instagram.svg";
import { ReactComponent as IconsKakaotalkSvg } from "@assets/icons-kakaotalk.svg";
import { ReactComponent as ProfileSvg } from "@assets/profile.svg";
import { ReactComponent as SearchIconSvg } from "@assets/searchIcon.svg";
import { ReactComponent as FilterIconSvg } from "@assets/icons-filter.svg";
import { colors } from "./theme";

export const TranslateIcon = styled(TranslateSvg)``;
export const ShareIcon = styled(ShareIconSvg)``;
export const ScrapIcon = styled(ScrapIconSvg)`
  fill: ${(props) => (props.$scrap ? colors.pointOrange200 : "none")};
  path {
    stroke: ${(props) =>
      props.$scrap ? colors.pointOrange200 : colors.gray770};
  }
`;

export const ExpandMoreIcon = styled(ExpandMoreIconSvg)`
  transform: ${({ $expand }) => ($expand ? "rotate(180deg)" : "rotate(0deg)")};
  position: absolute;
  top: 8px;
  right: 16px;
`;

export const GlobalMoyaLogo = styled(GlobalMoyaSvg)``;
export const IconsFacebook = styled(IconsFacebookSvg)``;
export const IconsInstagram = styled(IconsInstagramSvg)``;
export const IconsKakaotalk = styled(IconsKakaotalkSvg)``;
export const Profile = styled(ProfileSvg)`
  width: 36px;
  height: 36px;
`;
export const SearchIcon = styled(SearchIconSvg)`
  width: 24px;
`;
export const FilterIcon = styled(FilterIconSvg)``;
