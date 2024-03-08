import React, { ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../theme';

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
`

type BackgroundBoxProps = {
    position: string;
    backgroundImage?: string;
}

const ColoredBackgroundBox = styled.div.withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        !['position', 'backgroundImage'].includes(prop)
    }) <BackgroundBoxProps>`
    display: block;
    background-color: ${theme.colors.background};
    background-image: url(${props => props.backgroundImage});
    width: 65%;
    height: 500px;
    z-index: -999;
    opacity: 0.75;
    float: ${props => props.position};
    border-radius: 0px 0px 5px 5px;
`

type GenericPageWrapperProps = {
    children: ReactNode;
}

const GenericPageWrapper: React.FC<GenericPageWrapperProps> = ({children}) => {
    return (
        <PageContainer>
            <ColoredBackgroundBox position='left' />
            <ColoredBackgroundBox position='right' />
            {children}
        </PageContainer>
    )
}

export default GenericPageWrapper;