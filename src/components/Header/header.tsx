import { useTranslation } from "react-i18next";
import { HeaderDiv, LangButton } from "./header.styles";
import {
  Button,
  Dropdown,
  Space,
  type DropdownProps,
  type MenuProps,
} from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => ({
  root: {
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadius,
  },
}));

const items: MenuProps["items"] = [
  {
    key: "3",
    label: "Logout",
    icon: <LogoutOutlined />,
    danger: true,
  },
];

const Header = () => {
  const { i18n } = useTranslation();

  const { styles } = useStyles();

  const sharedProps: DropdownProps = {
    menu: { items },
    placement: "bottomLeft",
    classNames: { root: styles.root },
  };

  return (
    <HeaderDiv>
      <div>username</div>

      <div>
        {i18n.language === "ar" ? (
          <LangButton onClick={() => i18n.changeLanguage("en")}>Eng</LangButton>
        ) : (
          <LangButton onClick={() => i18n.changeLanguage("ar")}>
            العربية
          </LangButton>
        )}
      </div>

      <div>
        <Dropdown {...sharedProps} trigger={["click"]}>
          <Button>
            <Space>
              <UserOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </HeaderDiv>
  );
};

export default Header;
