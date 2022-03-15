<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220309231506 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE boat (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, historic LONGTEXT NOT NULL, state INT NOT NULL, state_text VARCHAR(255) NOT NULL, audio VARCHAR(255) DEFAULT NULL, lat DOUBLE PRECISION NOT NULL, lng DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE characteristics (id INT AUTO_INCREMENT NOT NULL, id_boat_id INT NOT NULL, start_year INT NOT NULL, material VARCHAR(255) NOT NULL, initial_owner VARCHAR(255) NOT NULL, initial_harbor VARCHAR(255) NOT NULL, collection_entry VARCHAR(255) DEFAULT NULL, buy_price VARCHAR(255) NOT NULL, historic_monument_rank_date VARCHAR(255) DEFAULT NULL, restore VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_7037B1567F75E359 (id_boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE image (id INT AUTO_INCREMENT NOT NULL, id_boat_id INT DEFAULT NULL, description LONGTEXT DEFAULT NULL, INDEX IDX_C53D045F7F75E359 (id_boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE schedule (id INT AUTO_INCREMENT NOT NULL, day DATE NOT NULL, opening VARCHAR(255) NOT NULL, closing VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE visit (id INT AUTO_INCREMENT NOT NULL, id_boat_id INT NOT NULL, day DATE NOT NULL, maximum_places INT NOT NULL, actual INT NOT NULL, INDEX IDX_437EE9397F75E359 (id_boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE characteristics ADD CONSTRAINT FK_7037B1567F75E359 FOREIGN KEY (id_boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F7F75E359 FOREIGN KEY (id_boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE visit ADD CONSTRAINT FK_437EE9397F75E359 FOREIGN KEY (id_boat_id) REFERENCES boat (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE characteristics DROP FOREIGN KEY FK_7037B1567F75E359');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045F7F75E359');
        $this->addSql('ALTER TABLE visit DROP FOREIGN KEY FK_437EE9397F75E359');
        $this->addSql('DROP TABLE boat');
        $this->addSql('DROP TABLE characteristics');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE schedule');
        $this->addSql('DROP TABLE visit');
    }
}
