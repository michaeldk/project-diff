export interface Setting {
  label: string;
  path: string;
  gitignore: boolean;
  additionalIgnores: string[];
}

export interface Settings {
  [key: string]: Setting;
}