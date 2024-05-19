import * as React from "react"
import { File as FileIcon } from "akar-icons"

import classNames from "utils/classNames"
import { IFile } from "context/types"

interface Props {
  file: IFile
  isSelected: boolean
  isRenaming: boolean
}

const File: React.FC<Props> = ({ file, isSelected, isRenaming }) => {
  return (
    <div className={classNames("rounded-lg")}>
      <FileIcon />
    </div>
  )
}

export default File
