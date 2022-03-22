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
    private $id_boat;

    /**
     * @Groups({"characteristics:read", "characteristics:write"})
     * @ORM\Column(type="integer", nullable=true)
     */
    private $start_year;

    /**
     * @Groups({"characteristics:read", "characteristics:write"})
     * @ORM\Column(type="string", length=255)
     */
    private $material;

    /**
     * @Groups({"characteristics:read", "characteristics:write"})
     * @ORM\Column(type="string", length=255)
     */
    private $initial_owner;

    /**
     * @Groups({"characteristics:read", "characteristics:write"})
     * @ORM\Column(type="string", length=255)
     */
    private $initial_harbor;

    /**
     * @Groups({"characteristics:read", "characteristics:write"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $collection_entry;

    /**
     * @Groups({"characteristics:read", "characteristics:write"})
     * @ORM\Column(type="string", length=255)
     */
    private $buy_price;

    /**
     * @Groups({"characteristics:read", "characteristics:write"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $historic_monument_rank_date;

    /**
     * @Groups({"characteristics:read","characteristics:write"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $restore;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdBoat(): ?Boat
    {
        return $this->boat;
    }

    public function setId_Boat(Boat $boat): self
    {
        $this->boat = $boat;

        return $this;
    }

    public function getStartYear(): ?int
    {
        return $this->start_year;
    }

    public function setStart_Year(int $start_year): self
    {
        $this->start_year = $start_year;

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
        return $this->initial_owner;
    }

    public function setInitial_Owner(string $initial_owner): self
    {
        $this->initial_owner = $initial_owner;

        return $this;
    }

    public function getInitialHarbor(): ?string
    {
        return $this->initial_harbor;
    }

    public function setInitial_Harbor(string $initial_harbor): self
    {
        $this->initial_harbor = $initial_harbor;

        return $this;
    }

    public function getCollectionEntry(): ?string
    {
        return $this->collection_entry;
    }

    public function setCollection_Entry(?string $collection_entry): self
    {
        $this->collection_entry = $collection_entry;

        return $this;
    }

    public function getBuyPrice(): ?string
    {
        return $this->buy_price;
    }

    public function setBuy_Price(string $buy_price): self
    {
        $this->buy_price = $buy_price;

        return $this;
    }

    public function getHistoricMonumentRankDate(): ?string
    {
        return $this->historic_monument_rank_date;
    }

    public function setHistoric_Monument_Rank_Date(?string $historic_monument_rank_date): self
    {
        $this->historic_monument_rank_date = $historic_monument_rank_date;

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
