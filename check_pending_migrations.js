const { execSync } = require('child_process');

const output = execSync(
  'yarn run typeorm migration:generate -- src/database/migrations/MissingMigration || true',
).toString();

if (output.includes(`No changes in database schema were found`)) {
  console.info('There are no missing migrations');
  process.exit(0);
} else if (
  output.includes(`MissingMigration.ts has been generated successfully`)
) {
  console.error(
    'There are missing migrations, please run `yarn run migration:generate -- src/database/migrations/<your_migration_file_name>` on your local environment to generate them. Do not forgot to push them to the branch',
  );
  process.exit(1);
} else {
  console.error('An error occurred');
  process.exit(1);
}
