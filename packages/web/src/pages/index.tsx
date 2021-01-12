import { useMemo } from 'react'
import { NextPage } from 'next'
import { getColor } from '@saxo/shared/utils/getColor'

const IndexPage: NextPage = () => {
  const color = useMemo(() => {
    return getColor()
  }, [getColor])

  return <div>{color}</div>
}

export default IndexPage
