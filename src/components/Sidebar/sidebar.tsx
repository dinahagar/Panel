import {
  HomeOutlined,
  PieChartOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Menu, type MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SidebarDiv } from "./sidebar.styles";

type MenuItem = Required<MenuProps>["items"][number];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";

  const items: MenuItem[] = [
    { key: "1", icon: <HomeOutlined />, label: t("home") },
    { key: "2", icon: <ProductOutlined />, label: t("Products") },
    {
      key: "sub1",
      label: t("Categories"),
      icon: <PieChartOutlined />,
      children: [
        { key: "5", label: t("Electronics") },
        { key: "6", label: t("Jewelery") },
        { key: "7", label: t("Men's Clothing") },
        { key: "8", label: t("Women's Clothing") },
      ],
    },
  ];

  return (
    <SidebarDiv $isRTL={isRTL}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ height: "100%" }}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </Sider>
    </SidebarDiv>
  );
};

export default Sidebar;
