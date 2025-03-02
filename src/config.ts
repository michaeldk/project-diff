import { app } from 'electron';
import path from 'node:path';

export const SETTINGS_FILE_PATH = path.join(app.getPath('userData'), 'project-diff.json');