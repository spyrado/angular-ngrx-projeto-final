import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Trash, Play, CornerDownLeft } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Trash,
  Play,
  CornerDownLeft
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }