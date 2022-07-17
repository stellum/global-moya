import styled from "styled-components";
import { ReactComponent as TranslateSvg } from "@assets/Translate-ko.svg";
import { ReactComponent as ShareIconSvg } from "@assets/ShareIcon.svg";
import { ReactComponent as ScrapIconSvg } from "@assets/ScrapIcon.svg";
import { ReactComponent as ExpandMoreIconSvg } from "@assets/ExpandMoreIcon.svg";
import { ReactComponent as LearnMoreSvg } from "@assets/LearnMore.svg";
import { ReactComponent as GlobalMoyaSvg } from "@assets/globalMOYA.svg";
import { ReactComponent as IconsFacebookSvg } from "@assets/icons-facebook.svg";
import { ReactComponent as IconsInstagramSvg } from "@assets/icons-instagram.svg";
import { ReactComponent as IconsKakaotalkSvg } from "@assets/icons-kakaotalk.svg";
import { ReactComponent as ProfileIconSvg } from "@assets/ProfileIcon.svg";
import { ReactComponent as SearchIconSvg } from "@assets/searchIcon.svg";
import { ReactComponent as FilterIconSvg } from "@assets/icons-filter.svg";
import { ReactComponent as MagazineDisableSvg } from "@assets/ViewMagazine-disable.svg";
import { ReactComponent as TextDisableSvg } from "@assets/ViewText-disable.svg";
import { ReactComponent as CardDisableSvg } from "@assets/ViewCard-disable.svg";
import { ReactComponent as MagazineSvg } from "@assets/ViewMagazine.svg";
import { ReactComponent as TextSvg } from "@assets/ViewText.svg";
import { ReactComponent as CardSvg } from "@assets/ViewCard.svg";
import { ReactComponent as CancelSvg } from "@assets/icons-cancel.svg";
import { ReactComponent as BackArrowSvg } from "@assets/BackArrow.svg";
import { ReactComponent as IconsDeleteSvg } from "@assets/icons-delete.svg";
import { ReactComponent as IconsXSvg } from "@assets/icons-x.svg";
import { ReactComponent as IconsCheckSvg } from "@assets/icons-check.svg";
import { ReactComponent as IconsStarSvg } from "@assets/icons-star.svg";
import { ReactComponent as AttachIconSvg } from "@assets/AttachIcon.svg";
import { ReactComponent as CloseIconSvg } from "@assets/CloseIcon.svg";
import { ReactComponent as PhotoIconSvg } from "@assets/PhotoIcon.svg";
import { ReactComponent as globalMOYAPremiumSvg } from "@assets/globalMOYAPremium.svg";
import { ReactComponent as ProfilePhotoSvg } from "@assets/ProfilePhoto.svg";
import { ReactComponent as MoreIconSvg } from "@assets/MoreIcon.svg";
import { ReactComponent as ScrapCheckSvg } from "@assets/ScrapCheckIcon.svg";
import { ReactComponent as ScrapCheckDisableSvg } from "@assets/ScrapCheckDisableIcon.svg";
import { ReactComponent as NewGroupPlusSvg } from "@assets/NewGroupPlusIcon.svg";
import { colors } from "./theme";
export const NewGroupPlus = styled(NewGroupPlusSvg)``;
export const MoreIcon = styled(MoreIconSvg)`
  position: absolute;
  right: 6px;
`;
export const TranslateIcon = styled(TranslateSvg)``;
export const ShareIcon = styled(ShareIconSvg)``;
export const ScrapIcon = styled(ScrapIconSvg)`
  fill: ${(props) => (props.$scrap ? colors.pointOrange200 : "none")};
  path {
    stroke: ${(props) =>
      props.$scrap ? colors.pointOrange200 : colors.gray770};
  }
`;
export const ScrapCheckIcon = styled(ScrapCheckSvg)``;
export const ScrapCheckDisableIcon = styled(ScrapCheckDisableSvg)``;

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
export const ProfileIcon = styled(ProfileIconSvg)`
  width: 36px;
  height: 36px;
`;
export const SearchIcon = styled(SearchIconSvg)`
  width: 24px;
  circle {
    stroke: ${colors.gray400};
  }
  path {
    stroke: ${colors.gray400};
  }
`;
export const FilterIcon = styled(FilterIconSvg)``;

export const TextDisable = styled(TextDisableSvg)``;
export const MagazineDisable = styled(MagazineDisableSvg)``;
export const CardDisable = styled(CardDisableSvg)``;

export const TextView = styled(TextSvg)``;
export const MagazineView = styled(MagazineSvg)``;
export const CardView = styled(CardSvg)``;

export const CancelIcon = styled(CancelSvg)``;
export const BackArrow = styled(BackArrowSvg)``;

export const DeleteIcon = styled(IconsDeleteSvg)``;
export const XIcon = styled(IconsXSvg)``;
export const CheckIcon = styled(IconsCheckSvg)``;
export const StarIcon = styled(IconsStarSvg)`
  fill: ${({ $clip }) => ($clip ? colors.pointOrange100 : "none")};
  path {
    stroke: ${({ $clip }) => ($clip ? colors.pointOrange100 : "#B7B7B7")};
  }
`;
export const LearnMore = styled(LearnMoreSvg)``;
export const AttachIcon = styled(AttachIconSvg)``;
export const CloseIcon = styled(CloseIconSvg)``;
export const PhotoIcon = styled(PhotoIconSvg)``;
export const GlobalMOYAPremium = styled(globalMOYAPremiumSvg)``;
export const ProfilePhoto = styled(ProfilePhotoSvg)``;
