import { InjectionToken } from '@angular/core';
import { ModFrameworkConfig } from '../models/mod-framework-config.model';

export const ModConfig = new InjectionToken<ModFrameworkConfig>('modConfig');
