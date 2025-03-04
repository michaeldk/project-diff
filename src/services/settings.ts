import fs from 'node:fs';
import { SETTINGS_FILE_PATH } from '../config';
import { Setting, Settings } from '../types/settings';
import slug from 'slug';

function readSettings(): Settings {
  if (!fs.existsSync(SETTINGS_FILE_PATH)) {
    fs.writeFileSync(SETTINGS_FILE_PATH, JSON.stringify({}, null, 2), 'utf-8');
    return {};
  }
  const data = fs.readFileSync(SETTINGS_FILE_PATH, 'utf-8');
  return JSON.parse(data);
}

function writeSettings(settings: Settings): void {
  fs.writeFileSync(SETTINGS_FILE_PATH, JSON.stringify(settings, null, 2), 'utf-8');
}

export function getSetting(key: string): Setting | undefined {
  const settings = readSettings();
  return settings[key];
}

export function setSetting(value: Setting): void {
  const settings = readSettings();
  const key = slug(value.label);
  value.key = key;
  settings[key] = value;
  writeSettings(settings);
}

export function editSetting(key: string, value: Setting): void {
  const settings = readSettings();
  settings[key] = value;
  writeSettings(settings);
}

export function deleteSetting(key: string): void {
  const settings = readSettings();
  delete settings[key];
  writeSettings(settings);
}

export function getAllSettings(): Settings {
  return readSettings();
}