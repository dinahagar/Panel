import styled from "styled-components";

export const SidebarDiv = styled.div<{ $isRTL: boolean }>`
    .ant-layout-sider {
        .ant-layout-sider-trigger {
            .anticon {
                transform: ${({ $isRTL }) => ($isRTL ? "rotate(180deg)" : "none" )};
            }
        }
    }
`