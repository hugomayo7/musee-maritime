<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220323151442 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE characteristics DROP FOREIGN KEY FK_7037B1567F75E359');
        $this->addSql('DROP INDEX UNIQ_7037B1567F75E359 ON characteristics');
        $this->addSql('ALTER TABLE characteristics CHANGE id_boat_id boat_id INT NOT NULL');
        $this->addSql('ALTER TABLE characteristics ADD CONSTRAINT FK_7037B156A1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_7037B156A1E84A29 ON characteristics (boat_id)');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045F7F75E359');
        $this->addSql('DROP INDEX IDX_C53D045F7F75E359 ON image');
        $this->addSql('ALTER TABLE image CHANGE id_boat_id boat_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045FA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('CREATE INDEX IDX_C53D045FA1E84A29 ON image (boat_id)');
        $this->addSql('ALTER TABLE visit DROP FOREIGN KEY FK_437EE9397F75E359');
        $this->addSql('DROP INDEX IDX_437EE9397F75E359 ON visit');
        $this->addSql('ALTER TABLE visit CHANGE id_boat_id boat_id INT NOT NULL');
        $this->addSql('ALTER TABLE visit ADD CONSTRAINT FK_437EE939A1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('CREATE INDEX IDX_437EE939A1E84A29 ON visit (boat_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE characteristics DROP FOREIGN KEY FK_7037B156A1E84A29');
        $this->addSql('DROP INDEX UNIQ_7037B156A1E84A29 ON characteristics');
        $this->addSql('ALTER TABLE characteristics CHANGE boat_id id_boat_id INT NOT NULL');
        $this->addSql('ALTER TABLE characteristics ADD CONSTRAINT FK_7037B1567F75E359 FOREIGN KEY (id_boat_id) REFERENCES boat (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_7037B1567F75E359 ON characteristics (id_boat_id)');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045FA1E84A29');
        $this->addSql('DROP INDEX IDX_C53D045FA1E84A29 ON image');
        $this->addSql('ALTER TABLE image CHANGE boat_id id_boat_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F7F75E359 FOREIGN KEY (id_boat_id) REFERENCES boat (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_C53D045F7F75E359 ON image (id_boat_id)');
        $this->addSql('ALTER TABLE visit DROP FOREIGN KEY FK_437EE939A1E84A29');
        $this->addSql('DROP INDEX IDX_437EE939A1E84A29 ON visit');
        $this->addSql('ALTER TABLE visit CHANGE boat_id id_boat_id INT NOT NULL');
        $this->addSql('ALTER TABLE visit ADD CONSTRAINT FK_437EE9397F75E359 FOREIGN KEY (id_boat_id) REFERENCES boat (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_437EE9397F75E359 ON visit (id_boat_id)');
    }
}
