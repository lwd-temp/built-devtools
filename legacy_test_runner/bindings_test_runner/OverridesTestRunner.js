// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

self.BindingsTestRunner = self.BindingsTestRunner || {};

import * as Common from '../../core/common/common.js';

/**
 * @param {string} folderPath
 * @return {!{isolatedFileSystem: !Persistence.IsolatedFileSystem, project: !Workspace.Project, testFileSystem: !BindingsTestRunner.TestFileSystem}}
 */
BindingsTestRunner.createOverrideProject = async function(folderPath) {
  const testFileSystem = new BindingsTestRunner.TestFileSystem(folderPath);
  const isolatedFileSystem = await testFileSystem.reportCreatedPromise('overrides');
  isolatedFileSystem.typeInternal = 'overrides';
  const project =
      self.Workspace.workspace.project(Persistence.FileSystemWorkspaceBinding.projectId(isolatedFileSystem.path()));
  console.assert(project);
  return {isolatedFileSystem, project, testFileSystem};
};

/**
 * @param {boolean} enabled
 */
BindingsTestRunner.setOverridesEnabled = function(enabled) {
  Common.Settings.moduleSetting('persistenceNetworkOverridesEnabled').set(enabled);
};
