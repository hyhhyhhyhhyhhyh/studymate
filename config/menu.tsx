import { MenuDataItem } from "@ant-design/pro-layout";

//顶部菜单栏
export const menus = [
  {
    path: "/",
    name: "主页",
  },
  {
    path: "/questions",
    name: "题目",
  },
  {
    path: "/banks",
    name: "题库",
  },
  {
    path: "/admin",
    name: "管理",
    children: [
      {
        path: "/admin/user",
        name: "用户管理",
      },
    ],
  },
] as MenuDataItem[];
