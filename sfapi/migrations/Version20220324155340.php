<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220324155340 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE audio (id INT AUTO_INCREMENT NOT NULL, boat_id INT NOT NULL, title VARCHAR(255) NOT NULL, file VARCHAR(255) NOT NULL, INDEX IDX_187D3695A1E84A29 (boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE text (id INT AUTO_INCREMENT NOT NULL, boat_id INT NOT NULL, title VARCHAR(255) NOT NULL, testimony VARCHAR(255) NOT NULL, INDEX IDX_3B8BA7C7A1E84A29 (boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE audio ADD CONSTRAINT FK_187D3695A1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE text ADD CONSTRAINT FK_3B8BA7C7A1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE boat DROP audio');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE audio');
        $this->addSql('DROP TABLE text');
        $this->addSql('ALTER TABLE boat ADD audio VARCHAR(255) DEFAULT NULL');
    }
}
