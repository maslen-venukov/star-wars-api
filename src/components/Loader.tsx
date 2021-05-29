import React from 'react'

import Spin from 'antd/lib/spin'

const Loader: React.FC = () => {
  return (
    <div className="loading">
      <Spin size="large" />
    </div>
  )
}

export default Loader