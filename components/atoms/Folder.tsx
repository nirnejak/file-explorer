import * as React from "react"

import { Folder as FolderIcon } from "akar-icons"
import classNames from "utils/classNames"
import { IFolder } from "context/types"

interface Props {
  folder: IFolder
  isSelected: boolean
  isRenaming: boolean
}

const Folder: React.FC<Props> = ({ folder, isSelected, isRenaming }) => {
  return (
    <div className={classNames("rounded-lg")}>
      <FolderIcon />
      {folder.name}
    </div>
  )
}

export default Folder
