import * as React from "react"
import { toast } from "sonner"
import { File, FolderAdd, Pencil, TrashBin } from "akar-icons"

import { IFolder, IDriveContext } from "./types"

export const defaultFolder: IFolder = {
  id: "1",
  name: "Docs",
  files: [{ id: "5", name: "Driver License", content: "" }],
  folders: [],
}

export const FileContext = React.createContext<IDriveContext | undefined>(
  undefined
)

interface Props {
  children: React.ReactNode
}

const FileContextProvider: React.FC<Props> = ({ children }) => {
  const [drive, setDrive] = React.useState<IFolder>(defaultFolder)

  const addFile = () => {
    toast("File Added", {
      icon: <File size={15} />,
    })
  }

  const renameFile = (id: string, oldName: string, newName: string) => {
    toast(`${oldName} renamed to ${newName}`, {
      icon: <Pencil size={15} />,
    })
  }

  const deleteFile = (id: string, name: string) => {
    toast(`${name} deleted`, {
      icon: <TrashBin size={15} />,
    })
  }

  const addFolder = () => {
    toast("Folder Added", {
      icon: <FolderAdd size={15} />,
    })
  }

  const renameFolder = (id: string, oldName: string, newName: string) => {
    toast(`${oldName} renamed to ${newName}`, {
      icon: <Pencil size={15} />,
    })
  }

  const deleteFolder = (id: string, name: string) => {
    toast(`${name} deleted`, {
      icon: <TrashBin size={15} />,
    })
  }

  return (
    <FileContext.Provider
      value={{
        drive,
        addFile,
        renameFile,
        deleteFile,
        addFolder,
        renameFolder,
        deleteFolder,
      }}
    >
      {children}
    </FileContext.Provider>
  )
}

export default FileContextProvider
