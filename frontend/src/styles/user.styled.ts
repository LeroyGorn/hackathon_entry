import styled from "styled-components";
import { themes } from "./themes";

export const ProfileTitle = styled.p`
  font-size: ${themes.font.family.inter};
  font-size: 2.857rem;
  font-weight: ${themes.font.weight.bold};
  margin-bottom: 20px;

  &.withSeparator {
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 1px solid ${themes.color.darkGray};
  }

  @media ${themes.media.maxMobile} {
    font-size: 2rem;
  }
`;

export const UserPageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 205px);
  padding: 0 100px 50px 100px;
`;

export const ProfileIngredientsWrapper = styled.div`
  border: 1px solid ${themes.color.gray};
  padding: 20px;
`;

export const UserProfileIngredientsWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  row-gap: 10px;
  flex-wrap: wrap;
`;

export const ProfileIngredientsItem = styled.div`
  padding: 15px 17px;
  background-color: ${themes.color.secondaryGray};
  color: ${themes.color.primary};
  border-radius: 25px;
`;

export const ProfileIngredientsQuantity = styled.span`
  color: ${themes.color.orange};
  font-weight: ${themes.font.weight.bold};
`;

export const RecipesButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
