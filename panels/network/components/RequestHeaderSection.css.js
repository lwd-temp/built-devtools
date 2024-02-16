// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
}

devtools-header-section-row:last-of-type {
  margin-bottom: 10px;
}

devtools-header-section-row:first-of-type {
  margin-top: 2px;
}

.call-to-action {
  background-color: var(--sys-color-neutral-container);
  padding: 8px;
  border-radius: 5px;
  margin: 4px;
}

.call-to-action-body {
  padding: 6px 0;
  margin-left: 9.5px;
  border-left: 2px solid var(--issue-color-yellow);
  padding-left: 18px;
  line-height: 20px;
}

.call-to-action .explanation {
  font-weight: bold;
}

.call-to-action code {
  font-size: 90%;
}

.call-to-action .example .comment::before {
  content: " — ";
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

.explanation .link {
  font-weight: normal;
}

.inline-icon {
  vertical-align: middle;
}

@media (forced-colors: active) {
  .link,
  .devtools-link {
    color: linktext;
    text-decoration-color: linktext;
  }
}

/*# sourceURL=RequestHeaderSection.css */
`);

export default styles;
