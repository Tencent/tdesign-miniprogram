module.exports = {
  // resolves from test to snapshot path
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace('__test__', '__test__/__virtualHostSnapshot__') + snapshotExtension,

  // resolves from snapshot to test path
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.replace('__test__/__virtualHostSnapshot__', '__test__').slice(0, -snapshotExtension.length),

  // Example test path, used for preflight consistency check of the implementation above
  testPathForConsistencyCheck: 'some/__tests__/example.test.js',
};
