export interface IFile {
  id: string
  name: string
  content: string
}

export interface IFolder {
  id: string
  name: string
  files: IFile[]
  folders: IFolder[]
}

export interface IDriveContext {
  drive: IFolder
  addFile: (name: string) => void
  renameFile: (id: string, oldName: string, newName: string) => void
  deleteFile: (id: string, name: string) => void
  addFolder: () => void
  renameFolder: (id: string, oldName: string, newName: string) => void
  deleteFolder: (id: string, name: string) => void
}
