<?php

namespace App\Entity;

use App\Repository\VisitRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @apiResource(
 *      normalizationContext={"groups"={"visit:read"}},
 *      denormalizationContext={"groups"={"visit:write"}}
 * )
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
     * @Groups({"visit:read"})
     * @ORM\ManyToOne(targetEntity=Boat::class, inversedBy="visits")
     * @ORM\JoinColumn(nullable=false)
     */
    private $id_boat;

    /**
<<<<<<< HEAD
     * @Groups({"visit:read", "visit:write"})
     * @ORM\Column(type="date")
=======
     * @ORM\Column(type="string")
>>>>>>> dc008f7cc7fcfa88347939d386761e752b8d4381
     */
    private $day;

    /**
     * @Groups({"visit:read", "visit:write"})
     * @ORM\Column(type="integer")
     */
    private $maximum_places;

    /**
     * @Groups({"visit:read", "visit:write"})
     * @ORM\Column(type="integer")
     */
    private $actual;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $visitTime;

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

    public function getDay(): ?string
    {
        return $this->day;
    }

    public function setDay(string $day): self
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

    public function getVisitTime(): ?int
    {
        return $this->visitTime;
    }

    public function setVisitTime(?int $visitTime): self
    {
        $this->visitTime = $visitTime;

        return $this;
    }
}
