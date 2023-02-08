import styled from "styled-components";
import { themes } from "./themes";

export const RecipeElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px 30px;

  img {
    max-width: 600px;
  }

  @media ${themes.media.maxTabletPortrait} {
    img {
      max-width: 400px;
    }
  }

  @media ${themes.media.maxMobile} {
    img {
      max-width: 100%;
    }
  }
`;

export const RecipeTitle = styled.h2`
  text-align: center;
  width: 100%;
  font-size: ${themes.font.size.large};
  color: ${themes.color.orange};
  border-bottom: 2px solid ${themes.color.gray};
  margin-bottom: 30px;
  padding: 10px;
`;

export const RecipeSubtitle = styled.h3`
  text-align: center;
  margin-bottom: 15px;
`;

export const RecipeText = styled.p`
  margin-bottom: 40px;
  line-height: 1.8rem;
`;

export const RecipeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;

  @media ${themes.media.maxMobile} {
    flex-direction: column;
  }
`;

export const ProductsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themes.color.lightOrange};
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  min-height: 100%;
  max-height: 100%;

  @media ${themes.media.maxMobile} {
    min-width: 475px;
  }

  @media ${themes.media.maxLowScreenMobile} {
    min-width: 300px;
  }
`;

export const ProductsList = styled.ul`
  width: 100%;
  max-height: 350px;
  overflow: auto;
  padding: 20px 0;
  min-height: 100%;

  @media ${themes.media.maxTabletPortrait} {
    min-height: 300px;
  }

  @media ${themes.media.maxMobile} {
    max-height: 150px;
  }
`;
export const ProductItem = styled.li`
  margin-bottom: 10px;
`;

export const ProductQuantity = styled.span`
  font-weight: ${themes.font.weight.bold};
  color: ${themes.color.orange};
`;

export const AlertText = styled.div`
  width: 100%;
  text-align: center;
  font-weight: ${themes.font.weight.bold};

  & a {
    color: ${themes.color.orange};
    text-decoration: underline;
  }
`;

export const RecipeCompareWrapper = styled.div``;
