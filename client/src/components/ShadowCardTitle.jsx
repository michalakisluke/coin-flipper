import React from "react";
import styled from "styled-components";
import {
    LatoLightVulcan16px,
    CastoroNormalVulcan40px
}

from "../../styledMixins";
function ShadowCardTitle(props) {
    const {
        header,
        textBody
    }
    =props;
    return ( <TitleCard className="animate-enter"> <Header> {
        header
    }
    </Header> <TextBody> {
        textBody
    }
    </TextBody> </TitleCard>);
}

const TitleCard=styled.div` width: 360px;
height: 250px;
margin-top: 55px;
flex-direction: column;
background-color: var(--white);
border-radius: 12px;
box-shadow: 0px 20px 50px #12112714;
opacity: 0;
transform: translate(0, 25px);
&.animate-enter {
    animation: animate-enter-frames 0.5s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(0, 25px);
}

`;
const Header=styled.h1` $ {
    CastoroNormalVulcan40px
}

margin-left: 24px;
width: 312px;
height: 56px;
margin-top: 56px;
letter-spacing: 0;
line-height: 56px;
white-space: nowrap;
`;
const TextBody=styled.p` $ {
    LatoLightVulcan16px
}

margin-left: 24px;
width: 312px;
height: 58px;
margin-top: 24px;
letter-spacing: 0;
line-height: 28.8px;
`;
export default ShadowCardTitle;