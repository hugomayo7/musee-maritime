## Executer les fixtures
php bin/console doctrine:schema:drop --full-database --force
Supprimer les fichiers "Versions" de migrations existants
php bin/console make:migration
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load