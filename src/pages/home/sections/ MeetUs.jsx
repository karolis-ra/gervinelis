import React from "react";
import { FlexWrapper } from "../../../components/Wrappers/FlexWrapper";
import { COLORS } from "../../../styles/colors";
import { Image } from "../../../components/Image";
import { useQuery } from "../../../styles/breakpoints";
import { BodyTitle } from "../../../components/BodyTitle";
import { BodyText } from "../../../components/BodyText";

export const MeetUs = () => {
  const { isTablet } = useQuery();
  return (
    <FlexWrapper backgroundColor={COLORS.forestGreen} flexDirection="column">
      <FlexWrapper
        margin="0 auto"
        padding={isTablet ? "40px 10%" : "24px 24px"}
        flexDirection={isTablet ? "row-reverse" : "column"}
        backgroundColor={COLORS.forestGreen}
        gap={isTablet ? "24px" : "8px"}
      >
        <FlexWrapper flexDirection="column" gap="24px" flex="1">
          <Image src="./images/Foto.png" maxHeight="300px" objectFit="cover" />
        </FlexWrapper>
        <FlexWrapper
          flexDirection="column"
          gap="24px"
          flex="1"
          justifyContent="center"
        >
          <BodyTitle color={COLORS.creme} align="left" mobFs="24px">
            SUSIPAŽINKIME
          </BodyTitle>
          <BodyText
            color={COLORS.white}
            padding={isTablet && "0 80px 0 0"}
            align="left"
          >
            Esame kaimo turizmo paslaugas teikianti bendruomenė, siekianti
            suteikti visapusišką poilsį mažiems ir dideliems. Siūlydami ne tik
            apgyvendinimą, pirtis bei kubilus, bet ir įvairias aktyvaus poilsio
            paslaugas kaip baidarės, lauko sporto pramogos ir jaukius
            susibūrimus prie laužaviečių.
          </BodyText>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};
