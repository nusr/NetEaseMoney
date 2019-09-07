export const record = {
  name: 'records',
  columns: [
    {name: 'type_id', type: 'number', isIndexed: true},// 类型id
    {name: 'desc', type: 'string', isOptional: true},// 描述
    {name: 'money', type: 'string'},// 金额
    {name: 'create_time_at', type: 'number'},// 创建时间
    {name: 'update_time_at', type: 'number', isOptional: true},// 修改时间
    {name: 'record_type', type: 'number'},// 收入 0 支出 1 内部转账 2
  ]
}
export const type = {
  name: 'types',
  columns: [
    {name: 'create_time_at', type: 'number'},// 创建时间
    {name: 'update_time_at', type: 'number', isOptional: true},// 修改时间
    {name: 'name', type: 'string'},// 类型名
    {name: 'parent_id', type: 'string', isOptional: true},// 父分类 ID
  ]
}
