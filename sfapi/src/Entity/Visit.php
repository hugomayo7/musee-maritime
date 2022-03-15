<?php

namespace App\Entity;

use App\Repository\VisitRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @apiResource()
 * @ORM\Entity(repositoryClass=VisitRepository::class)
 */
class Visit
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Boat::class, inversedBy="visits")
     * @ORM\JoinColumn(nullable=false)
     */
    private $id_boat;

    /**
     * @ORM\Column(type="date")
     */
    private $day;

    /**
     * @ORM\Column(type="integer")
     */
    private $maximum_places;

    /**
     * @ORM\Column(type="integer")
     */
    private $actual;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdBoat(): ?Boat
    {
        return $this->id_boat;
    }

    public function setIdBoat(?Boat $id_boat): self
    {
        $this->id_boat = $id_boat;

        return $this;
    }

    public function getDay(): ?\DateTimeInterface
    {
        return $this->day;
    }

    public function setDay(\DateTimeInterface $day): self
    {
        $this->day = $day;

        return $this;
    }

    public function getMaximumPlaces(): ?int
    {
        return $this->maximum_places;
    }

    public function setMaximumPlaces(int $maximum_places): self
    {
        $this->maximum_places = $maximum_places;

        return $this;
    }

    public function getActual(): ?int
    {
        return $this->actual;
    }

    public function setActual(int $actual): self
    {
        $this->actual = $actual;

        return $this;
    }
}
