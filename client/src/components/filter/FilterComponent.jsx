import React from "react";
import {
  FilterModal,
  ViewWrap,
  H2Tag,
  VerticalView,
  HorizontalView,
  SelectForm,
  PublishWrap,
  PublishForm,
} from "../../styles/filterStyle/filterStyle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleModalAction } from "../../redux/reducer/user/reducer";
import { MagazineDisable, TextDisable, CardDisable } from "@styles/svgIcon";

const published = ["한 달", "일주일", "하루", "1시간", "15분", "5분"];
const FilterComponent = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.user.showModal);

  return (
    <>
      <FilterModal className={`Modal ${show ? "Show" : ""}`}>
        <H2Tag>보기 타입</H2Tag>
        <ViewWrap>
          <VerticalView>
            <MagazineDisable />
            <TextDisable />
          </VerticalView>
          <HorizontalView>
            <CardDisable />
          </HorizontalView>
        </ViewWrap>
        <H2Tag>언론사 종류</H2Tag>
        <SelectForm>
          <div>
            <input type="radio" name="newsRadio" id="all" defaultChecked />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input type="radio" name="newsRadio" id="mo" />
            <label htmlFor="mo">Major & Others</label>
          </div>
          <div>
            <input type="radio" name="newsRadio" id="major" />
            <label htmlFor="major">Major</label>
          </div>
          <div>
            <input type="radio" name="newsRadio" id="others" />
            <label htmlFor="others">Others</label>
          </div>
          <div>
            <input type="radio" name="newsRadio" id="research" />
            <label htmlFor="research">Research</label>
          </div>
        </SelectForm>
        <H2Tag>발행일</H2Tag>
        <PublishForm>
          {published.map((item) => (
            <PublishWrap>
              <input
                type="radio"
                name="publishRadio"
                id={item}
                defaultChecked
              />
              <label htmlFor={item}>{item}</label>
            </PublishWrap>
          ))}
        </PublishForm>
        <button
          className="Close"
          onClick={() => dispatch(toggleModalAction(!show))}
        >
          X
        </button>
        <p className="HelpText">
          Note: these settings are saved in the browser only and can be lost
        </p>
      </FilterModal>
    </>
  );
};

export default FilterComponent;
