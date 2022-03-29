<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220329062208 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE audio (id INT AUTO_INCREMENT NOT NULL, boat_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, file VARCHAR(255) NOT NULL, INDEX IDX_187D3695A1E84A29 (boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE boat (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, historic LONGTEXT NOT NULL, state INT NOT NULL, state_text VARCHAR(255) DEFAULT NULL, lat DOUBLE PRECISION NOT NULL, lng DOUBLE PRECISION NOT NULL, image VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE characteristics (id INT AUTO_INCREMENT NOT NULL, boat_id INT NOT NULL, start_year INT DEFAULT NULL, material VARCHAR(255) NOT NULL, initial_owner VARCHAR(255) NOT NULL, initial_harbor VARCHAR(255) NOT NULL, collection_entry VARCHAR(255) DEFAULT NULL, buy_price VARCHAR(255) NOT NULL, historic_monument_rank_date VARCHAR(255) DEFAULT NULL, restore VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_7037B156A1E84A29 (boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE image (id INT AUTO_INCREMENT NOT NULL, boat_id INT DEFAULT NULL, description LONGTEXT DEFAULT NULL, image VARCHAR(255) NOT NULL, INDEX IDX_C53D045FA1E84A29 (boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE schedule (id INT AUTO_INCREMENT NOT NULL, day VARCHAR(255) NOT NULL, opening VARCHAR(255) NOT NULL, closing VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE text (id INT AUTO_INCREMENT NOT NULL, boat_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, testimony VARCHAR(2000) NOT NULL, INDEX IDX_3B8BA7C7A1E84A29 (boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE visit (id INT AUTO_INCREMENT NOT NULL, boat_id INT NOT NULL, day VARCHAR(255) NOT NULL, maximum_places INT NOT NULL, actual INT NOT NULL, visit_time INT DEFAULT NULL, INDEX IDX_437EE939A1E84A29 (boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE audio ADD CONSTRAINT FK_187D3695A1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE characteristics ADD CONSTRAINT FK_7037B156A1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045FA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE text ADD CONSTRAINT FK_3B8BA7C7A1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE visit ADD CONSTRAINT FK_437EE939A1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE audio DROP FOREIGN KEY FK_187D3695A1E84A29');
        $this->addSql('ALTER TABLE characteristics DROP FOREIGN KEY FK_7037B156A1E84A29');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045FA1E84A29');
        $this->addSql('ALTER TABLE text DROP FOREIGN KEY FK_3B8BA7C7A1E84A29');
        $this->addSql('ALTER TABLE visit DROP FOREIGN KEY FK_437EE939A1E84A29');
        $this->addSql('DROP TABLE audio');
        $this->addSql('DROP TABLE boat');
        $this->addSql('DROP TABLE characteristics');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE schedule');
        $this->addSql('DROP TABLE text');
        $this->addSql('DROP TABLE visit');
    }
}
