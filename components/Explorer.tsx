import * as React from "react"

import Folder from "./atoms/Folder"
import File from "./atoms/File"
import { FileContext } from "context/FileContext"

interface Props {}

const Explorer: React.FC<Props> = () => {
  const fileContext = React.useContext(FileContext)
  console.log(fileContext?.drive)

  const [selectedItem, setSelectedItem] = React.useState("")
  const [renamingItem, setRenamingItem] = React.useState("")

  const id = "1"

  return (
    <div className="grid grid-cols-7 gap-3">
      {fileContext?.drive.folders.map((folder, index) => (
        <Folder
          key={index}
          folder={folder}
          isSelected={selectedItem === id}
          isRenaming={renamingItem === id}
        />
      ))}
      {fileContext?.drive.files.map((file, index) => (
        <File
          key={index}
          file={file}
          isSelected={selectedItem === id}
          isRenaming={renamingItem === id}
        />
      ))}
    </div>
  )
}

export default Explorer
