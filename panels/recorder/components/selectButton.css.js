// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.select-button {
  display: flex;

  --override-button-no-right-border-radius: 1; /* True */
}

.select-button devtools-button {
  position: relative; /* Needed for outline to appear on top of the next element */
}

.select-menu-item-content-with-icon {
  display: flex;
  align-items: center;
}

.select-menu-item-content-with-icon::before {
  content: "";
  position: relative;
  left: 0;
  top: 0;
  background-color: var(--sys-color-on-surface);
  display: inline-block;
  mask-repeat: no-repeat;
  mask-position: center;
  width: 24px;
  height: 24px;
  margin-right: 4px;
  mask-image: var(--item-mask-icon);
}

devtools-select-menu {
  height: var(--override-select-menu-height, 24px);
  border-radius: 0 4px 4px 0;
  box-sizing: border-box;

  --override-select-menu-show-button-outline: var(--sys-color-state-focus-ring);
  --override-select-menu-label-with-arrow-padding: 0;
  --override-select-menu-border: none;
  --override-select-menu-show-button-padding: 0 6px 0 0;
}

devtools-select-menu.primary {
  border: none;
  border-left: 1px solid var(--override-icon-and-text-color);

  --override-icon-and-text-color: var(--sys-color-cdt-base-container);
  --override-select-menu-arrow-color: var(--override-icon-and-text-color);
  --override-divider-color: var(--override-icon-and-text-color);
  --override-select-menu-background-color: var(--sys-color-primary);
  --override-select-menu-active-background-color:
    var(
      --override-select-menu-background-color
    );
}

devtools-select-menu.primary:hover {
  --override-select-menu-background-color: color-mix(in sRGB, var(--sys-color-primary), var(--sys-color-state-hover-on-prominent) 10%);
}

devtools-select-menu[disabled].primary,
devtools-select-menu[disabled].primary:hover {
  --override-icon-and-text-color: var(--sys-color-state-disabled);
  --override-select-menu-background-color: var(--sys-color-cdt-base-container-elevation-1);
}

/*# sourceURL=selectButton.css */
`);

export default styles;
