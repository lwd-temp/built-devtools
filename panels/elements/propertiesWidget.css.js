// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.properties-widget-section {
  padding: 2px 0 2px 5px;
  flex: none;
}

.properties-widget-toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
  flex-shrink: 0;
}

.properties-widget-filter-box {
  flex: auto;
  display: flex;
}

.properties-widget-filter-box > input {
  border: 1px solid var(--sys-color-neutral-outline);
  border-radius: 4px;
  width: 100%;
  background: var(--sys-color-cdt-base-container);
  padding-left: 4px;
  margin: 3px;

  &:focus,
  &:not(:placeholder-shown) {
    border-color: var(--sys-color-state-focus-ring);
  }

  &:hover:not(:focus) {
    background: var(--sys-color-state-hover-on-subtle);
  }

  &::placeholder {
    color: var(--sys-color-token-subtle);
  }
}

@media (forced-colors: active) {
  .properties-widget-filter-box > input {
    border: 1px solid ButtonText;
  }
}

/*# sourceURL=propertiesWidget.css */
`);
export default styles;