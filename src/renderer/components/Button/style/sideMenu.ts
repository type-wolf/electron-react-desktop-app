import styled from 'styled-components';
import { SideMenuType } from 'renderer/types/components/Button';
import BaseButtonStyle from './base';
import { xs, sm, md, lg, xl } from '../../config/breakpoint';

const SideMenu = styled(BaseButtonStyle)<SideMenuType>`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    & span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #333;
        position: relative;
        margin: auto;
        transition: all 0.3s ease;

        &:before,
        &:after {
            content: '';
            width: 100%;
            height: 2px;
            background-color: #333;
            position: absolute;
            left: 0;
            transition: all 0.3s ease;
        }

        &:before {
            top: -8px;
        }

        &:after {
            bottom: -8px;
        }
    }

    ${({ isOpen }) =>
        isOpen &&
        `
    & span {
      transform: rotate(45deg);

      &:before {
        transform: rotate(90deg);
        top: 0;
      }

      &:after {
        transform: rotate(-90deg);
        bottom: 0;
      }
    }
  `}
    ${xs``}
    ${sm``}
    ${md`

    `}
    ${lg``}
    ${xl``}
`;

export default SideMenu;
