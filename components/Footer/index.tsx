import { Col, Row, Layout } from 'antd';
import styled from 'styled-components';
import React from 'react';

const Foot = styled(Layout.Footer)`
    width: 100vw;
    height: 60px;
    background: ${(props) => props.theme.darkGrey + ' 0% 0% no-repeat padding-box'};

    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: ${(props) => props.theme.white};

        &:hover {
            color: ${(props) => props.theme.grey};
        }
    }
`;

const FootContainer = styled(Row)`
    max-width: ${(props) => props.theme.maxWidth};
    width: 100%;
    height: 60px;
    overflow: hidden;
    position: relative;
`;

const Logo = styled.img`
    opacity: 0.3;
    left: 50%;
    bottom: 7px;
    position: absolute;
`;

const FlexCol = styled<any>(Col)`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: ${(props) => props.align};
    justify-content: center;
`;

const Dots = styled.img`
    transform: matrix(0.84, -0.54, 0.54, 0.84, 0, 0);
    opacity: 0.3;
    margin-right: 55px;
    position: absolute;
    right: 25px;
`;

const FooterLink = styled.a`
    margin: 0px 20px;
    font-size: 16px;
`;

const Footer: React.FC = (): React.ReactElement => {
    return (
        <Foot>
            <FootContainer align="middle">
                <FlexCol xs={24} sm={24} md={24} align="flex-start">
                    <Row>
                        <FooterLink href="#">Discord</FooterLink>
                        <FooterLink href="#">Twitter</FooterLink>
                        <FooterLink href="#">Medium</FooterLink>
                        <FooterLink href="#">Github</FooterLink>
                        <FooterLink href="#">Docs</FooterLink>
                    </Row>
                </FlexCol>
                <Logo height="46px" width="55px" src="/assets/derpfi.png" />
                <Dots height="172px" width="162px" src="/assets/footer_dots.svg" />
            </FootContainer>
        </Foot>
    );
};

export default Footer;
