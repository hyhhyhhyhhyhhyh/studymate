"use client"
import {
    CaretDownFilled,
    DoubleRightOutlined,
    GithubFilled,
    InfoCircleFilled,
    LogoutOutlined,
    PlusCircleFilled,
    QuestionCircleFilled,
    SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProCard,
    ProConfigProvider,
    ProLayout,
    SettingDrawer,
} from '@ant-design/pro-components';
import {
    Button,
    ConfigProvider,
    Divider,
    Dropdown,
    Input,
    Popover,
    theme,
} from 'antd';
import React, { useState } from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import GlobalFooter from "@/components/GlobalFooter";
import {menus} from "../../../config/menu";





const SearchInput = () => {
    const { token } = theme.useToken();
    return (
        <div
            key="SearchOutlined"
            aria-hidden
            style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <Input
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: token.colorBgTextHover,
                }}
                prefix={
                    <SearchOutlined
                        style={{
                            color: token.colorBorder,
                        }}
                    />
                }
                placeholder="搜索题目"
                variant="borderless"
            />


        </div>
    );
};
interface Props{
    children?: React.ReactNode;
}
export default function BasicLayout ({children} : Props) {

    const pathname = usePathname();
    return (
        <div
            id="basiclayout"
            style={{
                height: '100vh',
                overflow: 'auto',
            }}
        >

                    <ProLayout
                        layout={"top"}
                        prefixCls="my-prefix"
                        title={"学习伙伴刷题平台"}
                        location={{
                            pathname,
                        }}
                        siderMenuType="group"
                        menu={{
                            collapsedShowGroupTitle: true,
                        }}
                        avatarProps={{
                            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                            size: 'small',
                            title: 'siren',
                            render: (props, dom) => {
                                return (
                                    <Dropdown
                                        menu={{
                                            items: [
                                                {
                                                    key: 'logout',
                                                    icon: <LogoutOutlined />,
                                                    label: '退出登录',
                                                },
                                            ],
                                        }}
                                    >
                                        {dom}
                                    </Dropdown>
                                );
                            },
                        }}
                        actionsRender={(props) => {
                            if (props.isMobile) return [];
                            return [
                                props.layout !== 'side'  ? (
                                    <SearchInput key={"search"}  />
                                ) : undefined,

                                <QuestionCircleFilled key="QuestionCircleFilled" />,
                                <a key={"github"} href={"https://github.com/hyhhyhhyhhyhhyh/studymate"}><GithubFilled key="GithubFilled" />,</a>

                            ];
                        }}
                        headerTitleRender={(logo, title, _) => {
                            const defaultDom = (
                                <a>
                                    {logo}
                                    {title}
                                </a>
                            );

                            if (_.isMobile) return defaultDom;
                            return (
                                <>
                                    {defaultDom}
                                </>
                            );
                        }}

                        //渲染底部栏
                        footerRender={() => {

                            return <GlobalFooter/>;
                        }}
                        onMenuHeaderClick={(e) => console.log(e)}
                        //定义菜单
                        menuDataRender={()=>{
                            return menus;

                        }}
                        menuItemRender={(item, dom) => (
                            <Link
                                href={item.path||"/"}
                                target={item.target}
                            >
                                {dom}
                            </Link>
                        )}

                    >
                        {children}


                    </ProLayout>

        </div>
    );
};