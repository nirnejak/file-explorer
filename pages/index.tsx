import * as React from "react"

import Explorer from "components/Explorer"
import Breadcrumbs from "components/atoms/Breadcrumbs"

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <div>
      <Breadcrumbs />
      <Explorer />
    </div>
  )
}

export default HomePage
