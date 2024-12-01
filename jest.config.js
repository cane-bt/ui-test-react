// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     "^.+.tsx?$": ["ts-jest",{}],
//   },
// };

// https://www.udemy.com/course/ts-webapp-test/learn/lecture/39797944#overview
/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'jest-environment-jsdom',
  // 以下にtsconfig.app.jsonの設定を追加する
  transform: {
    '^.+.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
