import React from 'react'

import AntdList from 'antd/lib/list'
import Typography from 'antd/lib/typography'

interface IListProps {
  array: string[]
  title: string
}

const List: React.FC<IListProps> = ({ array, title }) => {
  return array.length ? (
    <AntdList
      header={<Typography.Text>{title}</Typography.Text>}
      bordered
      dataSource={array}
      renderItem={item => (
        <AntdList.Item>
          <a href={item} target="_blank" rel="noreferrer">{item}</a>
        </AntdList.Item>
      )}
      className="list"
    />
  ) : null
}

export default List