export type Setting = {
  key?: string;
  label: string;
  path: string;
  gitignore: boolean;
  additionalIgnores: string;
}

export type Settings = {
  [key: string]: Setting;
}