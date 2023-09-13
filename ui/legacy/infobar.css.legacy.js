// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
export default {
  cssContent: `/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.infobar {
  color: var(--color-text-primary);
  display: flex;
  flex: auto;
  flex-direction: column;
  position: relative;
  padding: 1px 6px;
}

.infobar:focus {
  box-shadow: 0 0 0 2px var(--color-background-elevation-2) inset;
}

.infobar-warning {
  --override-infobar-warning-background: rgb(253 242 192);

  background-color: var(--override-infobar-warning-background);
}

.infobar-error {
  --override-infobar-error-background: var(--color-error-background);
  --override-infobar-error-text: var(--color-error-text);

  background-color: var(--override-infobar-error-background);
  color: var(--override-infobar-error-text);
}

.-theme-with-dark-background .infobar-warning,
:host-context(.-theme-with-dark-background) .infobar-warning {
  --override-infobar-warning-background: rgb(63 52 2);
}

.infobar-main-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 25px;
}

.infobar-info-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
}

.infobar-info-message {
  display: flex;
  margin: 5px 0;
}

.infobar-info-text {
  display: flex;
  align-items: center;
  margin: 0 4px;
}

.infobar-details-rows {
  padding: 5px 5px 0;
}

.infobar-details-row {
  display: flex;
  flex-direction: column;
  line-height: 18px;
  padding-bottom: 6px;
}

.infobar-close-container {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.infobar-close-container > .infobar-button.link-style {
  margin: 4px;
}

.infobar-selectable {
  user-select: text;
}

.infobar-button {
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 0 4px;
}

.info-icon {
  -webkit-mask-image: var(--image-file-info);
  background-color: var(--icon-info);
}

.warning-icon {
  -webkit-mask-image: var(--image-file-warning);
  background-color: var(--icon-warning);
}

.error-icon {
  -webkit-mask-image: var(--image-file-cross-circle);
  background-color: var(--icon-error);
}

.issue-icon {
  -webkit-mask-image: var(--image-file-issue-text-filled);
  background-color: var(--icon-info);
}

.icon {
  -webkit-mask-size: 20px 20px;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.devtools-link.text-button:hover,
.devtools-link.text-button:focus,
.devtools-link.text-button:active {
  background-color: transparent;
  box-shadow: none;
}
`
};
