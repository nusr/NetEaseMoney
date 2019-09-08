import React from 'react';
// 收入支出模型
export enum DataType {
  in = 0, // 收入
  out, // 支出
  other, // 内部转账
}
export type RecordType = {
  id: number;
  categoryId: number; // 类型id
  description: string; // 描述
  money: number; // 金额
  createTime: number; // 创建时间
  updateTime: number; // 修改时间
  type: DataType;
};

// 分类模型

export type CategoryType = {
  id: number;
  createTime: number; // 创建时间
  updateTime: number; // 修改时间
  name: string; // 类型名
  parentId: number; // 父分类 ID
};

// 报表模型
export type ReportItemType = {
  money: number;
  count: number;
  percent: number;
  typeId: string;
  id: number;
};
// 我的 列表模型
export type UserItemType = {
  title: string;
  subTitle: string;
  icon: () => React.ReactElement<any>;
  path: string;
  id: string;
};
