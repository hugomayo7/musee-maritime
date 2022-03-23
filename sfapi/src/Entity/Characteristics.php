<?php

namespace App\Entity;

use App\Repository\CharacteristicsRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @apiResource(
 *      normalizationContext={"groups"={"characteristics:read"}},
 *      denormalizationContext={"groups"={"characteristics:write"}}
 * )
 *
 * @ORM\Entity(repositoryClass=CharacteristicsRepository::class)
 */
class Characteristics
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"characteristics:read", "characteristics:write"})
     * @ORM\OneToOne(targetEntity=Boat::class, inversedBy="characteristics", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $boat;

    /**
     * @Groups({"characteristics:read", "characteristics:write", "boat:read"})
     * @ORM\Column(type="integer", nullable=true)
     */
    private $startYear;

    /**
     * @Groups({"characteristics:read", "characteristics:write", "boat:read"})
     * @ORM\Column(type="string", length=255)
     */
    private $material;

    /**
     * @Groups({"characteristics:read", "characteristics:write", "boat:read"})
     * @ORM\Column(type="string", length=255)
     */
    private $initialOwner;

    /**
     * @Groups({"characteristics:read", "characteristics:write", "boat:read"})
     * @ORM\Column(type="string", length=255)
     */
    private $initialHarbor;

    /**
     * @Groups({"characteristics:read", "characteristics:write", "boat:read"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $collectionEntry;

    /**
     * @Groups({"characteristics:read", "characteristics:write", "boat:read"})
     * @ORM\Column(type="string", length=255)
     */
    private $buyPrice;

    /**
     * @Groups({"characteristics:read", "characteristics:write", "boat:read"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $historicMonumentRankDate;

    /**
     * @Groups({"characteristics:read","characteristics:write", "boat:read"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $restore;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBoat(): ?Boat
    {
        return $this->boat;
    }

    public function setBoat(Boat $boat): self
    {
        $this->boat = $boat;

        return $this;
    }

    public function getStartYear(): ?int
    {
        return $this->startYear;
    }

    public function setStartYear(int $startYear): self
    {
        $this->startYear = $startYear;

        return $this;
    }

    public function getMaterial(): ?string
    {
        return $this->material;
    }

    public function setMaterial(string $material): self
    {
        $this->material = $material;

        return $this;
    }

    public function getInitialOwner(): ?string
    {
        return $this->initialOwner;
    }

    public function setInitialOwner(string $initialOwner): self
    {
        $this->initialOwner = $initialOwner;

        return $this;
    }

    public function getInitialHarbor(): ?string
    {
        return $this->initialHarbor;
    }

    public function setInitialHarbor(string $initialHarbor): self
    {
        $this->initialHarbor = $initialHarbor;

        return $this;
    }

    public function getCollectionEntry(): ?string
    {
        return $this->collectionEntry;
    }

    public function setCollectionEntry(?string $collectionEntry): self
    {
        $this->collectionEntry = $collectionEntry;

        return $this;
    }

    public function getBuyPrice(): ?string
    {
        return $this->buyPrice;
    }

    public function setBuyPrice(string $buyPrice): self
    {
        $this->buyPrice = $buyPrice;

        return $this;
    }

    public function getHistoricMonumentRankDate(): ?string
    {
        return $this->historicMonumentRankDate;
    }

    public function setHistoricMonumentRankDate(?string $historicMonumentRankDate): self
    {
        $this->historicMonumentRankDate = $historicMonumentRankDate;

        return $this;
    }

    public function getRestore(): ?string
    {
        return $this->restore;
    }

    public function setRestore(?string $restore): self
    {
        $this->restore = $restore;

        return $this;
    }
}
