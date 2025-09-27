#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 全パッケージのカバレッジレポートを統合するスクリプト
 */

const coveragePaths = [
  'packages/ui/coverage/coverage-summary.json',
  'packages/graphql-client/coverage/coverage-summary.json',
  'packages/validation/coverage/coverage-summary.json',
  'apps/api/coverage/coverage-summary.json',
];

const mergedCoverage = {
  total: {
    lines: { total: 0, covered: 0, skipped: 0, pct: 0 },
    functions: { total: 0, covered: 0, skipped: 0, pct: 0 },
    statements: { total: 0, covered: 0, skipped: 0, pct: 0 },
    branches: { total: 0, covered: 0, skipped: 0, pct: 0 },
  },
  packages: {},
};

console.log('📊 テストカバレッジレポート統合中...\n');

for (const coveragePath of coveragePaths) {
  const fullPath = path.resolve(coveragePath);

  if (fs.existsSync(fullPath)) {
    try {
      const coverage = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      const packageName =
        coveragePath.split('/')[0] + '/' + coveragePath.split('/')[1];

      mergedCoverage.packages[packageName] = coverage.total;

      // 統合計算
      ['lines', 'functions', 'statements', 'branches'].forEach((metric) => {
        mergedCoverage.total[metric].total += coverage.total[metric].total;
        mergedCoverage.total[metric].covered += coverage.total[metric].covered;
        mergedCoverage.total[metric].skipped +=
          coverage.total[metric].skipped || 0;
      });

      console.log(`✅ ${packageName}: カバレッジ統合完了`);
    } catch (error) {
      console.log(`⚠️  ${coveragePath}: 読み込みエラー - ${error.message}`);
    }
  } else {
    console.log(`⚠️  ${coveragePath}: ファイルが見つかりません`);
  }
}

// パーセンテージ計算
['lines', 'functions', 'statements', 'branches'].forEach((metric) => {
  const total = mergedCoverage.total[metric];
  total.pct =
    total.total > 0 ? Math.round((total.covered / total.total) * 100) : 0;
});

// 結果出力
console.log('\n📈 統合カバレッジレポート');
console.log('================================');
console.log(`総合カバレッジ:`);
console.log(
  `  Lines:      ${mergedCoverage.total.lines.pct}% (${mergedCoverage.total.lines.covered}/${mergedCoverage.total.lines.total})`
);
console.log(
  `  Functions:  ${mergedCoverage.total.functions.pct}% (${mergedCoverage.total.functions.covered}/${mergedCoverage.total.functions.total})`
);
console.log(
  `  Statements: ${mergedCoverage.total.statements.pct}% (${mergedCoverage.total.statements.covered}/${mergedCoverage.total.statements.total})`
);
console.log(
  `  Branches:   ${mergedCoverage.total.branches.pct}% (${mergedCoverage.total.branches.covered}/${mergedCoverage.total.branches.total})`
);

console.log('\nパッケージ別詳細:');
Object.entries(mergedCoverage.packages).forEach(([pkg, coverage]) => {
  console.log(`  ${pkg}:`);
  console.log(
    `    Lines: ${coverage.lines.pct}%, Functions: ${coverage.functions.pct}%, Branches: ${coverage.branches.pct}%`
  );
});

// カバレッジファイル保存
const outputPath = path.resolve('coverage-merged.json');
fs.writeFileSync(outputPath, JSON.stringify(mergedCoverage, null, 2));
console.log(`\n💾 統合レポートを保存: ${outputPath}`);

// 品質チェック
const hasFailures = [];
const requiredCoverage = {
  'packages/ui': 80,
  'packages/graphql-client': 80,
  'packages/validation': 80,
  'apps/api': 85,
};

Object.entries(requiredCoverage).forEach(([pkg, required]) => {
  const coverage = mergedCoverage.packages[pkg];
  if (coverage && coverage.lines.pct < required) {
    hasFailures.push({
      package: pkg,
      actual: coverage.lines.pct,
      required,
    });
  }
});

if (hasFailures.length > 0) {
  console.log('\n❌ カバレッジ要件未達のパッケージ:');
  hasFailures.forEach(({ package: pkg, actual, required }) => {
    console.log(`  ${pkg}: ${actual}% < ${required}% (要件未達)`);
  });
  process.exit(1);
} else {
  console.log('\n✅ 全パッケージがカバレッジ要件を満たしています');
}
